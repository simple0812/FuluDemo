import React, { Component } from 'react'  
import {Modal,Button} from 'antd'  

class EditWebsite extends Component{  
    constructor(props){  
        super(props);  
        this.state={  
            visible:false  
        }  
    }  
   
    render(){  
      return(  
        <div style={{display:'inline-block'}}>  
          <a onClick={this.props.showEditModal}>编辑</a>  
        </div>  
      )  
    }  
}  
  
export default EditWebsite;  