import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';

import {increment,decrement} from './actions'
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends React.Component {
  render(){
    const props = this.props
    return(
      <React.Fragment>
        <div>value:{props.value}</div>
        <button onClick = {props.increment}>+1</button>
        <button onClick = {props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({value: state.count.value})
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
