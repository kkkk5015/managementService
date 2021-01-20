import React from 'react';
import { post } from 'axios';
//import { response } from 'express';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file : null,
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        })
        
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0] , 
            fileName : e.target.value
        })
    }

    handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    
    addCustomer = () => {
        const url = '/api/customers';
        const forData = new FormData();
        forData.append('image', this.state.file);
        forData.append('name', this.state.userName);
        forData.append('birthday', this.state.birthday);
        forData.append('gender', this.state.gender);
        forData.append('job', this.state.job);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, forData, config)

    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지 : <input type='file' name='file' file = {this.state.file} value={this.state.fileName} onChange = {this.handleFileChange}/><br/>
                이름 : <input type = 'text' name = 'userName' value = {this.state.userName} onChange = {this.handlevalueChange}/><br/>
                생년원일 : <input type = 'text' name = "birthday" value= {this.state.birthday} onChange = {this.handlevalueChange}/><br/>
                성별 : <input type= "text" name = "gender" value = {this.state.gender} onChange = {this.handlevalueChange}/><br/>
                직업 : <input type= "text" name = "job" value = {this.state.job} onChange = {this.handlevalueChange}/><br/>
                <button type = "submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;