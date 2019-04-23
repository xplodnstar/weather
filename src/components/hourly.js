import React, { Component } from 'react';
import { connect } from 'react-redux'

import LVH from './lvh'
import DCH from './dch'

class Hourly extends Component {
    render() {
        return (
            <div className="hourlyPage">
                <LVH></LVH>
                <DCH></DCH>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        lvh: appState.lvh,
        dch: appState.dch,
    }
}

export default connect(mapStateToProps)(Hourly)