import React, { Component } from 'react';
import { connect } from 'react-redux'

import LVD from './lvDaily'
import LVCurr from './lvCurr'
import DCD from './dcDaily'
import DCCurr from './dcCurr'

class Daily extends Component {
    render() {
        return (
            <div className="dailyPage">
                <div className="daily">
                    <LVCurr></LVCurr>
                    <LVD></LVD>
                </div>
                <div className="daily">
                    <DCCurr></DCCurr>
                    <DCD></DCD>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        lvd: appState.lvd,
        dcd: appState.dcd,
    }
}

export default connect(mapStateToProps)(Daily)