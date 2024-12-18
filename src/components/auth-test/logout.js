import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions';

const Logout = () => {
    const dispatch = useDispatch();
    
    const handleLogout = async () => {
        await dispatch(logout());
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
