import { createStore } from 'redux'
import { status, sort } from "./actions";
import myReducer from './reducers';

const store = createStore(myReducer);
console.log('Default: ', store.getState());

// Toggle Status
store.dispatch(status());
console.log('TOGGLE_STATUS: ', store.getState());

// Sort
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT: ', store.getState());
