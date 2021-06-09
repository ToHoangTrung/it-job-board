import axiosClient from "../../axiosClient";

const UserApi = {
    login: (payload) => {
        const url = '/api/auth/login';
        return axiosClient.post(url, payload);
    },
    register: (payload) => {
        const url = '/api/auth/register';
        return axiosClient.post(url, payload);
    },
    getMe: async (payload) => {
        const url = '/me';
        const response = await axiosClient.get(url, payload);
        return response.data;
    }
}

export default UserApi;

