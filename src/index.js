import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyAfloA_6cKK0Yf6JgGkj8gx2kG0Z0sELk0';
// create a new component 
//const declares a final "variable" that is never going to be reassigned
const App = () => {
     return (
          <div>
               <SearchBar />
          </div>
     );
}


// Render the component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));