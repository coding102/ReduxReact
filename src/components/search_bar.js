import React, { Component } from 'react';

//functional component to class based component gives additional functionality
class SearchBar extends Component {
     render () {
          //es6 in place of code below
          return <input onChange={(event) => console.log(event.target.value)} />;
     }
}
//     onInputChange(event) {
//          console.log(event.target.value);
//     }


export default SearchBar;