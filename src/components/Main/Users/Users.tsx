import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';
import css from './Users.module.css';
import preloader from '../../../assets/img/loading.gif'
import { NavLink } from 'react-router-dom';
import {Paginator} from './Paginator';

type UsersType = {
    usersData: UsersDataType
    getUsers: (currentPage: number, pageSize: number) => void
    toggleFollowStatus: (userID: number, method: 'DELETE' | 'POST') => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.usersData.currentPage, this.props.usersData.pageSize)
    }

    render() {
        return <div>
            <Paginator
                currentPage={this.props.usersData.currentPage}
                pageSize={this.props.usersData.pageSize}
                totalCount={this.props.usersData.totalCount}
                getUsers={this.props.getUsers}
            />

            {this.props.usersData.isLoading && <img className={css.loading} src={preloader} alt="loading..."/>}

            {this.props.usersData.users.map((user: UserType) => {
                return <div key={user.id}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={css.ava}
                             src={user.photos.small ? user.photos.small : "https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883630_1280.jpg"}
                             alt="avatar" />
                    </NavLink>

                    {user.name}{user.status ? ` - Статус: ${user.status}` : ''}

                    <button
                        className={css.followButton}
                        onClick={ () => {
                            this.props.toggleFollowStatus(user.id, user.followed ? 'DELETE' : 'POST')
                        }}
                    >
                        {`${user.followed ? 'Подписан' : 'Подписаться'}`}
                    </button>
                </div>
            })}
        </div>
    }
}