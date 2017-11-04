import React, { Component } from 'react'
import { Menu } from 'antd'
import {
  Link
} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
       <header>
        <Menu mode='horizontal' theme='dark' style={{paddingLeft:'100px'}} defaultSelectedKeys={['Home']}>
          <Menu.Item key='Home'><Link to="/">关于</Link></Menu.Item>
          <Menu.Item key='Dashboard'><Link to="/Dashboard">Dashboard</Link></Menu.Item>
          <Menu.Item key='Message'><Link to="/Websites">网址</Link></Menu.Item>
        </Menu>
      </header>
    )
  }
}
