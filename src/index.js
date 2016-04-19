import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';

import VideoList from './components/video_list';
// class based components are used when components need to be aware of state
// function based components are used when taking in info and producing jsx
const API_KEY = 'AIzaSyAfloA_6cKK0Yf6JgGkj8gx2kG0Z0sELk0';

// const declares a final "variable" that is never going to be reassigned
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        //YTSearch({key: API_KEY, term: 'surfboards'}, function(videos) {
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            //this.setState({ videos: videos }); below works only if key and prop are the same
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


// Render the component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));