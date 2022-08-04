import {
    addNewPost,
    ProfileDataType,
    profileReducer,
    removePost,
    setUserProfile,
    setUserStatus,
} from './profile-reducer'

const startState: ProfileDataType = {
    posts: [
        { id: 2, message: 'Всем привет! Начал изучать React. А что учите вы?', likesCount: 12 },
        { id: 1, message: 'Привет. Это мой первый пост.', likesCount: 9199 },
    ],
    profile: null,
    status: null,
}

test('add new post', () => {
    const endState = profileReducer(startState, addNewPost('newPost'))

    expect(endState.posts.length).toBe(startState.posts.length + 1)
    expect(endState.posts[0].message).toBe('newPost')
    expect(endState.posts[0].likesCount).toEqual(0)
    expect(endState.posts === startState.posts).toBeFalsy()
    expect(endState === startState).toBeFalsy()
})

test('set user profile', () => {
    const endState = profileReducer(
        startState,
        setUserProfile({
            aboutMe: 'about me',
            contacts: {
                facebook: 'facebook',
                website: 'website',
                vk: 'vk',
                twitter: 'twitter',
                instagram: 'instagram',
                youtube: 'youtube',
                github: 'github',
                mainLink: 'mainLink',
            },
            fullName: 'name',
            lookingForAJob: true,
            lookingForAJobDescription: 'it',
            photos: { small: 'photo', large: 'big photo' },
            userId: 23880,
            status: 'status',
        }),
    )

    expect(endState.posts).toBe(startState.posts)
    expect(endState.profile?.userId).toEqual(23880)
    expect(endState.profile?.contacts).toBeInstanceOf(Object)
    expect(endState.profile === startState.profile).toBeFalsy()
    expect(endState === startState).toBeFalsy()
})

test('set user status', () => {
    const endState = profileReducer(startState, setUserStatus('newStatus'))

    expect(endState.status).toBe('newStatus')
    expect(endState.profile).toBeNull()
    expect(endState.posts === startState.posts).toBeTruthy()
    expect(endState === startState).toBeFalsy()
})

test('remove post', () => {
    const endState = profileReducer(startState, removePost(2))

    expect(endState === startState).toBeFalsy()
    expect(endState.profile === startState.profile).toBeTruthy()
    expect(endState.status === startState.status).toBeTruthy()
    expect(endState.posts.length).toBe(startState.posts.length - 1)
    expect(endState.posts[0].id).toBe(1)
})
