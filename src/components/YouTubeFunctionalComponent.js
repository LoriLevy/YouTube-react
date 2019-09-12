import React, { Component, useState } from 'react';

const API = 'YOUR_API_KEY'
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 5;

// https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

const Youtube = props => {

    const [resultyt, setresultyt] = useState([]);

    const clicked() => {
        setresultyt(resultyt);
    };

    //clicked.bind(this);


    
    clicked() {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                setState({ resultyt });
            })
            .catch((error) => {
                console.error(error);
            });
    }

        // console.log(finalURL);
        console.log(state.resultyt);

        return (
            <div>

                <button onClick={clicked.bind()}>Get youtube videos</button>
                {
                    state.resultyt.map((link, i) => {
                        console.log(link);
                        var frame = <div key={i} className="youtube"><iframe title="my-title" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                        return frame;
                    })
                }
                {this.frame}


            </div>
        );
    
}

export default Youtube;
