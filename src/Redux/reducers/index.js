import { combineReducers } from 'redux';
import status from './status';
import sort from './sort';

const  myReducer = combineReducers({
    status, // status obj = status from './status';
    sort   // sort obj = sort from './sort'; sort: {by: by, value: value}
});

export default myReducer;