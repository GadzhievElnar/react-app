import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: { "API-KEY": "c97b3b26-f95d-4acc-8d47-c7b96886a873" }
});

export const usersAPI = {
    getUsers(pageNumber, pageSize) {
        return axiosInstance.get(`/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        return axiosInstance.get(`/profile/${userId}`)
            .then(response => response.data);
    },

    follow(userId) {
        return axiosInstance.post(`/follow/${userId}`)
            .then(response => { debugger; return response.data.resultCode });
    },

    unFollow(userId) {
        return axiosInstance.delete(`/follow/${userId}`)
            .then(response => { debugger; return response.data.resultCode });
    }
}

export const authAPI = {
    me() {
        return axiosInstance.get(`/auth/me`, { withCredentials: true })
            .then(response => response.data);
    }

}