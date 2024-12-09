import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions';

const Login = () => {
    const [formData, setFormData] = useState({ emailOrUsername: '', password: '' });

    const dispatch = useDispatch();
    const { loading, user, loginError } = useSelector(state => state.auth)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login(formData)); // response.user должен прийти с API
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="emailOrUsername" 
                onChange={handleChange} 
                value={formData.emailOrUsername} 
                placeholder="Email Or Username" 
                autoComplete="username" 
            />
            <input 
                name="password" 
                type="password" 
                onChange={handleChange} 
                value={formData.password} 
                placeholder="Password" 
                autoComplete="current-password"
            />
            <button type="submit">Login</button>
            {loading && <p>Loading...</p>}
            {loginError && <p>Error: {loginError}</p>}
            {user && <p>{user.username}</p>}
        </form>
    );
};

export default Login;