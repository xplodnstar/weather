import store from '../store'
// so we can use store.dispatch()

import axios from 'axios'

export function getCurrLV() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=5506956&APPID=0091ae1b63c26b8641bab40622b54f82&units=imperial').then(resp => {
        store.dispatch({
            type: 'GET_CURR_LV',
            currLVD: resp.data
        })
    })
}

export function getCurrDC() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=4140963&APPID=0091ae1b63c26b8641bab40622b54f82&units=imperial').then(resp => {
        store.dispatch({
            type: 'GET_CURR_DC',
            currDCD: resp.data
        })
    })
}

export function getDailyLV() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?id=5506956&APPID=0091ae1b63c26b8641bab40622b54f82&units=imperial').then(resp => {
        store.dispatch({
            type: 'GET_DAILY_LV',
            lvd: [resp.data.list[0], resp.data.list[8], resp.data.list[16], resp.data.list[24], resp.data.list[32]]
        })
    })
}


export function getDailyDC() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?id=4140963&APPID=0091ae1b63c26b8641bab40622b54f82&units=imperial').then(resp => {
        store.dispatch({
            type: 'GET_DAILY_DC',
            dcd: [resp.data.list[0], resp.data.list[8], resp.data.list[16], resp.data.list[24], resp.data.list[32]]
        })
    })
}

// export function getHourlyLV() {
//     axios.get('https://api.openweathermap.org/data/2.5/forecast/hourly?id=5506956&APPID=0091ae1b63c26b8641bab40622b54f82&units=imperial').then(resp => {
//         store.dispatch({
//             type: 'GET_HOURLY_LV',
//             lvd: resp.data.list,
//         })
//     })
// }


// export function getHourlyDC() {
//     axios.get('https://api.openweathermap.org/data/2.5/forecast/hourly?id=4140963&APPID=0091ae1b63c26b8641bab40622b54f82&units=imperial').then(resp => {
//         store.dispatch({
//             type: 'GET_HOURLY_DC',
//             dcd: resp.data.list,
//         })
//     })
// }
