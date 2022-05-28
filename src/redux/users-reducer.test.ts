import {changeFollowAC, showMoreUsersAC, UsersDataType, usersReducer} from './users-reducer';

const startState: UsersDataType = {
    users: [
        {id: 1, firstName: 'John', lastName: 'Doe', follow: false, city: 'New York', country: 'USA'},
        {id: 2, firstName: 'Jane', lastName: 'Doe', follow: true, city: 'London', country: 'UK'},
        {id: 3, firstName: 'Иван', lastName: 'Иванов', follow: true, city: 'Москва', country: 'Россия'},
        {id: 4, firstName: 'Ольга', lastName: 'Петрова', follow: false, city: 'Казань', country: 'Россия'},
    ],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
}

test('change follow status', () => {
    const endState = usersReducer(startState, changeFollowAC(2))

    expect(endState.users.length).toBe(startState.users.length)
    expect(endState === startState).toBeFalsy()
    expect(endState.users === startState.users).toBeFalsy()
    expect(endState.users[0] === startState.users[0]).toBeTruthy()
    expect(endState.users[3] === startState.users[3]).toBeTruthy()
    expect(endState.users[1] === startState.users[1]).toBeFalsy()
    expect(endState.users[1].follow).toBe(!startState.users[1].follow)
    expect(endState.users[1].firstName).toBe(startState.users[1].firstName)
    expect(endState.users[1].country).toBe(startState.users[1].country)
})

test('show more users', () => {
    const endState = usersReducer(startState, showMoreUsersAC())

    expect(endState.users.length).toBe(startState.users.length + 3)
    expect(endState === startState).toBeFalsy()
    expect(endState.users === startState.users).toBeFalsy()
    expect(endState.users[0] === startState.users[0]).toBeTruthy()
})