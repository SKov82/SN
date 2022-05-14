import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';

type UsersType = {
    usersData: UsersDataType
    changeFollow: (userID: number) => void
    showMoreUsers: () => void
}

export const Users = ({usersData, changeFollow, showMoreUsers}: UsersType) => {
    return (
        <div>
            {usersData.users.map( (user: UserType) => {
                return <div key={user.id}
                            onClick={ () => changeFollow(user.id) }
                >
                    { `${user.firstName} ${user.lastName} - ${user.city} | ${user.follow ? 'Подписан' : 'Подписаться'}` }
                </div>
            })}

            <button onClick={ showMoreUsers }>
                Показать еще
            </button>
        </div>
    )
}