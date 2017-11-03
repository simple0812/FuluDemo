import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux';
// import rootReducer from './reducers'
// const store = createStore(rootReducer);

const App = () => (
  <div>App</div>
)
const Dashboard = () => (
  <div>Dashboard</div>
)
const About = () => (
  <div>About</div>
)
const Inbox = () => (
  <div>Inbox</div>
)

const Message = () => (
  <div>Message</div>
)

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Message">Message</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route path="/Message" component={Message}/>
    </div>
  </Router>,
  document.getElementById('root')
);
