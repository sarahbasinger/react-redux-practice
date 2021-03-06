// The master reducer doesn't manade any state on its own.
// It manages the reducers. The reducers manage state, the master
// reducer manages the reducers. Export all reducers as an object
// using "combineReduecers". And each property we export, will be
// available as state.PROPERTY

// To make a roorReducer:
// 1. use combineReducers method (redux)
// 2. pass it an Object
// 3. each key will be a piece of the application state
// 4. each value will be a single reducer


// First we need combineReducers from redux
import { combineReducers } from 'redux';
// bring in the reducer (module) that manages students
import StudentReducer from './StudentReducer';
import WeatherReducer from './WeatherReducer';
import MovieReducer from './MovieReducer';

const rootReducer = combineReducers({
	// each key/property in this object, will be availebl on the redux
	students: StudentReducer,
	weather: WeatherReducer,
	movie: MovieReducer
});

export default rootReducer;