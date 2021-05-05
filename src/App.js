import './App.css';
import hellocgu from './cgu_hello'
import mutiButton from './cgu_mutiButton'
//import CounterButton from './cgu_mutiButton'

function App() {
  var React = require('react');
  return (
    <div className="App">
      <div>{hellocgu()}</div>
      <div>{mutiButton(10)}</div>
    </div>
  );
}

export default App;