import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

class HeaderC extends React.Component<any, any> {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            }).then(response => {
                if (!response.data.resultCode) {
                    this.props.setAuthData(response.data.data)
                }
            }
        )
    }

    render() {
        return <Header {...this.props.auth} />
    }
}

let mapStateToProps = (state: AppStateType): any => ({ auth: state.auth.data })

// @ts-ignore
export const HeaderContainer = connect(mapStateToProps, {setAuthData})(HeaderC)