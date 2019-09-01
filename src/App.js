import React, {Component} from 'react';
import {Home} from './containers/Home/Home';
import {WatchVideo} from './containers/WatchVideo/WatchVideo';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/WatchVideo" component={WatchVideo}/>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    );
  }
}

export default App;