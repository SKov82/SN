import React from 'react';
import './App.css';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {connect} from 'react-redux';
import {getAuthData} from './redux/auth-reducer';

class App extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthData()
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
export default connect(null, {getAuthData})(App)