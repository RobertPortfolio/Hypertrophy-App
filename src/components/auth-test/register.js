import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const { message, loading, error } = useSelector(state=>state.auth)

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
            <input name="username" onChange={handleChange} value={formData.username} placeholder="Username" />
            <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
            <input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
            <button type="submit">Register</button>
            {loading && <p>loading...</p>}
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
        </form>
    );
};

export default Register;