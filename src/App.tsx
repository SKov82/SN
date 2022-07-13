import React from 'react';
import './App.css';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {getInit} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import css from './components/Main/Users/Users.module.css';
import preloader from './assets/img/loading.gif';

type AppType = {
    isInit: boolean
    getInit: () => void
}
class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.getInit()
    }

    render() {
        if (this.props.isInit) {
            return <div className="App">
                < //@ts-ignore
                    HeaderContainer
                />
                <Main/>
                <Footer/>
            </div>
        } else {
            return <img className={css.loading} src={preloader} alt="loading..."/>
        }
    }
}

let mapStateToProps = (state: AppStateType): {isInit: boolean} => {
    return {isInit: state.app.isInit}
}
// @ts-ignore
export default connect(mapStateToProps, {getInit})(App)