import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import "./index.css";
import App from './containers/App'
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchRobots, requestRobots } from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// redux-logger is a tool that we install to help log all actions' impact on state in console
const logger = createLogger()

const rootReducer = combineReducers({ searchRobots, requestRobots })

// Redux-Thunk is the most popular middleware used to handle asynchronous actions in Redux. We need something to handle the async action of making a request for JSON data

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

// <Provider /> is the higher-order component provided by React Redux that lets you bind Redux to React (see Usage with React).
// All container components need access to the Redux store so they can subscribe to it. One option would be to pass it as a prop to every container component. However it gets tedious, as you have to wire store even through presentational components just because they happen to render a container deep in the component tree.
// The option we recommend is to use a special React Redux component called <Provider> to magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component:


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();