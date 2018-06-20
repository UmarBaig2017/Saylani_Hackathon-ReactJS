import React, { Component } from 'react';
import { Button, Form, Header, Container, TextArea } from 'semantic-ui-react';
import firebase from 'firebase';

class StdForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Student_Name: "",
            Father_Name: "",
            Gender: "",
            Cgpa : "",
            Grade: "",
            Qualification :"",
            Email : this.props.match.params.email,
            Phone : "",

        },
            this.SubmitProfile = this.SubmitProfile.bind(this);
            const data ={
                
            }
    }

    SubmitProfile = (event) => {
        const Student_Name = this.state.Student_Name;
        const Father_Name = this.state.Father_Name;
        const Gender = this.state.Gender;
        const Cgpa = this.state.Cgpa;
        const Grade = this.state.Grade;
        const Qualification = this.state.Qualification;
        const Email = this.state.Email;
        const Phone = this.state.Phone;
        if (!(Student_Name && Father_Name && Cgpa && Phone && Email && Phone && Qualification && Grade)) {
            console.log("Enter something please");
        }
        else {
            console.log(this.state.Student_Name);
            console.log(this.state.Father_Name);
            console.log(this.state.Cgpa);
            console.log(this.state.Qualification);
            var userId = firebase.auth().currentUser.uid;
            console.log(userId);


            
            
            
                //  let data = firebase
                // .database()
                // .ref(`Umar/${userId}`).child('/Student-CV/')
                // .push().set
                var Name=  this.state.Student_Name;
                var firebaseRef = firebase.database().ref('Students').child(this.state.Email)
                firebaseRef.set({ 
                    Student_Name: this.state.Student_Name, 
                    Father_Name: this.state.Father_Name,
                    Cgpa: this.state.Cgpa, 
                    Gender: this.state.Gender,
                    Grade: this.state.Grade, 
                    Qualification: this.state.Qualification,
                    Email: this.state.Email,
                    Phone: this.state.Phone,

                })
                this.props.history.push("/my-posts")
                // }).then((user)=>window.location=("http://localhost:3000/my-posts")).catch((msg)=>console.log(msg)) ;
                

            this.setState({
            Student_Name: "",
            Father_Name: "",
            Gender: "",
            Cgpa : "",
            Grade: "",
            Qualification :"",
            Email : "",
            Phone : "",

            })
        }
    }


    render() {
        return (
            <div >
                <Container>
                    <Form>
                        <Header>{}</Header>
                        <Form.Field>
                            <label>Student Name</label>
                            <input placeholder="Enter Student's Name" type="text" name="stdname" onChange={
                                (event) => {
                                    this.setState({
                                        Student_Name: event.target.value
                                    })
                                }
                            }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Father Name</label>
                            <input placeholder="Father's Name" type="text" name="fathername"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            Father_Name: event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Gender</label>
                            <input placeholder='Gender' type="text" name="Address"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            Gender: event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label> C.GPA </label>
                            <input placeholder='Enter C.GPA here' type="text" name="rollnum"

                                onChange={
                                    (event) => {
                                        this.setState({
                                            Cgpa: event.target.value
                                        })
                                    }
                                }

                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Grade</label>
                            <TextArea placeholder='Enter Transcript Grade here' type="text" name="Address"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            Grade: event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Qualification</label>
                            <TextArea placeholder='Your Qualifications' type="text" name="Address"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            Qualification: event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone</label>
                            <TextArea placeholder='Type Phone #' type="text" name="Address"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            Phone: event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                      

                        <Button type='submit' onClick={this.SubmitProfile} >Submit Profile</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default StdForm;


// class StdForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Missing_Person: "",
//             Person_Address: "",
//             Person_Contact: "",
//             Person_Identification: ""
//         },
//             this.MissingReport = this.MissingReport.bind(this);
//     }



//     MissingReport = (event) => {
//         const Person_Address = this.state.Person_Address;
//         const Missing_Person = this.state.Missing_Person;
//         const Person_Contact = this.state.Person_Contact;
//         const Person_Identification = this.state.Person_Identification;

//         if (!(Person_Address && Missing_Person && Person_Contact && Person_Identification)) {
//             console.log("Enter something please");
//         }
//         else {
//             console.log(this.state.Missing_Person);
//             console.log(this.state.Person_Address);
//             console.log(this.state.Person_Contact);
//             console.log(this.state.Person_Identification);
//             var userId = firebase.auth().currentUser.uid;
//             console.log(userId);
//             let data = firebase
//                 .database()
//                 .ref(`saim/${userId}`).child('/missing_person/')
//                 .push().set({
//                     Missing_Person: this.state.Missing_Person,
//                     Person_Address: this.state.Person_Address,
//                     Person_Contact: this.state.Person_Contact,
//                     Person_Identification: this.state.Person_Identification
//                 });
//             console.log(data);
//             this.setState({
//                 Missing_Person: "",
//                 Person_Address: "",
//                 Person_Contact: "",
//                 Person_Identification: ""
//             })
//         }

//     }

//     render() {
//         return (
//             <div >
//                 <Container>
//                     <Form>
//                         <Header>Submit Missing Person's Details</Header>
//                         <Form.Field>
//                             <label>Missing Person Name :</label>
//                             <input placeholder='Enter Missing Person Name' type="text" name="pName"
//                                 onChange={
//                                     (event) => {
//                                         this.setState({
//                                             Missing_Person: event.target.value
//                                         })
//                                     }
//                                 }

//                             />
//                         </Form.Field>
//                         <Form.Field>
//                             <label>Person's Address</label>
//                             <TextArea placeholder='Person Address' type="text" name="pAddress"
//                                 onChange={
//                                     (event) => {
//                                         this.setState({
//                                             Person_Address: event.target.value
//                                         })
//                                     }
//                                 }
//                             />
//                         </Form.Field>
//                         <Form.Field>
//                             <label>Person's Phone Number:</label>
//                             <input placeholder="Enter Person's Phone Number" type="tel" min="0" max="0" name="yourName"
//                                 onChange={
//                                     (event) => {
//                                         this.setState({
//                                             Person_Contact: event.target.value
//                                         })
//                                     }
//                                 }
//                             />
//                         </Form.Field>
//                         <Form.Field>
//                             <label>Person's Identification Mark:</label>
//                             <TextArea placeholder="Type Person's Identification Mark" type="text" name="Address"

//                                 onChange={
//                                     (event) => {
//                                         this.setState({
//                                             Person_Identification: event.target.value
//                                         })
//                                     }
//                                 }

//                             />
//                         </Form.Field>

//                         <Button type='submit' onClick={this.MissingReport} >Submit Details</Button>
//                     </Form>
//                 </Container>
//             </div>
//         );
//     }
// }

// export default StdForm ;