import React from 'react';
import {UsersDataType, UserType} from '../../../redux/users-reducer';
import axios from 'axios';
import css from './Users.module.css';
import preloader from '../../../assets/img/loading.gif'

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
        let page = this.props.usersData.currentPage
        let count = this.props.usersData.pageSize
        this.props.changeLoadingStatus()
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`
        ).then(response => {
            this.props.showUsers(response.data.items)
            this.props.changeLoadingStatus()
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.changeLoadingStatus()
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersData.pageSize}`
        ).then(response => {
            this.props.showUsers(response.data.items)
            this.props.changeLoadingStatus()
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
                            <img className={css.ava} src={user.photos.small ? user.photos.small : "https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883630_1280.jpg"} alt="ava" />
                            {user.name}{user.status ? ` - Статус: ${user.status}` : ''}
                        </div>
                        <div onClick={ () => this.props.changeFollow(user.id) }>
                            {`${user.followed ? 'Подписан' : 'Подписаться'}`}
                        </div>
                    </div>
                })}
            </div>
        )
    }
}