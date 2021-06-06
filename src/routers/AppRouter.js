import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import { AnxietyScreen } from '../screens/AnxietyScreen';
import HomeScreen from '../screens/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path="/anxiety"
                        component={ AnxietyScreen }
                    />
                    <Route
                        exact
                        path="/"
                        component={ HomeScreen }
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
