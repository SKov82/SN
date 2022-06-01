import axios from 'axios';

export const getUsers = (currentPage: number, countUsers: number) => {
    return axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${countUsers}`,
        {withCredentials: true}
    )
}