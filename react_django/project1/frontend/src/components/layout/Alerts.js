import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import { compose } from 'redux'
class Alerts extends Component {
    componentDidMount() {
        this.props.alert.show('It works');
    }
    componentDidUpdate(prevProps) {
        const { errors, alert } = this.props
        if (errors !== prevProps.errors) {
            if (errors.msg.name) {
                alert.error(`NAME : ${errors.msg.name.join('\n')}`)
            }
            if (errors.msg.email) {
                alert.error(`email : ${errors.msg.email.join('\n')}`)
            }
        }
    }

    render() {
        return <Fragment />
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default compose(withAlert(), connect(mapStateToProps, null))(Alerts)