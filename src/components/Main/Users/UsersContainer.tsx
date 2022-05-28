import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
    changeFollowAC, setCurrentPageAC, setTotalCountAC, showMoreUsersAC,
    UsersDataType
} from '../../../redux/users-reducer';
import {Users} from './Users';

type MapStateToPropsType = {
    usersData: UsersDataType
}
type MapDispatchToPropsType = {
    changeFollow: (userID: number) => void
    showMoreUsers: () => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { usersData: state.usersData }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeFollow: (userID) => {
            dispatch( changeFollowAC(userID) )
        },
        showMoreUsers: () => {
            dispatch( showMoreUsersAC() )
        },
        setCurrentPage: (currentPage) => {
            dispatch( setCurrentPageAC(currentPage) )
        },
        setTotalCount: (totalCount) => {
            dispatch( setTotalCountAC(totalCount) )
        },
    }
}
// @ts-ignore
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)