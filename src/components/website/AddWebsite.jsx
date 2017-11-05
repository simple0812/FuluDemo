import React, { Component } from 'react';  
import {Form,Input,Button,Select,Modal} from 'antd'  
import { connect } from 'react-redux';

const FormItem = Form.Item;  
const Option = Select.Option;  

import {
  addWebsite, 
} from '../../redux/actions/website';

@connect(
  (state) => {
    return ({
      websites: state.websites,
    });
  },
  {addWebsite} //调用的时候会触发对应的saga
)  
class AddWebsite extends Component{
  constructor(props){
    super(props);  
    this.state = {  
      visible:false,
      model: {
        description:'',
        link:''
      }  
    };  
    this.handleAdd = this.handleAdd.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.handleOk = this.handleOk.bind(this)  
    this.handleClear = this.handleClear.bind(this)  
  }  
  handleAdd() {  
    this.setState({  
      visible: true  
    });  
  }  
  handleAddx() {  
    this.setState({  
      visible: true,
      model: {
        description:'xx',
        link:'aa'
      }  
    });  
  }
  handleSubmit(e){
    e.preventDefault();  
    this.props.form.validateFieldsAndScroll((err,values)=>{  
      if(!err){  
        this.setState({  
            visible:false  
        })  
        this.props.form.resetFields();//清空提交的表单 
        console.log(values); 
        this.props.addWebsite(values);
        //当值传递到父元素后，通过回调函数触发appendPerson方法将参数values带到父元素  
        //this.props.callback(values);  
      }  
    })  
  }  

  handleClear(){  
    this.props.form.resetFields();  
  }  

  handleOk() {  
    this.setState({  
      visible: false
    });  
  }  
  render(){  
    const {getFieldDecorator} = this.props.form;  
    const formItemLayout = {  
      labelCol:{span : 6},  
      wrapperCol:{span: 14}  
    };  
    const tailFormItemLayout = {  
      wrapperCol: {  
        span: 14,  
        offset: 8  
      }  
    };  
    return(  
      <div>  
        <Button type="primary" onClick={this.handleAdd}>添加</Button>  
        <Modal title="新建用户" visible={this.state.visible} onCancel={this.handleOk} onOk={this.handleSubmit}>  
          <Form>  
            <FormItem {...formItemLayout} label = "描述"  hasFeedback>  
              {getFieldDecorator('description', {  
                initialValue:this.state.model.description,
                rules:[{  
                  required:true,message:'请输入网址的描述'  
                }]  
              })(  
                <Input placeholder="请输入网址的描述" />  
              )}  
            </FormItem>  
            <FormItem {...formItemLayout} label="网址" hasFeedback>  
              {getFieldDecorator('link',{  
                initialValue:this.state.model.link,
                rules:[{required:true,message:'请输入网址'}]  
              })(  
                <Input placeholder="请输入网址" />  
              )}  
            </FormItem>  
          </Form>  
        </Modal>  
      </div>  
    )  
  }  
}  
AddWebsite = Form.create()(AddWebsite); 
  
export default AddWebsite;  