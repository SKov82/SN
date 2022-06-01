import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';
import css from './Users.module.css';
import preloader from '../../../assets/img/loading.gif'
import { NavLink } from 'react-router-dom';
import {appAPI} from '../../../api/api';

type UsersType = {
    usersData: UsersDataType
    changeFollow: (userID: number) => void
    showUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    changeLoadingStatus: () => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        this.props.changeLoadingStatus()
        appAPI.getUsers(this.props.usersData.currentPage, this.props.usersData.pageSize).then(data => {
            this.props.changeLoadingStatus()
            this.props.showUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    onPageChanged = (page: number) => {
        this.props.changeLoadingStatus()
        this.props.setCurrentPage(page)
        appAPI.getUsers(page, this.props.usersData.pageSize).then(data => {
            this.props.changeLoadingStatus()
            this.props.showUsers(data.items)
        })
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
                                    this.props.changeLoadingStatus()
                                    appAPI.changeFollowStatus(user.id, user.followed ? 'DELETE' : 'POST')
                                        .then(resultCode => {
                                            this.props.changeLoadingStatus()
                                            if (!resultCode) this.props.changeFollow(user.id)
                                        })
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