import React from 'react';
import ReactDOM from 'react-dom';
import withRoot from './withRoot';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import LayOut from './components/layouts/LayOut'
import DashBoardPage from './components/page/DashBoardPage'
import NotFoundPage from './components/page/NotFoundPage'
import LoginPage from './components/page/LoginPage'
import UserRoute from './route/UserRouter'
import GuestRoute from './route/GuestRouter'

class Index extends React.Component {

    handleLogout = () =>{
        localStorage.clear()
        this.forceUpdate()
    }

    render() {
        return (
            <Router>
                <LayOut
                    logout={this.handleLogout}
                >
                    <Switch>
                        <UserRoute path='/' exact component={DashBoardPage}/>
                        <GuestRoute path='/login' exact component={LoginPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </LayOut>
            </Router>

        );
    }
}

withRoot(Index);

ReactDOM.render(<Index/>, document.querySelector('#app'));

