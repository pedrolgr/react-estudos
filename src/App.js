import './App.css';
import { App1 } from './studies/01creating-nested-components-passing-props/App1.js'
import { App2 } from './studies/02usestate-hook/App2.js';

function App() {
  return (
    <div className="App">
      <App2></App2>
    </div>
  );
}

export default App;
