import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auths, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (auths.isLoading) {
                return <h2>Loading...</h2>;
            } else if (!auths.isAuthenticated) {
                return <Redirect to="/login" />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapStateToProps = state => ({
    auths: state.auths
});

export default connect(mapStateToProps)(PrivateRoute);