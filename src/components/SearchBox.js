import React, { Component } from 'react'
// import searchChange from './App'

export class SearchBox extends Component {
    render() {
        const {searchChange} = this.props
    return (
      <div className="pa2 tc">
        <input
        aria-label='Search Robot'
          type="search"
          className="pa3 ba b--green bg-lightest-blue"
          placeholder="Search Robots"
          onChange={ searchChange }  
        />
      </div>
    );
  }
}
// we call searchChange function everytime there is a change to the input value of the searchbox


// const SearchBox = ({searchfield, searchChange}) => {
//     return (
//         <div className="pa2 tc">
//           <input
//             type="search"
//             className="pa3 ba b--green bg-lightest-blue"
//             placeholder="Search Robots"
//             onChange={searchChange}
//           />
//         </div>
//       );
// }



export default SearchBox;
