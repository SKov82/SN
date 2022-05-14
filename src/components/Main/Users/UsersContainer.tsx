import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {changeFollowAC, showMoreUsersAC, UsersDataType} from '../../../redux/users-reducer';
import {Users} from './Users';

type MapStateToPropsType = {
    usersData: UsersDataType
}
type MapDispatchToPropsType = {
    changeFollow: (userID: number) => void
    showMoreUsers: () => void
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
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)