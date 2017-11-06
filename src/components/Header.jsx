import React, { Component } from 'react'
import { Menu } from 'antd'
import { browserHistory } from 'react-router';

import {
  Link
} from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKey:'Websites',
    }
  }
  componentWillMount(){
    if(location.hash.length > 2) {
      this.state.defaultKey = location.hash.slice(2);
    } 
  }
  render() {
    return (
       <header>
        <Menu mode='horizontal' theme='dark' style={{paddingLeft:'100px'}} defaultSelectedKeys={[this.state.defaultKey]}>
          <Menu.Item key='Websites'><Link to="/">网址</Link></Menu.Item>
          <Menu.Item key='About'><Link to="/About">关于</Link></Menu.Item>
        </Menu>
      </header>
    )
  }
}
