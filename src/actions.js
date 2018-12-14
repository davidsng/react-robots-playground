// Note to self: Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING } from './constants.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

