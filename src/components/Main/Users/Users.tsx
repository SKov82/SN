import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';

type UsersType = {
    usersData: UsersDataType
    followUser: (userID: number) => void
}

export const Users = ({usersData, followUser}: UsersType) => {
    return (
        <div>
            {usersData.users.map( (user: UserType) => {
                return <div key={user.id}
                            onClick={ () => followUser(user.id) }
                >
                    { `${user.firstName} ${user.lastName} - ${user.city} | ${user.follow ? 'followed' : 'follow'}` }
                </div>
            })}
        </div>
    )
}
