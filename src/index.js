import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// class based components are used when components need to be aware of state
// function based components are used when taking in info and producing jsx
const API_KEY = 'AIzaSyAfloA_6cKK0Yf6JgGkj8gx2kG0Z0sELk0';

// const declares a final "variable" that is never going to be reassigned
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        //YTSearch({key: API_KEY, term: 'surfboards'}, function(videos) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            //this.setState({ videos: videos }); below works only if key and prop are the same
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // lodash, new search term every 300 milliseconds
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);


        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}


// Render the component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));