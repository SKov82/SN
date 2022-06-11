import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {
    changeFollow, changeLoadingStatus, getUsersTC, UsersDataType
} from '../../../redux/users-reducer';
import {Users} from './Users';

type MapStateToPropsType = {
    usersData: UsersDataType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { usersData: state.usersData }
}

export const UsersContainer = connect(mapStateToProps,
    { changeFollow, changeLoadingStatus, getUsersTC }
// @ts-ignore
) (Users)