import {addNewPost, ProfileDataType, profileReducer} from './profile-reducer';

const startState: ProfileDataType = {
    posts: [
        {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
        {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
    ],
    profile: null,
    status: null,
}

test('add new post', () => {
    const endState = profileReducer(startState, addNewPost('newPost'))

    expect(endState.posts.length).toBe(startState.posts.length + 1)
    expect(endState.posts[0].message).toBe('Hello')
    expect(endState.posts[0].likesCount).toEqual(0)
    expect(endState.posts === startState.posts).toBeFalsy()
    expect(endState === startState).toBeFalsy()
})