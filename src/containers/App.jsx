import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../redux/actions';

import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/About';
import Websites  from '../components/website/websites';

const Dashboard = () => (
  <div>Dashboard</div>
)

export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header />
          <Layout.Content style={{height:'900px'}}>
            <Route exact path="/" component={Websites}/>
            <Route path="/About" component={About}/>
            <Route path="/Dashboard" component={Dashboard}/>
          </Layout.Content>
          <Footer />
        </Layout>
      </Router>
    );
  }
}