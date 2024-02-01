import axios from "axios";
const baseURL = "https://rn-expense-tracker-4a804-default-rtdb.firebaseio.com";

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		accept: "application/json",
	},
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		return Promise.reject(error);
	}
);

export default axiosInstance;
