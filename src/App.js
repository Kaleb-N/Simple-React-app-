import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/contact" >
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;