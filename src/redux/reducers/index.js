import types from '../types'

export function numberReducer ( number = 0, action) {
    switch (action.type) {
        case types.SET_NUMBER:
            return action.payload;
        default:
            return number;
    }
}
