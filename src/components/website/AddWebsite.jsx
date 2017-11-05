import React, { Component } from 'react';  
import {Form,Input,Button,Select,Modal} from 'antd'  
import { connect } from 'react-redux';

const FormItem = Form.Item;  
const Option = Select.Option;  

import {
  addWebsite, 
  editWebsite,
} from '../../redux/actions/website';

@connect(
  (state) => {
    return ({
      websites: state.websites,
    });
  },
  {addWebsite, editWebsite} //调用的时候会触发对应的saga
)  
class AddWebsite extends Component {
  constructor(props){
    super(props);  
  }  

  handleSubmit(e){
    e.preventDefault();  
    this.props.form.validateFieldsAndScroll((err,values)=>{  
      if(!err){  
       this.props.onClose();
        this.props.form.resetFields();//清空提交的表单 
        console.log(values, this.props.model.id); 
        if(this.props.model.id) {
          values.id = this.props.model.id;
          this.props.editWebsite(values);
        } else {
          this.props.addWebsite(values);
        }
      }  
    })  
  }  

  handleClear(){  
    this.props.form.resetFields();  
  }  


  handleOk() {  
    this.props.onClose(); 
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
        <Modal title="新建用户" visible={this.props.visible} onCancel={this.handleOk.bind(this)} onOk={this.handleSubmit.bind(this)}>  
          <Form>  
            <FormItem {...formItemLayout} label = "描述"  hasFeedback>  
              {getFieldDecorator('description', {  
                initialValue:this.props.model.description,
                rules:[{  
                  required:true,message:'请输入网址的描述'  
                }]  
              })(  
                <Input placeholder="请输入网址的描述" />  
              )}  
            </FormItem>  
            <FormItem {...formItemLayout} label="网址" hasFeedback>  
              {getFieldDecorator('link',{  
                initialValue:this.props.model.link,
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