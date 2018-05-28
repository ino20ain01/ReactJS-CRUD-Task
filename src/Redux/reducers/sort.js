let initialState = {
    by: 'name',
    value: 1
}

let myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {
        let { sort } = action;
        return {
            by: sort.by,
            value: sort.value
        }
    }
    return state;
}

export default myReducer;