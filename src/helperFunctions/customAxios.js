import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api/"
});
// https://mojeedkusimo-andela-ireporter.herokuapp.com/api/
// http://localhost:5001/api/
export default axiosInstance;