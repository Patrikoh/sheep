import { ADD_SHEEP, SELECT_SHEEP } from '../actions'

const initialState = {
    sheepList: []
}

export default function sheep(state = initialState, action) {
    switch (action.type) {
        case ADD_SHEEP:
                return {
                        ...state,
                        sheepList: [...state.sheepList, action.newSheep]
                }
        case SELECT_SHEEP:
                return {
                        ...state,
                        selectedSheep: action.sheep
                }
        default:
            return state
    }
}
