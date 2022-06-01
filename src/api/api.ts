import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '97e468f6-5b68-452f-8b2e-b1ab07a6dd98'},
})

export const appAPI = {
    getUsers(currentPage: number, countUsers: number) {
        return instance.get(`users?page=${currentPage}&count=${countUsers}`).then(response => response.data)
    },
    changeFollowStatus(userID: number, method: 'DELETE' | 'POST') {
        return instance(`follow/${userID}`, {method}).then(response => response.data.resultCode)
    }
}