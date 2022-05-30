import React from 'react';
import {Profile} from './Profile';

export class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
    }

    render () {
        return (
            // @ts-ignore
            <Profile {...this.props} />
        )
    }
}