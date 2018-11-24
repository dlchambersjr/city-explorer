import React from 'react';

import Header from './components/header';
import Form from './components/form.js';
// import GoogleApi from './components/api/googleApi.js';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form prompt='Enter a Location' />
        {/* <GoogleApi /> */}
      </div>
    );
  }
}

export default App;
