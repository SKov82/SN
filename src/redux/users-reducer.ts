const CHANGE_FOLLOW = 'CHANGE-FOLLOW'

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
}
type ActionType = changeFollowACType

let initialState: UsersDataType = {
    users: [
        {id: 1, firstName: 'John', lastName: 'Doe', follow: false, city: 'New York', country: 'USA'},
        {id: 2, firstName: 'Jane', lastName: 'Doe', follow: true, city: 'London', country: 'UK'},
        {id: 3, firstName: 'Иван', lastName: 'Иванов', follow: true, city: 'Москва', country: 'Россия'},
        {id: 4, firstName: 'Ольга', lastName: 'Петрова', follow: false, city: 'Казань', country: 'Россия'},
        {id: 5, firstName: 'Стас', lastName: 'Грицко', follow: true, city: 'Луцк', country: 'Украина'},
    ]
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case CHANGE_FOLLOW:
            return {...state, users: state.users.map(
                user => user.id === action.payload.userID ? {...user, follow: !user.follow} : user
            )}
        default:
            return state
    }
}

type changeFollowACType = ReturnType<typeof changeFollowAC>
export const changeFollowAC = (userID: number) => ({ type: CHANGE_FOLLOW, payload: {userID} }) as const