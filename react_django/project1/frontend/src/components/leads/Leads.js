
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLeads, deleteLeads } from '../../actions/leads'
class Leads extends Component {
    componentDidMount() {
        this.props.getLeads();
    }
    handlerDelete = (id) => {
        this.props.deleteLeads(id)
    }
    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Message
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.leads.map(l => {
                            return (
                                <tr key={l.id}>
                                    <td>
                                        {l.id}
                                    </td>
                                    <td>
                                        {l.name}
                                    </td>
                                    <td>
                                        {l.email}
                                    </td>
                                    <td>
                                        {l.message}
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => this.handlerDelete(l.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    leads: state.leads
})

export default connect(mapStateToProps, { getLeads, deleteLeads })(Leads);