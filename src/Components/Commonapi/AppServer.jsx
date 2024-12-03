// apiService.js
import axios from 'axios';
import { toast } from 'react-toastify';

const apiService = async (url, method, data = {}, headers = {}) => {
    try {
        const response = await axios({
            url,
            method,
            data,
            headers,
        });

     
        if (response.status = 200 ) {
            return response.data;
        }   else {
            toast.error(response.data.message || 'An error occurred. Please try again.');
        }
    } catch (error) {
        throw error;
    }
};

export default apiService;
