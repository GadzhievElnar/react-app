import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: { "API-KEY": "29c0fdac-3d88-4deb-a0b7-38ce835f7852" }
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