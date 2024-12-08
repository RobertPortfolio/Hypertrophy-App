
export default class AuthService {

    _baseUrl = 'https://workout-programs-api.onrender.com';
    _testUrl = 'http://localhost:5000';

    // Регистрация нового пользователя
    register = async (userData) => {
        const response = await fetch(`${this._baseUrl}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error during registration: ${errorData.error}`);
        }
        return response.json();
    }

    // Авторизация пользователя
    login = async (credentials) => {
        const response = await fetch(`${this._baseUrl}/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error during login: ${errorData.error}`);
        }
        const data = await response.json();
        // Сохранение токена в localStorage
        if (data.token) {
            localStorage.setItem('token', data.token);
        }

        return data;
    }

    // Выход пользователя
    logout = async () => {
        const response = await fetch(`${this._baseUrl}/auth/logout`, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error('Error during logout');
        }
        const data = await response.json();

        // Удаляем токен из localStorage
        localStorage.removeItem('token');
        return data;
    }

    // Получение информации о текущем пользователе
    getCurrentUser = async () => {
        const response = await fetch(`${this._baseUrl}/auth/me`, {
            method: 'GET',
            credentials: 'include', // Включение передачи cookies
        });
        if (!response.ok) {
            throw new Error('Error fetching current user');
        }
        return response.json();
    }

}