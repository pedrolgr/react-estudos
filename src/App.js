import './App.css';
import { App1 } from './studies/01creating-nested-components-passing-props/App1.js'
import { App2 } from './studies/02usestate-hook/App2.js';
import { App3 } from './studies/02usestate-hook/App3.js';
import { App4 } from './studies/03conditional-rendering/App4.js';
import { App5 } from './studies/04use-effect/App5.js';

function App() {
  return (
    <div className="App">
      <App5 />
    </div>
  );
}

export default App;
