// Providers and components
import { Fragment } from "react";
import Route from './components/utils/SmartRoute';

// Pages
import Community from "./pages/Community.jsx";
import Home from "./pages/Home.jsx";

export default function Router (props) {
    return (
        <Fragment>
            <Route
                {...props}
                path="/"
                exact
                Component={Home}
            />

            <Route
                {...props}
                path="/community"
                exact
                Component={Community}
            />
        </Fragment>
    )
}