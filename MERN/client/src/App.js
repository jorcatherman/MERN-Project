import logo from './logo.svg';
import Main from './views/Main'
import PirateForm from './components/PirateForm'
import { Router, Link } from '@reach/router'
import Detail from './views/Detail'

function App() {
  return (
    <div className="App">
      <Router>
      <Detail path='pirates/:id'/>
      <Main path ='/' />
      <PirateForm path = 'pirates/new/'/>
      </Router>
      
    </div>
  );
}

export default App;
