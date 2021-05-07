
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home id="homeBody"/>
          </Route>
          <Route path="/about"><About/></Route>
        </Switch>
      </div>
    </Router>
  );
}
