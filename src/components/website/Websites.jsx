import React from 'react';  
import { connect } from 'react-redux';

import { Table, Button, Input, Icon, Popconfirm, Alert } from 'antd';  
import AddWebsite from './AddWebsite';
import EditWebsite from './EditWebsite';

import styles from '../../assets/css/style.less';
import {
  addWebsite, 
  editWebsite, 
  deleteWebsites,
 pageWebsite
} from '../../redux/actions/website';

@connect(
  (state) => {
    console.log(state, 'connect state');
    return ({
      websites: state.websites,
    });
  },
  {pageWebsite, addWebsite, editWebsite, deleteWebsites} //调用的时候会触发对应的saga
) 
class Websites extends React.Component {  
  constructor(props) {//   构造函数  
    super(props);  
    this.state = {  
      pageIndex : 1,
      keyword: '',
      index : '',  
      selectedRowKeys:[],  
      selectedRows:[],  
      record : ''  
    };  
    this.onDelete = this.onDelete.bind(this);
    this.handleSelectedDelete = this.handleSelectedDelete.bind(this);  
    this.columns = [  
      { title: '编号', dataIndex: 'id', key: 'id' ,width:'5%'},  
      { title: '描述', dataIndex: 'description', key: 'description' ,width:'45%'},  
      { title: '网址', dataIndex: 'link', key: 'link' ,width:'40%'},  
      { title: '操作', dataIndex: '', key: 'operation', width:'15%',render: (text, record, index)=>(  
        <span>  
          <Popconfirm title="删除不可恢复，你确定要删除吗?" onConfirm={this.onDelete.bind(this, record.id)}>  
            <a title="用户删除"  className="mgl10" >  
              <Icon type="delete"/>
            </a>  
          </Popconfirm>  
          <span className="ant-divider"/>  
            <EditWebsite className="user_details" pass={record} showEditModal={this.showEditModal.bind(this)}/>  
          </span>  
      )},  
    ];  
  }

  componentWillMount() {
    this.props.pageWebsite();
  }

    // 当props变化的时候触发
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps.websites.toJSON() )
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.websites !== this.props.websites;
  }

  showEditModal(event) {
  }

  onDelete(id){  
    this.props.deleteWebsites([id]); 
  }  

  handleSelectedDelete(){  
    this.props.deleteWebsites(this.state.selectedRowKeys); 
  } 
  handleSeach() {
    var kw = this.refs.txtSearch.refs.input.value;
    this.props.pageWebsite({pageIndex: 1, keyword : kw })
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
            <Button type="primary" icon="search" style={{float:"right",marginLeft:10}} onClick={this.handleSeach.bind(this)}>查询</Button>  
            <Input placeholder="input search text"  ref='txtSearch' style ={{width:300,float:"right"}}/>  
            <div id="add_delete">  
              <Popconfirm title="删除不可恢复，你确定要删除吗?" onConfirm={this.handleSelectedDelete.bind(this)}>  
                <Button type="primary" className="selectedDelete">删除所选</Button>  
              </Popconfirm>
              <div className="add_user_btn">
                <AddWebsite ref='addModal'  />  
              </div>
            </div>  
          </div>  
          <Table columns={this.columns} 
            rowKey = {(record) => record.id} 
            dataSource={this.props.websites.toJSON().result}  
            className="table"  
            rowSelection={rowSelection}  
            pagination = {{
              total:this.props.websites.toJSON().total,
              onChange: (current) => {  //点击改变页数的选项时调用函数，current:将要跳转的页数
                this.props.pageWebsite({pageIndex:current, keyword:''});
              },  
            }}
            scroll ={{y:800}}/>  
        </div>  
      </div>  
    );  
  }  
}  
module.exports = Websites; 