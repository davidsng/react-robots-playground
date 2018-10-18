import React, { Component } from 'react'
// import searchChange from './App'

export class SearchBox extends Component {
    render() {
        const {searchChange} = this.props
    return (
      <div className="pa2 tc">
        <input
          type="search"
          className="pa3 ba b--green bg-lightest-blue"
          placeholder="Search Robots"
          onChange={ searchChange }
        />
      </div>
    );
  }
}


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
