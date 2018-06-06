import React, {Component} from 'react';
import Login from './../../components/frontend/Login';
import Index from './../../components/frontend/Index';
import {Locations, Location} from 'react-router-component';
import Navigation from "../../components/frontend/Navigation";

class FrontendRouter extends Component {
    render() {
        return (
            <Locations>
                <Location path="/" handler={Index} />
                <Location path="/navigation" handler={Navigation} />
                <Location path="/login" handler={Login} />
            </Locations>
        );
    }
}

export default FrontendRouter;
