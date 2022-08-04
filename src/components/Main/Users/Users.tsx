import React from 'react'
import { UsersDataType, UserType } from '../../../redux/users-reducer'
import css from './Users.module.css'
import preloader from '../../../assets/img/loading.gif'
import { Paginator } from './Paginator'
import { User } from './User'

type UsersType = {
    usersData: UsersDataType
    getUsers: (currentPage: number, pageSize: number) => void
    setPageSize: (pageSize: number) => void
    toggleFollowStatus: (userID: number, method: 'DELETE' | 'POST') => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.usersData.currentPage, this.props.usersData.pageSize)
    }

    render() {
        return (
            <div>
                <Paginator
                    currentPage={this.props.usersData.currentPage}
                    pageSize={this.props.usersData.pageSize}
                    totalCount={this.props.usersData.totalCount}
                    getUsers={this.props.getUsers}
                    setPageSize={this.props.setPageSize}
                />

                {this.props.usersData.isLoading && <img className={css.loading} src={preloader} alt='loading...' />}

                {this.props.usersData.users.map((user: UserType) => {
                    return <User {...user} toggleStatus={this.props.toggleFollowStatus} key={user.id} />
                })}
            </div>
        )
    }
}
