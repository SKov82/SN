import {changeFollowAC, UsersDataType, usersReducer} from './users-reducer';

const startState: UsersDataType = {
    users: [],
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
    expect(endState.users[1].followed).toBe(!startState.users[1].followed)
})
//
// test('show more users', () => {
//     const endState = usersReducer(startState, showMoreUsersAC())
//
//     expect(endState.users.length).toBe(startState.users.length + 3)
//     expect(endState === startState).toBeFalsy()
//     expect(endState.users === startState.users).toBeFalsy()
//     expect(endState.users[0] === startState.users[0]).toBeTruthy()
// })