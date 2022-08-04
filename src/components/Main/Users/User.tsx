import React from 'react'
import css from './Users.module.css'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../redux/users-reducer'

type PropsType = UserType & {
    toggleStatus: (userID: number, method: 'DELETE' | 'POST') => void
}

export const User = (user: PropsType) => {
    return (
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img
                    className={css.ava}
                    src={
                        user.photos.small
                            ? user.photos.small
                            : 'https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883630_1280.jpg'
                    }
                    alt='avatar'
                />
            </NavLink>

            {user.name}
            {user.status ? ` - Статус: ${user.status}` : ''}

            <button
                className={css.followButton}
                onClick={() => {
                    user.toggleStatus(user.id, user.followed ? 'DELETE' : 'POST')
                }}
            >
                {`${user.followed ? 'Подписан' : 'Подписаться'}`}
            </button>
        </div>
    )
}
