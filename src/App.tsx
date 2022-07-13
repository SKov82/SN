import React from 'react';
import './App.css';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {getInit} from './redux/app-reducer';

type AppType = {
    getInit: () => void
}
class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.getInit()
    }

    render() {
        return <div className="App">
            < //@ts-ignore
                HeaderContainer
            />
            <Main/>
            <Footer/>
        </div>
    }
}
// @ts-ignore
export default connect(null, {getInit})(App)