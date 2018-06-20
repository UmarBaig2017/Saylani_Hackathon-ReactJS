// import React, { Component } from 'react';
// import firebase from 'firebase';
// import { Button, Form, Header, Container } from 'semantic-ui-react'

// import Routing from '../router';

//  // Initialize Firebase


  
// export default class SignupComponey extends Component {
//     constructor(props){
//         super(props);
//         this.signup = this.signup.bind(this)
//     }

//     signup = (event) => {
//         const email = this.refs.email.value;
//         const password = this.refs.password.value;
//         const name = this.refs.name.value;
//         console.log(email, password)
//         const auth = firebase.auth();
//         let promise = auth.createUserWithEmailAndPassword(email, password);


//         promise.then(user => {
//             firebase
//                 .database()
//                 .ref(`Componies/${user.uid}`)
//                 .set({email: user.email, password: password, name: name}).then(()=>console.log("Submitted")).catch(e=>console.log(e.message));
//                 window.location = 'http://localhost:3000/componey-login';
//         })
//         promise.catch(e => {
//             let err = e.message;
//             console.log(err);
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <Container>
//                     <Form>
//                         <Header>Componies SignUp</Header>
//                         <Form.Field>
//                             <label>Compony Name</label>
//                             <input placeholder='Enter Componey Name' type="text" ref="name"/>
//                         </Form.Field>
//                         <Form.Field>
//                             <label>Componey Email ID</label>
//                             <input placeholder='Enter Email' type="email" ref="email"/>
//                         </Form.Field>
//                         <Form.Field>
//                             <label>Password</label>
//                             <input placeholder='Enter Your Password' type="password" ref="password"/>
//                         </Form.Field>
//                         <Button type='submit' onClick={this.signup} primary>Register</Button>
//                     </Form>
//                 </Container>

//             </div>
//         );
//     }
// }
