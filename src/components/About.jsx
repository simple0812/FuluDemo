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
        <p>本项目使用了以下几项技术:</p>
        <ul style={{marginLeft:'10px'}}>
          <li>- React</li>
          <li>- React Router</li>
          <li>- Redux</li>
          <li>- Redux Saga</li>
          <li>- Axios</li>
          <li>- Webpack</li>
          <li>- Ant Design</li>
        </ul>
      </div>
    )
  }
}
