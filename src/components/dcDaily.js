import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'

import { getDailyDC } from '../actions/weatherActions'

class DCD extends Component {
    componentDidMount() {
        getDailyDC()
    }

    render() {
        return (
            <div className="currPage">
                <ul>
                    {this.props.dcd.map(day => (
                        <li key={'time' + day.dt} className="dailyData">
                            <div className="containerDaily1">
                                <div className="containerDaily2">
                                    <div className="day">{moment(day.dt_txt).format('dddd')}</div>
                                    <div className="dailyWeather">{day.weather[0].description}</div>
                                </div>
                                <div className="containerDaily3">
                                    <div className="dailyHi">High {Math.round(day.main.temp_max)}&#8457;</div>
                                    <div className="dailyLow">Low {Math.round(day.main.temp_min)}&#8457;</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        dcd: appState.dcd
    }
}

export default connect(mapStateToProps)(DCD)