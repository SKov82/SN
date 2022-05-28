export type UserType = {
    id: number
    firstName: string
    lastName: string
    follow: boolean
    city: string
    country: string
}
export type UsersDataType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
}
export type ActionType = ChangeFollowACType | ShowMoreUsersACType

let initialState: UsersDataType = {
    users: [
        {id: 1, firstName: 'John', lastName: 'Doe', follow: false, city: 'New York', country: 'USA'},
        {id: 2, firstName: 'Jane', lastName: 'Doe', follow: true, city: 'London', country: 'UK'},
        {id: 3, firstName: 'Иван', lastName: 'Иванов', follow: true, city: 'Москва', country: 'Россия'},
        {id: 4, firstName: 'Ольга', lastName: 'Петрова', follow: false, city: 'Казань', country: 'Россия'},
    ],
    pageSize: 10,
    totalCount: 100,
    currentPage: 3
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case 'CHANGE-FOLLOW':
            return {...state, users: state.users.map(
                user => user.id === action.payload.userID ? {...user, follow: !user.follow} : user
            )}
        case 'SHOW-MORE-USERS':
            return {...state, users: [
                ...state.users,
                {id: 5, firstName: 'Стас', lastName: 'Грицко', follow: true, city: 'Луцк', country: 'Украина'},
                {id: 6, firstName: 'Олег', lastName: 'Бреус', follow: true, city: 'Минск', country: 'Беларусь'},
                {id: 7, firstName: 'Жан', lastName: 'Вальжан', follow: false, city: 'Париж', country: 'Франция'},
            ]}
        default:
            return state
    }
}

type ChangeFollowACType = ReturnType<typeof changeFollowAC>
export const changeFollowAC = (userID: number) => ({ type: 'CHANGE-FOLLOW', payload: {userID} } as const)
type ShowMoreUsersACType = ReturnType<typeof showMoreUsersAC>
export const showMoreUsersAC = () => ({ type: 'SHOW-MORE-USERS' } as const)