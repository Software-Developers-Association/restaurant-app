import React from 'react';
import TabBar from '../components/TabBar';
import Recent from './Recent';
import Likes from './Likes';
import Bookmarks from './Bookmarks';
import Home from './Home';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

export default function RESTaurant(props) {
    const {user} = props;

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home">
                        <Home user={user} />
                    </Route>
                    <Route path="/recent">
                        <Recent />
                    </Route>
                    <Route path="/likes">
                        <Likes user={user} />
                    </Route>
                    <Route path="/bookmarks">
                        <Bookmarks user={user} />
                    </Route>
                </Switch>
                <TabBar />
            </Router>
        </>
    );
}