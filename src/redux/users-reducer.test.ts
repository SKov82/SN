import {
    changeFollow,
    changeLoadingStatus,
    setCurrentPage,
    setTotalCount,
    showUsers,
    UsersDataType,
    usersReducer,
} from './users-reducer'

const startState: UsersDataType = {
    users: [
        {
            name: 'Bob',
            id: 1,
            uniqueUrlName: null,
            photos: { small: null, large: null },
            status: null,
            followed: false,
        },
        {
            name: 'Tom',
            id: 2,
            uniqueUrlName: null,
            photos: { small: null, large: null },
            status: 'status',
            followed: true,
        },
    ],
    pageSize: 5,
    totalCount: 2,
    currentPage: 1,
    isLoading: false,
}

test('change follow status', () => {
    const endState = usersReducer(startState, changeFollow(2))

    expect(endState.users.length).toBe(startState.users.length)
    expect(endState === startState).toBeFalsy()
    expect(endState.users === startState.users).toBeFalsy()
    expect(endState.users[0].followed === startState.users[0].followed).toBeTruthy()
    expect(endState.users[1].followed === startState.users[1].followed).toBeFalsy()
    expect(endState.users[1].followed).toBe(!startState.users[1].followed)
})

test('show users', () => {
    const endState = usersReducer(
        startState,
        showUsers([
            {
                name: 'Ann',
                id: 1,
                uniqueUrlName: null,
                photos: { small: null, large: null },
                status: null,
                followed: false,
            },
        ]),
    )

    expect(endState.users.length).toEqual(1)
    expect(endState === startState).toBeFalsy()
    expect(endState.currentPage).toEqual(1)
    expect(endState.isLoading).toBeFalsy()
    expect(endState.users[0].name).toBe('Ann')
})

test('set current page', () => {
    const endState = usersReducer(startState, setCurrentPage(3))

    expect(endState === startState).toBeFalsy()
    expect(endState.currentPage).toEqual(3)
    expect(endState.totalCount).toBe(startState.totalCount)
    expect(endState.isLoading).toBeFalsy()
    expect(endState.users.length).toBe(startState.users.length)
    expect(endState.users === startState.users).toBeTruthy()
})

test('set total count', () => {
    const endState = usersReducer(startState, setTotalCount(11))

    expect(endState === startState).toBeFalsy()
    expect(endState.currentPage).toEqual(startState.currentPage)
    expect(endState.totalCount).toBe(11)
    expect(endState.isLoading).toBeFalsy()
    expect(endState.users.length).toBe(startState.users.length)
})

test('change loading status', () => {
    const endState = usersReducer(startState, changeLoadingStatus())

    expect(endState === startState).toBeFalsy()
    expect(endState.currentPage).toEqual(startState.currentPage)
    expect(endState.totalCount).toBe(startState.totalCount)
    expect(endState.isLoading).toBe(!startState.isLoading)
    expect(endState.users.length).toBe(startState.users.length)
})
