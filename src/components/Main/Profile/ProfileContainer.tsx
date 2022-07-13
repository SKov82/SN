import React from 'react';
import {Profile, ProfileType} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';
import {withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../../hoc/withAuthRedirect';

type ProfileContainerType = {
    profileData: ProfileType
    status: string | null
    isAuth: boolean
    userID: number | null
    getUserProfile: (userID: number) => void
    getUserStatus: (userID: number) => void
}

class ProfileC extends React.Component<ProfileContainerType> {
    componentDidMount() {
        // @ts-ignore
        let userID = this.props.match.params.userID || this.props.userID // 23880 мой id
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render () {
        return (
            <Profile {...this.props.profileData} status={this.props.status} />
        )
    }
}

type MapStateToPropsType = {
    profileData: null | ProfileType
    status: string | null
    isAuth: boolean
    userID: number | null
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileData: state.profileData.profile,
        status: state.profileData.status,
        isAuth: state.auth.isAuth,
        userID: state.auth.data.id,
    }
}

// @ts-ignore
let UrlDataContainer = withRouter(WithAuthRedirect(ProfileC))
export const ProfileContainer = connect(mapStateToProps,
    {getUserProfile, getUserStatus}) (UrlDataContainer)