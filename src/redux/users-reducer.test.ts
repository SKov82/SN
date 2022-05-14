import {changeFollowAC, UsersDataType, usersReducer} from './users-reducer';

const startState: UsersDataType = {
    users: [
        {id: 1, firstName: 'John', lastName: 'Doe', follow: false, city: 'New York', country: 'USA'},
        {id: 2, firstName: 'Иван', lastName: 'Иванов', follow: true, city: 'Москва', country: 'Россия'},
        {id: 3, firstName: 'Ольга', lastName: 'Петрова', follow: false, city: 'Казань', country: 'Россия'},
        {id: 4, firstName: 'Стас', lastName: 'Грицко', follow: true, city: 'Луцк', country: 'Украина'},
    ]
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