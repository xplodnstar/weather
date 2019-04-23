import React, { Component } from 'react';
import { connect } from 'react-redux'

// import { ICON_NAME } from "react-icons/wi"

import { getCurrDC } from '../actions/weatherActions'


class DCCurr extends Component {
    componentDidMount() {
        getCurrDC()
    }

    render() {
        return (
            <div className="currPage">
                <div className="containerCurr1">
                    <div className="cityName"><h1>{this.props.dcName}</h1></div>
                    <div className="currData">
                        <div className="currDataLeft">
                            <div className="currName">Current</div>
                            <div className="currCond"><img src={this.props.dcAnimation} alt="" id="aniIcon" /></div>
                            <div className="currWeather">{this.props.dcWeather}</div>
                            <div className="currTemp">Temp {this.props.dcTemp}&#8457;</div>
                        </div>
                        <div className="currDataRight">
                            <div className="currHi">High {this.props.dcHi}&#8457;</div>
                            <div className="currLow">Low {this.props.dcLow}&#8457;</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        dcName: appState.dcName,
        dcTemp: appState.dcTemp,
        dcWeather: appState.dcWeather,
        dcHi: appState.dcHi,
        dcLow: appState.dcLow,
        dcAnimation: appState.dcAnimation,
    }
}

export default connect(mapStateToProps)(DCCurr)