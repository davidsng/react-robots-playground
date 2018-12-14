// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING } from './constants.js'

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state
    }
}

const initialStateRobots = {
    isPending: true,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { isPending: false, robots: action.payload })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { isPending: false, error: action.payload })
        default:
            return state
    }
}



// export const requestRobots = (state=initialStateRobots, action={}) => {
//     switch (action.type) {
//         case REQUEST_ROBOTS_PENDING:
//             return Object.assign({}, state, { isPending: true })
//         case REQUEST_ROBOTS_SUCCESS:
//             return Object.assign({}, state, { isPending: false, robots: action.payload })
//         case REQUEST_ROBOTS_FAILED:
//             return Object.assign({}, state, { isPending: false, error: action.payload })
//         default:
//             return state
//     }
// }


