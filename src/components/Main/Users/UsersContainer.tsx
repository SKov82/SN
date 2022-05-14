import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {changeFollowAC, UsersDataType} from '../../../redux/users-reducer';
import {Users} from './Users';

type MapStateToPropsType = {
    usersData: UsersDataType
}
type MapDispatchToPropsType = {
    changeFollow: (userID: number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { usersData: state.usersData }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeFollow: (userID) => {
            dispatch( changeFollowAC(userID) )
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)