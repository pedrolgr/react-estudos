import './App.css';
import { App1 } from './studies/01creating-nested-components-passing-props/App1.js'
import { App2 } from './studies/02usestate-hook/App2.js';
import { App3 } from './studies/02usestate-hook/App3.js';
import { App4 } from './studies/03conditional-rendering/App4.js';

function App() {
  return (
    <div className="App">
      <App4 state={true}/>
    </div>
  );
}

export default App;
