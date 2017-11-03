import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
// import { Router } from 'react-router'
// import { Provider } from 'react-redux'
// import { syncHistoryWithStore } from 'react-router-redux'
// import routes from './routes'
// import './config'
// import configure from './store/configureStore'
// import myhistory from './history'

// const store = configure({ config: global.$GLOBALCONFIG })
// const history = syncHistoryWithStore(myhistory, store)
// history.listen(location => console.log('location:', location))
// history.listen(function (location) { return location })


ReactDOM.render(
  <div style={{ width: 400, margin: '100px auto' }}>  
    <Button>当前日期</Button>  
  </div>,
  document.getElementById('root')
);
