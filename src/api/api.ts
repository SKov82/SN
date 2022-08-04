import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '97e468f6-5b68-452f-8b2e-b1ab07a6dd98'},
})

// Start Users API
export const usersAPI = {
    getUsers(currentPage: number, countUsers: number) {
        return instance.get(`users?page=${currentPage}&count=${countUsers}`).then(response => response.data)
    },
    changeFollowStatus(userID: number, method: 'DELETE' | 'POST') {
        return instance(`follow/${userID}`, {method}).then(response => response.data.resultCode)
    },
}
// End Users API

// Start Profile API
export const profileAPI = {
    getUserProfile(userID: number) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },
    getUserStatus(userID: number) {
        return instance.get(`profile/status/${userID}`).then(response => response.data)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status}).then(response => response.data)
    },
}
// End Profile API

// Start Auth API
export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    },
}
// End Auth API
