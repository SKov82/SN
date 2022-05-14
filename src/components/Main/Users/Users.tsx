import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';

type UsersType = {
    usersData: UsersDataType
    changeFollow: (userID: number) => void
}

export const Users = ({usersData, changeFollow}: UsersType) => {
    return (
        <div>
            {usersData.users.map( (user: UserType) => {
                return <div key={user.id}
                            onClick={ () => changeFollow(user.id) }
                >
                    { `${user.firstName} ${user.lastName} - ${user.city} | ${user.follow ? 'followed' : 'follow'}` }
                </div>
            })}
        </div>
    )
}