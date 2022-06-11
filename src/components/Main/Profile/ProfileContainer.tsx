import React from 'react';
import {Profile, ProfileType} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';
import {withRouter} from 'react-router-dom';

type ProfileContainerType = {
    profileData: ProfileType
    getUserProfile: (profile: ProfileType) => void
}

class ProfileC extends React.Component<ProfileContainerType> {
    componentDidMount() {
        // @ts-ignore
        let userID = this.props.match.params.userID || 23880 // мой id
        this.props.getUserProfile(userID)
    }

    render () {
        return (
            <Profile {...this.props.profileData} />
        )
    }
}

type MapStateToPropsType = {
    profileData: null | ProfileType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({ profileData: state.profileData.profile })

// @ts-ignore
let UrlDataContainer = withRouter(ProfileC)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile}) (UrlDataContainer)