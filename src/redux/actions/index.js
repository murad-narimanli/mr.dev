import types from "./../types";
import profile from "../../const/api";


export const setNumber = (number) => {
    return {
        type: types.SET_NUMBER,
        payload: number
    }
}
