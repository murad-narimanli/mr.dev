import types from '../types'


export const toggleReducer = (data = false, action) =>{
    switch (action.type){
        case types.TOGGLE:
            return !data;
        default :
            return data;
    }
}