import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const { message, loading, registerError } = useSelector(state=>state.auth)

    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(register(formData)); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="username" 
                onChange={handleChange} 
                value={formData.username} 
                placeholder="Username"  
                autoComplete="username"
            />
            <input 
                name="email" 
                onChange={handleChange} 
                value={formData.email} 
                placeholder="Email" 
                autoComplete="email" 
            />
            <input 
                name="password" 
                type="password" 
                onChange={handleChange} 
                value={formData.password} 
                placeholder="Password" 
                autoComplete="new-password"
            />
            <button type="submit">Register</button>
            {loading && <p>loading...</p>}
            {registerError && <p>{registerError}</p>}
            {message && <p>{message}</p>}
        </form>
    );
};

export default Register;