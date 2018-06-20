import React, { Component } from 'react';
import { Button, Form, Header, Container, TextArea, Tab, Segment, Divider, Item, Feed, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import firebase from 'firebase';






export default class CompLogin extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
    }

    //Login for firebase authentication
    //==========================================================================
    login = (event) => {
          const Email = this.refs.email.value;
          const password = this.refs.password.value;
          console.log(Email, password)
          const reference=firebase.database().ref('componies')
             reference.on('value',(snap)=>{
        const data=snap.val()
     let email=data.email;
      let pw=data.password;
      if (email == Email && pw == password){
        
                   this.props.history.push("/componey-Job")

      }
      else{
          console.log("error")
      }
        //   let promise = auth.signInWithEmailAndPassword(email, password);
        //   promise
        //       .then(redirect => {
        //         this.props.history.push("/my-posts")
        //   })
        //       .catch(e => {
        //           let err = e.message;
        //           console.log(err);
        //       })
      
                //**************************************************************************
    }   )}

    render(){
        return(
            <div>
            <Container>
                <Form>
                    <Header>company Login</Header>
                    <Form.Field>
                        <label>Company</label>
                        <input placeholder='Enter Reserved Email' type="email" ref="email"/>
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