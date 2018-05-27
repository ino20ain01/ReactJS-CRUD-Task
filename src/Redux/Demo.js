import { createStore } from 'redux'

let initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}

let myReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
    }
    if (action.type === 'SORT') {
        let { sort }   = action,
            { status } = state;
        return {
            status: status,
            sort: sort
        }
    }
    return state;
}

const store = createStore(myReducer);
console.log('Default: ', store.getState());
// Toggle Status
let action = { type: 'TOGGLE_STATUS' }
store.dispatch(action);
console.log('TOGGLE_STATUS: ', store.getState());

// Sort
let sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: -1
    }
}
store.dispatch(sortAction);
console.log('SORT: ', store.getState());
