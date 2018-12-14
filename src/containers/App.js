import React, { Component } from "react";
import { connect } from 'react-redux'
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// Refering to SearchBox.js, everytime the input value changes, we call a function "searchChange", which, referring to App.js, is onSearchChange, which is the function below. When onSearchChange is called, we dispatch an action "setSearchField" which is then read by the reducer, which changes the state, and updates the store. The store then makes changes to the props, and the components updates

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


export class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  };

  render() {
    const { searchField, onSearchChange, robots } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    if (!robots.length) {
      return (<h1>Loading...</h1>)
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
  }
}

// connect is a higher order function that returns another function
export default connect(mapStateToProps, mapDispatchToProps)(App);
