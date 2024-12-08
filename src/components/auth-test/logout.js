import React from 'react';
import { useDispatch } from 'react-redux';
import AuthService from '../../services/auth-service';
import { logoutSuccess } from '../../actions';

const Logout = () => {
    const dispatch = useDispatch();

    const authService = new AuthService();
    
    const handleLogout = async () => {
        await authService.logout();
        dispatch(logoutSuccess());
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
