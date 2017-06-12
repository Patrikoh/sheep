import { SELECT_PHOTO } from '../actions'

const initialState = {
    buttonValue: 0
}

//definitions for all actions connected to myButton
export default function button(state = initialState, action) {
    switch (action.type) {
        case SELECT_PHOTO:
            return Object.assign({}, state, {
                
            })
        default:
            return state
    }
}
