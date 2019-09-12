import React, { Component } from 'react';

const API = 'YOUR_API_KEY'
//const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 5;
const searchList = 'antique dolls %7C antique miniature dolls'; //%7C is the pipe symbol
const sortBy = 'relevance' //date, rating, relevance, title, viewCount
// https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`



var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${searchList}&part=snippet,id&order=${sortBy}&region=581&relevanceLanguage=en_US&publishedAfter=2019-01-01T00:00:00Z&regionCode=US&maxResults=${result}`

//var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`
// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked() {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                //const resultyt = responseJson.items.map(obj => 'https://www.youtube.com/embed/' + obj.id.videoId);
                const resultyt = responseJson.items.map(obj => 'https://www.youtube.com/embed/' + obj.id.videoId);
                this.setState({ resultyt });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {
        // console.log(finalURL);
        console.log(this.state.resultyt);

        return (
            <div>
                <button onClick={this.clicked}>Get youtube videos</button>
                {
                    this.state.resultyt.map((link, i) => {
                        console.log(link);
                        var frame = <div key={i} className='youtube'>
                            <iframe title='my-title' width='560' height='315' src={link}
                                frameBorder='0' allowFullScreen>
                            </iframe></div>
                        return frame;
                    })
                }
                {this.frame}


            </div>
        );
    }
}

export default Youtube;
