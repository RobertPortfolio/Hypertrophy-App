
export default class ProgramsService {

	_baseUrl = 'https://workout-programs-api.onrender.com/programs';

	getProgramById = async (id) => {
	    try {
	        const response = await fetch(`${this._baseUrl}/${id}`); // Отправляем GET-запрос к вашему API
	        if (!response.ok) {
	            throw new Error('Program not found');
	        }
	        const program = await response.json(); // Преобразуем ответ в JSON
	        return program; // Возвращаем данные
	    } catch (error) {
	        console.error('Error fetching program:', error.message);
	        throw error; // Пробрасываем ошибку дальше
	    }
	};

	getPrograms = async () => {
	    try {
	        const response = await fetch(`${this._baseUrl}`); // Отправляем GET-запрос к вашему API
	        if (!response.ok) {
	            throw new Error('Program not found');
	        }
	        const programs = await response.json(); // Преобразуем ответ в JSON
	        return programs; // Возвращаем данные
	    } catch (error) {
	        console.error('Error fetching program:', error.message);
	        throw error; // Пробрасываем ошибку дальше
	    }
	};

	deleteProgramById = async (id) => {
	    try {
	        const response = await fetch(`${this._baseUrl}/${id}`, {
	            method: 'DELETE', // Указываем HTTP-метод DELETE
	        });

	        if (!response.ok) {
	            throw new Error('Failed to delete the program'); // Если статус ответа не успешен, выбрасываем ошибку
	        }

	        return { message: 'Program deleted successfully' }; // Возвращаем успешный результат
	    } catch (error) {
	        console.error('Error deleting program:', error.message);
	        throw error; // Пробрасываем ошибку дальше
	    }
	};

	addProgram = async (programData) => {
	    try {
	        const response = await fetch(`${this._baseUrl}`, {
	            method: 'POST', // Метод запроса
	            headers: {
	                'Content-Type': 'application/json', // Указываем, что тело запроса будет JSON
	            },
	            body: JSON.stringify(programData), // Преобразуем данные программы в JSON
	        });

	        if (!response.ok) {
	            throw new Error('Failed to add program'); // Если запрос не успешен, выбрасываем ошибку
	        }

	        return await response.json(); // Возвращаем созданную программу
	    } catch (error) {
	        console.error('Error adding program:', error.message);
	        throw error; // Пробрасываем ошибку дальше
	    }
	};

	updateProgram = async (id, updatedData) => {
	    try {
	        const response = await fetch(`${this._baseUrl}/${id}`, {
	            method: 'PUT', // Или 'PATCH', если вы обновляете только часть данных
	            headers: {
	                'Content-Type': 'application/json', // Указываем формат данных
	            },
	            body: JSON.stringify(updatedData), // Передаем обновленные данные в теле запроса
	        });

	        if (!response.ok) {
	            throw new Error('Failed to update the program'); // Если запрос не успешен, выбрасываем ошибку
	        }

	        return await response.json(); // Возвращаем обновленную программу
	    } catch (error) {
	        console.error('Error updating program:', error.message);
	        throw error; // Пробрасываем ошибку дальше
	    }
	};

}