import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import che from './public/img/che.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>这是赵杰的网站哦。</p>
        </header>
        <img src={che} alt=""/>
      </div>
    );
  }
}

export default App;
