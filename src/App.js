import './App.css';
import { App1 } from './studies/01creating-nested-components-passing-props/App1.js'

function App() {
  return (
    <div className="App">
      <App1 title="Hello, world!" buttonText="Click me" />
    </div>
  );
}

export default App;
