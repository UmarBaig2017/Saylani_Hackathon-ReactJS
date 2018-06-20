import React, { Component } from 'react';
import { Button, Form, Header, Container, TextArea, Tab } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
// import Complain from './Complain';
import StdForm  from './student/studentFrom';
// import MissingReport from './MissingReport';
// import MyPosts from './myPosts';

export default class Student extends Component{
    constructor(props){
        super()
    }

render(){
    return(
    <div>
    <StdForm/>
     </div>
    )
}
}
