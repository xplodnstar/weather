import cloud from '../assets/cloud.gif'
import rain from '../assets/rain.gif'
import snow from '../assets/snow.gif'
import sun from '../assets/sun.gif'
import wind from '../assets/wind.gif'

const initialState = {
  lvd: [],
  dcd: [],
  lvName: '',
  lvTemp: '',
  lvWeather: '',
  lvHi: '',
  lvLow: '',
  dcName: '',
  dcTemp: '',
  dcWeather: '',
  dcHi: '',
  dcLow: '',
  lvAnimation: '',
  dcAnimation: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CURR_LV':
      return {
        ...state,
        lvName: action.currLVD.name,
        lvTemp: Math.round(action.currLVD.main.temp),
        lvWeather: action.currLVD.weather[0].main,
        lvHi: Math.round(action.currLVD.main.temp_max),
        lvLow: Math.round(action.currLVD.main.temp_min),
        lvAnimation: getGif(action.currLVD.weather[0].main),
      }
    case 'GET_CURR_DC':
      return {
        ...state,
        dcName: action.currDCD.name,
        dcTemp: Math.round(action.currDCD.main.temp),
        dcWeather: action.currDCD.weather[0].main,
        dcHi: Math.round(action.currDCD.main.temp_max),
        dcLow: Math.round(action.currDCD.main.temp_min),
        dcAnimation: getGif(action.currDCD.weather[0].main),
      }
    case 'GET_DAILY_LV':
      return { ...state, lvd: action.lvd }
    case 'GET_DAILY_DC':
      return { ...state, dcd: action.dcd }
    default:
      return state
  }
}

function getGif(weather) {
  switch (weather) {
    case 'Clouds':
      return cloud
    case 'Wind':
      return wind
    case 'Rain':
      return rain
    case 'Snow':
      return snow
    default:
      return sun
  }
}
