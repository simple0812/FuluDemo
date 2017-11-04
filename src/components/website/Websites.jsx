import React from 'react';  
import { Table, Button, Input, Icon, Popconfirm, Alert } from 'antd';  
import AddWebsite from './AddWebsite';
import EditWebsite from './EditWebsite';

import styles from '../../assets/css/style.less';
  
class Websites extends React.Component {  
  constructor(props) {//   构造函数  
    super(props);  
    this.state = {  
      dataSource:[  
        { key: 1, id:1, link: 'tab', description: '热爱班级活动，尊敬老师'},  
        { key: 2, id:2, link: 'shift', description: '热爱班级活动，尊敬老师'},  
        { key: 6, id:6, link: 'ctrl', description: '热爱班级活动，尊敬老师'},  
        { key: 4, id:4, link: 'caps lock', description: '热爱班级活动，尊敬老师'},  
        { key: 5, id:5, link: 'enter', description: '热爱班级活动，尊敬老师'}  
      ],  
      index : '',  
      PersonCount :0,  
      selectedRowKeys:[],  
      selectedRows:[],  
      record : 'abc'  
    };  
    this.onDelete = this.onDelete.bind(this);
    this.appendPerson = this.appendPerson.bind(this);  
    this.handleSelectedDelete = this.handleSelectedDelete.bind(this);  
    this.columns = [  
      { title: '编号', dataIndex: 'id', key: 'id' ,width:'5%'},  
      { title: '描述', dataIndex: 'description', key: 'description' ,width:'45%'},  
      { title: '网址', dataIndex: 'link', key: 'link' ,width:'40%'},  
      { title: '操作', dataIndex: '', key: 'operation', width:'15%',render: (text,record,index)=>(  
        <span>  
          <Popconfirm title="删除不可恢复，你确定要删除吗?" >  
            <a title="用户删除"  className="mgl10"onClick={this.onDelete.bind(this,index)}>  
              <Icon type="delete"/>
            </a>  
          </Popconfirm>  
          <span className="ant-divider"/>  
            <EditWebsite className="user_details" pass={record} showEditModal={this.showEditModal.bind(this)}/>  
          </span>  
      )},  
    ];  
  }

  showEditModal(event) {
  }

  appendPerson(event){//得到子元素传过来的值  
    let array = [];  
    let count = 0;  
    this.state.dataSource.forEach(function (element) {  
      Object.keys(element).some(function (key) {  
        if (key === 'nid') {  
          count++;  
          array[count] = element.nid
        }  
      })  
    })  
    let sortData =array.sort();  
    let MaxData = sortData[(this.state.dataSource.length)-1]
    event.key=MaxData+1;  
    event.nid = MaxData+1;  
    this.setState({  
      dataSource:[...this.state.dataSource,event]  
    })  
  }  

  onDelete(index){  
    console.log(index)  
    const dataSource = [...this.state.dataSource];  
    dataSource.splice(index, 1);
    this.setState({ dataSource });  
  }  

  handleSelectedDelete(){  
    if(this.state.selectedRowKeys.length>0){  
      console.log(...this.state.selectedRowKeys)  
      const dataSource = [...this.state.dataSource]  
      dataSource.splice(this.state.selectedRows,this.state.selectedRows.length)  
      this.setState({ dataSource });  
    }  
    else{  
    }  
  }  

  render() {  
      //联动选择框  
    const rowSelection = {  
      onChange: (selectedRowKeys, selectedRows) => {  
        this.setState({
          selectedRowKeys:selectedRowKeys,  
          selectedRows:selectedRows  
        })  
        console.log(selectedRows,selectedRowKeys)  
      },  
      onSelect: (record, selected, selectedRows) => {  
          
      },  
      onSelectAll: (selected, selectedRows, changeRows) => {  
          
      },  
      getCheckboxProps: record => ({  
          disabled: record.name === 'Disabled User',
      }),  
    }

    return (  
      <div className="div_body">  
        <div id="div_left"></div>  
        <div id="div-right">  
          <div className="table_oftop">  
            <Button type="primary" icon="search" style={{float:"right",marginLeft:10}}>查询</Button>  
            <Input placeholder="input search text" style ={{width:300,float:"right"}}/>  
            <div id="add_delete">  
              <Button type="primary" className="selectedDelete" onClick={this.handleSelectedDelete}>删除所选</Button>  
              <AddWebsite ref='addModal' className="add_user_btn" callback={this.appendPerson}/>  
            </div>  
          </div>  
          <Table columns={this.columns}  
            dataSource={this.state.dataSource}  
            className="table"  
            rowSelection={rowSelection}  
            scroll ={{y:400}}/>  
        </div>  
      </div>  
    );  
  }  
}  
module.exports = Websites; 