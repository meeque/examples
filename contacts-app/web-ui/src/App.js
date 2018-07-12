import React, { Component } from 'react';
import MainPage from './components/MainPage/MainPage.container';
// import MainPage from './components/MainPage/MainPage.component';

class App extends Component {
  render() {
    return (
      <div>
        <div className="ph3 pv1 background-gray">
          <MainPage/>
        </div>
      </div>
    );
  }
}

export default App;
