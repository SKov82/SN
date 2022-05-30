import React from 'react';
import {Profile, ProfilePropsType} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';

type ProfileContainerType = {
    profileData: ProfilePropsType
    setUserProfile: (profile: Object) => void
}

export class ProfileC extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let profile = window.location.pathname.match(/\d+$/)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${profile ? profile[0] : 24000}`
        ).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render () {
        return (
            <Profile {...this.props.profileData} />
        )
    }
}

type MapStateToPropsType = {
    profileData: null | Object
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({ profileData: state.profileData.profile })

// @ts-ignore
export const ProfileContainer = connect(mapStateToProps, {setUserProfile}) (ProfileC)