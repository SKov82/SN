import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
    changeFollowAC, changeLoadingStatusAC, setCurrentPageAC, setTotalCountAC, showUsersAC,
    UsersDataType, UserType
} from '../../../redux/users-reducer';
import {Users} from './Users';

type MapStateToPropsType = {
    usersData: UsersDataType
}
type MapDispatchToPropsType = {
    changeFollow: (userID: number) => void
    showUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    changeLoadingStatus: () => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { usersData: state.usersData }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeFollow: (userID) => {
            dispatch( changeFollowAC(userID) )
        },
        showUsers: (users) => {
            dispatch( showUsersAC(users) )
        },
        setCurrentPage: (currentPage) => {
            dispatch( setCurrentPageAC(currentPage) )
        },
        setTotalCount: (totalCount) => {
            dispatch( setTotalCountAC(totalCount) )
        },
        changeLoadingStatus: () => {
            dispatch( changeLoadingStatusAC() )
        },
    }
}
// @ts-ignore
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)