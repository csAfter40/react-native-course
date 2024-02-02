import axios from "axios";

const baseURL = "https://identitytoolkit.googleapis.com/v1";
console.log(baseURL);

// refreshingFunction is used in case multiple requests are made and the following requests need to wait for the first request to make the token refresh.
// Reference:
// https://andreyka26.com/handling-refreshing-token-on-multiple-requests-using-react
let refreshingFunction = undefined;
const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		// Authorization: localStorage.getItem("access-token")
		//     ? "JWT " + localStorage.getItem("access-token")
		//     : null,
		"Content-Type": "application/json",
		accept: "application/json",
	},
});

// interceptors are where we handle error responses from api especially handling refresh token
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		// const originalRequest = error.config;

		if (typeof error.response === "undefined") {
			console.log(
				"A server/network error occurred. " +
					"Looks like CORS might be the problem. " +
					"Sorry about this - we will get it fixed shortly."
			);
			return Promise.reject(error);
		}

		// if (
		//     error.response.status === 401 &&
		//     originalRequest.url === baseURL + 'token/refresh/'
		// ) {
		//     window.location.href = '/login/';
		//     return Promise.reject(error);
		// }

		// if (
		//     error.response.data.code === 'token_not_valid' &&
		//     error.response.status === 401 &&
		//     error.response.statusText === 'Unauthorized'
		// ) {
		//     if (error.response.data.detail === "Token is blacklisted") {
		//         console.log("Token is blacklisted");
		//         localStorage.removeItem("access_token");
		//         localStorage.removeItem("refresh_token");
		//         window.location.href = '/login/';
		//         return Promise.reject(error);
		//     }
		//     const refreshToken = localStorage.getItem('refresh_token');

		//     if (refreshToken) {
		//         const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

		//         // exp date in token is expressed in seconds, while now() returns milliseconds:
		//         const now = Math.ceil(Date.now() / 1000);

		//         if (tokenParts.exp > now) {
		//             try {

		//                 if (!refreshingFunction) {
		//                     refreshingFunction = axiosInstance
		//                         .post('/token/refresh/', { refresh: refreshToken })
		//                 }
		//                 const response = await refreshingFunction
		//                 localStorage.setItem('access_token', response.data.access);
		//                 localStorage.setItem('refresh_token', response.data.refresh);

		//                 axiosInstance.defaults.headers['Authorization'] =
		//                     'JWT ' + response.data.access;
		//                 originalRequest.headers['Authorization'] =
		//                     'JWT ' + response.data.access;
		//                 console.log("refresh operation successfully done")
		//                 return axiosInstance(originalRequest);
		//             }
		//             catch (error) {
		//                 window.location.href = '/login/';
		//                 return Promise.reject(error);
		//             }
		//             finally {
		//                 refreshingFunction = undefined
		//             }

		//         } else {
		//             console.log('Refresh token is expired', tokenParts.exp, now);
		//             localStorage.removeItem("access_token");
		//             localStorage.removeItem("refresh_token");
		//             axiosInstance.defaults.headers['Authorization'] = null;
		//             // setAuth(false);
		//             window.location.href = '/login/';
		//         }
		//     } else {
		//         console.log('Refresh token not available.');
		//         window.location.href = '/login/';
		//     }
		// }

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;
