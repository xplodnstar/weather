import React, { Component } from 'react';
import { connect } from 'react-redux'

// import { ICON_NAME } from "react-icons/wi"

import { getCurrLV } from '../actions/weatherActions'


class LVCurr extends Component {
    componentDidMount() {
        getCurrLV()
    }

    render() {
        return (
            <div className="currPage">
                <div className="containerCurr1">
                    <div className="cityName"><h1>{this.props.lvName}</h1></div>
                    <div className="currData">
                        <div className="currDataLeft">
                            <div className="currName">Current</div>
                            <div className="currCond"><img src={this.props.lvAnimation} alt="" id="aniIcon" /></div>
                            <div className="currWeather">{this.props.lvWeather}</div>
                            <div className="currTemp">Temp {this.props.lvTemp}&#8457;</div>
                        </div>
                        <div className="currDataRight">
                            <div className="currHi">High {this.props.lvHi}&#8457;</div>
                            <div className="currLow">Low {this.props.lvLow}&#8457;</div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps(appState) {
    return {
        lvName: appState.lvName,
        lvTemp: appState.lvTemp,
        lvWeather: appState.lvWeather,
        lvHi: appState.lvHi,
        lvLow: appState.lvLow,
        lvAnimation: appState.lvAnimation,
    }
}

export default connect(mapStateToProps)(LVCurr)