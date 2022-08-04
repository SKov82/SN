import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {getUsers, setPageSize, toggleFollowStatus, UsersDataType} from '../../../redux/users-reducer';
import {Users} from './Users';

type MapStateToPropsType = {
    usersData: UsersDataType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { usersData: state.usersData }
}

export const UsersContainer = connect(mapStateToProps, {
    getUsers, toggleFollowStatus, setPageSize
}
// @ts-ignore
) (Users)