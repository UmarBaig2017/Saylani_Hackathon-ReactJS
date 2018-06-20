import React, { Component } from 'react';
import { Button, Form, Header, Container, TextArea, Tab, Segment, Divider, Item, Feed, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import firebase from 'firebase';


export default class AdminLogin extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
    }

    //Login for firebase authentication
    //==========================================================================
   
    login = (event) =>{
        const Email = this.refs.email.value;
          const Password = this.refs.password.value;
    const reference=firebase.database().ref('admin')
     reference.on('value',(snap)=>{
        const data=snap.val()
     let email=data.Email;
      let pw=data.password;
      if (email == Email && pw == Password){
        
                   this.props.history.push("/my-posts")

      }
      else{
          console.log("error")
      }
})






    // login = (event) => {
    //       const email = this.refs.email.value;
    //       const password = this.refs.password.value;
    //       console.log(email, password)
    //       const auth = firebase.auth();
          
    //           .then(redirect => {
    //             this.props.history.push("/my-posts")
    //       })
    //           .catch(e => {
    //               let err = e.message;
    //               console.log(err);
    //           })
    //   }
      //**************************************************************************
}
    render(){
        return(
            <div>
            <Container>
                <Form>
                    <Header>Admin Login</Header>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Enter Your Email' type="email" ref="email"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Enter Your Password' type="password" ref="password"/>
                    </Form.Field>
                    <Button type='submit' onClick={this.login} primary>Login</Button>
                </Form>
            </Container>

        </div>




        )
    }
}