import React, { Component } from 'react'
import { Layout } from 'antd'
import {
  Link
} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <Layout.Footer style={{position:'fixed', bottom:0, width:'100%', textAlign:'center'}}>
        fulu demo design by antd
      </Layout.Footer>
    )
  }
}
