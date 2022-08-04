import React from 'react'
import css from './Profile.module.css'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileStatus } from './ProfileStatus'

export type ProfileType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    photos: { small: null | string; large: null | string }
    userId: number
    status: string | null
}

export function Profile(props: ProfileType) {
    return (
        <div className={css.content}>
            <img
                src={
                    props.photos?.small
                        ? props.photos?.small
                        : 'https://secure.gravatar.com/avatar/d65ba582994efa3515a7936eb7c337ef?s=96&d=retro'
                }
                alt='avatar'
            />

            <div>{props.fullName}</div>
            <div>{props.aboutMe}</div>
            <div>{props.lookingForAJobDescription}</div>

            <ProfileStatus userID={props.userId} status={props.status} />
            <MyPostsContainer />
        </div>
    )
}
