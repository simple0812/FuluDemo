import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters,
  loginAction
} from '../redux/actions';

import styles from '../assets/css/style.less';

@connect(
  // 当store中的状态发生改变的时候 会触发该函数
  (state) => {
    return ({
      auth: state.auth,
      // visibleTodos: selectTodos(state.todos, state.visibilityFilter),
      // visibilityFilter: state.visibilityFilter
    });
  },
  {loginActions: loginAction} //调用的时候会触发对应的saga
)
export default class About extends Component {

  constructor(props) {
    super(props);
  }

  // 当props变化的时候触发
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps )
  }

  render() {
    return (
      <div  style={{textAlign:'left', width:'70%', margin:'0 auto'}}>
        <h1 onClick={this.props.loginActions} style={{textAlign:'center', margin:'30px'}}>About</h1>
        <h3>使用技术:</h3>
        <ul style={{marginLeft:'10px'}}>
          <li>- React</li>
          <li>- React Router</li>
          <li>- Redux</li>
          <li>- Redux Saga</li>
          <li>- Axios</li>
          <li>- Webpack</li>
          <li>- Ant Design</li>
        </ul>
        <h3 style={{ margin:'5px 0'}}>实现功能：对网址的增、删、改、查等功能</h3>
        <h3 style={{ margin:'5px 0'}}>源码地址：https://github.com/simple0812/FuluDemo</h3>
        <h3>在线演示：http://123.206.195.13:5555</h3>
      </div>
    )
  }
}
