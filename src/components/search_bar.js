import React, { Component } from 'react';

//functional component to class based component gives additional functionality
class SearchBar extends Component {
     // class based state initialization
     constructor(props) {
          super(props);
          
          this.state = { term: '' };
     }
     render () {
          //es6 in place of code below
          return <input onChange={(event) => console.log(event.target.value)} />;
     }
}
//     onInputChange(event) {
//          console.log(event.target.value);
//     }


export default SearchBar;