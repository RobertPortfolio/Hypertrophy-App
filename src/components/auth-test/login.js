import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { loginSuccess, login } from '../../actions';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const dispatch = useDispatch();
    const { loading, user, error } = useSelector(state => state.auth)

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const userToken = jwtDecode(token);
                console.log(`Decoded user:`, userToken);
                dispatch(loginSuccess(userToken));
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, [dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login(formData)); // response.user должен прийти с API
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
            <input name="password" type="password" onChange={handleChange} value={formData.password} placeholder="Password" />
            <button type="submit">Login</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && <p>{user.email}</p>}
        </form>
    );
};

export default Login;