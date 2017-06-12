import { ADD_PHOTO } from '../actions'

const initialState = {
    photos: [
            {
                    original: 'photos/malaysia1.jpg'
            },
            {
                    original: 'photos/malaysia3.jpg'  
            }
    ]

}

export default function button(state = initialState, action) {
    switch (action.type) {
        case ADD_PHOTO:
        return {
                ...state,
                photos: [...state.photos, action.newPhoto]
        }
        default:
            return state
    }
}
