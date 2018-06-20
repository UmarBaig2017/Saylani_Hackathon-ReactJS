import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Form, Header, Container } from 'semantic-ui-react';

//   Initialize Firebase
var config = {
    apiKey: "AIzaSyDObWrCrbisSt0UZ2rkV_IezAv-W-CoCds",
    authDomain: "saylani-hack.firebaseapp.com",
    databaseURL: "https://saylani-hack.firebaseio.com",
    projectId: "saylani-hack",
    storageBucket: "saylani-hack.appspot.com",
    messagingSenderId: "372168361904"
  };
  firebase.initializeApp(config);

  
export default class SignupForm extends Component {
    constructor(props){
        super(props);
        this.signup = this.signup.bind(this)
    }

    signup = (event) => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const name = this.refs.name.value;
        console.log(email, password)
        const auth = firebase.auth();
        let promise = auth.createUserWithEmailAndPassword(email, password);

// 
// firebase.auth().createUserWithEmailAndPassword(user.Email, user.Password)
//  .then(function(res){
//     database.child('persons/' + res.uid).set(user)
//                 .then(function () {
//                     alert("hogya")
//                     location = 'login.html'
//      })
//     // console.log("success", success)
//  })
// 
        promise.then(user => {
            firebase
                .database()
                .ref(`users/${user.uid}`)
                .set({email: user.email, password: password, name: name}).then(()=>
                console.log("Submitted")).catch(e=>
                    console.log(e.message));
                this.props.history.push("/login")
        })
        promise.catch(e => {
            let err = e.message;
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Header>Register Your Account</Header>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Enter Your Name' type="text" ref="name"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Enter Your Email' type="email" ref="email"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Enter Your Password' type="password" ref="password"/>
                        </Form.Field>
                        <Button type='submit' onClick={this.signup} primary>Register</Button>
                    </Form>
                </Container>

            </div>
        );
    }
}
