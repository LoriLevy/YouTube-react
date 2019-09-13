import React, {Component} from 'react';
import {Home} from './containers/Home/Home';
import {Watch} from './containers/Watch/Watch';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';


const API_KEY = 'your_api_key';

//all the same
class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path='/Watch' component={Watch}/>
          <Route path='/' component={Home}/>
        </Switch>
      </AppLayout>
    );
  }


  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi(){
    const script = document.createElement("script");
    script.src="https://apis.google.com/js/client/js";
    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

   

  }

}

/* attach the youtubeLibraryLoaded actionCreator to our props with mapDispatchToProps */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

/* connect is a helper that is part of  mapDispatchToProps & mapStateToProps */
export default connect(null,mapDispatchToProps)(App);