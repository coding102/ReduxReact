import React, { Component } from 'react';

//functional component to class based component gives additional functionality
class SearchBar extends Component {
     // class based state initialization
     constructor(props) {
          super(props);
          
          this.state = { term: '' };
     }
     
     render () {
          // es6 in place of code below
          // to change state use setState NEVER use just state
          return (
               <div>
                    <input 
                         value={this.state.term}
                         onChange={(event) => this.setState({ term: event.target.value })} />;
               </div>
          );
     }
}

//     onInputChange(event) {
//          console.log(event.target.value);
//     }


export default SearchBar;