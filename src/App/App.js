import './App.scss';
import Ifc from '../Pages/Ifc';
import Ap from '../Pages/Ap';
import P2p from '../Pages/P2p';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Ifc} />
          <Route path='/ap' exact component={Ap} />
          <Route path='/p2p' exact component={P2p} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
