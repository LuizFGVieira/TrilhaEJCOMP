import React from "react";
import { Switch, useLocation, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LoginCard from "./components/Login/Card";

export default function AppRoutes() {
    return (
        <TransitionGroup>
            <CSSTransition>
                <Switch>
                    <Route exact path="/" component={LoginCard} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}