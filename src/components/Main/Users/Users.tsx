import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';
import css from './Users.module.css';
import preloader from '../../../assets/img/loading.gif'
import { NavLink } from 'react-router-dom';

type UsersType = {
    usersData: UsersDataType
    getUsers: (currentPage: number, pageSize: number) => void
    toggleFollowStatus: (userID: number, method: 'DELETE' | 'POST') => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.usersData.currentPage, this.props.usersData.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.usersData.pageSize)
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersData.totalCount / this.props.usersData.pageSize)
        let pages = [...Array(pagesCount)].map((el, i) => ++i)
        pages.length = 50

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span key={page}
                                     onClick={ () => this.onPageChanged(page) }
                                     className={`${css.pageNumber} ${page === this.props.usersData.currentPage ? css.currentPageNumber : ''}`}>
                            {` ${page} `}
                        </span>
                    })}
                </div>

                {this.props.usersData.isLoading && <img className={css.loading} src={preloader} alt="loading..."/>}

                {this.props.usersData.users.map((user: UserType) => {
                    return <div key={user.id}>
                        <div>
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
                    </div>
                })}
            </div>
        )
    }
}