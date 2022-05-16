import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';
import axios from 'axios';
import css from './Users.module.css';

type UsersType = {
    usersData: UsersDataType
    changeFollow: (userID: number) => void
    showMoreUsers: () => void
}

export class Users extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.usersData.cUsers = []
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.usersData.cUsers = response.data.items
        })
    }

    render() {
        return (
            <div>
                {this.props.usersData.users.map( (user: UserType) => {
                    return <div key={user.id}
                                onClick={ () => this.props.changeFollow(user.id) }
                    >
                        { `${user.firstName} ${user.lastName} - ${user.city} | ${user.follow ? 'Подписан' : 'Подписаться'}` }
                    </div>
                })}

                {this.props.usersData.cUsers.map((user: any) => {
                    return <div key={user.id}>
                        <div>
                            {user.photos.small ? user.photos.small : <img className={css.ava} src="https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883630_1280.jpg" alt="ava" />}
                            {user.name} - {`${user.followed ? 'Подписан' : 'Подписаться'}`}
                        </div>
                        <div>{user.status}</div>
                    </div>
                })}

                <button onClick={ this.props.showMoreUsers }>
                    Показать еще
                </button>
            </div>
        )
    }
}

// export const Users = ({usersData, changeFollow, showMoreUsers}: UsersType) => {
//     const getUsers = () => {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             return <div>
//                 {response.data.items.map((user: any) => {
//                     return <div key={user.id}>
//                         {user.photos.small} {user.name} - {user.status}
//                     </div>
//                 })}
//             </div>
//         })
//     }
//
//     return (
//         <div>
//             {usersData.users.map( (user: UserType) => {
//                 return <div key={user.id}
//                             onClick={ () => changeFollow(user.id) }
//                 >
//                     { `${user.firstName} ${user.lastName} - ${user.city} | ${user.follow ? 'Подписан' : 'Подписаться'}` }
//                 </div>
//             })}
//
//             {/*{users.map((user: any) => {*/}
//             {/*    return <div key={user.id}>*/}
//             {/*        <div>{user.photos.small} {user.name} - {user.status}</div>*/}
//             {/*        <div></div>*/}
//             {/*    </div>*/}
//             {/*})}*/}
//             {getUsers()}
//
//             <button onClick={ showMoreUsers }>
//                 Показать еще
//             </button>
//         </div>
//     )
// }