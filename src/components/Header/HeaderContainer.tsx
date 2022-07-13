import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthData, StateType} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

class HeaderC extends React.Component<any, any> {
    render() {
        return <Header {...this.props.auth} />
    }
}

let mapStateToProps = (state: AppStateType): {auth: StateType} => ({ auth: state.auth.data })

// @ts-ignore
export const HeaderContainer = connect(mapStateToProps, {getAuthData})(HeaderC)