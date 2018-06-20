import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Form, Header, Container , TextArea } from 'semantic-ui-react'

import Routing from '../router';

export default class CompJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Jobtittle: "",
            JobDescription: "",
            Skills : "",
            QualificationReq: "",
            Position: "",
            JobLocation: "",
            Salary : ""

        },
            this.SubmitJob = this.SubmitJob.bind(this);
    }

    SubmitJob = (event) => {
        const Jobtittle = this.state.Jobtittle;
        const JobDescription = this.state.JobDescription;
        const Skills = this.state.Skills;
        const QualificationReq = this.state.QualificationReq;
        const JobLocation = this.state.JobLocation;
        const Salary = this.state.Salary;
        const Position = this.state.Position;
        if (!(JobLocation && JobDescription && Skills && Salary && Position)) {
            console.log("Enter something please");
        }
        else {
            console.log(this.state.JobDescription);
            console.log(this.state.Skills);
            console.log(this.state.QualificationReq);
            console.log(this.state.JobLocation);
        //   
       
            
            let Jobs=  this.state.Jobtittle;
            console.log(Jobs);
                var firebaseRef = firebase.database().ref('Jobs').child(Jobs)
                firebaseRef.set({ 
                    Jobtittle: this.state.Jobtittle, 
                    JobDescription: this.state.JobDescription,
                     Skills: this.state.Skills, 
                     QualificationReq: this.state.QualificationReq, 
                     Salary: this.state.Salary,
                     JobLocation: this.state.JobLocation,
                     Position : this.state.Position

                });
            
                this.props.history.push("/my-posts")
            
            this.setState({
                Jobtittle: "",
                JobDescription: "",
                Skills : "",
                QualificationReq: "",
                Position: "",
                JobLocation: "",
                Salary : ""
            })
        }

    }


    render() {
        return (
            <div >
                <Container>
                    <Form>
                       
                        <Header>Create  Job</Header>
                        <Form.Field>
                            <label>Job Tittle</label>
                            <input placeholder="Enter Job Tittle" type="text" name="jobTitl" onChange={
                                (event) => {
                                    this.setState({
                                        Jobtittle: event.target.value
                                    })
                                }
                            }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Job Description*</label>
                            <TextArea placeholder="Job escription" type="text" name="jobDesc"
                                onChange={
                                    (event) => {
                                        this.setState({
                                            JobDescription: event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>What skills Req*</label>
                            <input placeholder='Example: React , Angular etc' type="text"

                                onChange={
                                    (event) => {
                                        this.setState({
                                            Skills: event.target.value
                                        })
                                    }
                                }

                            />
                        </Form.Field>
                        <Form.Field>
                            <label>What minimum qualification is required?*</label>
                            <input placeholder='Qualificatopn Req*' type="text" 
                                onChange={
                                    (event) => {
                                        this.setState({
                                            QualificationReq : event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Number Of Positions</label>
                            <input placeholder='Example : 5*' type="text" 
                                onChange={
                                    (event) => {
                                        this.setState({
                                            Position : event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Job Location*</label>
                            <TextArea placeholder='Job Location' type="text"
                                onChange={
                                    (event) => {
                                        this.setState({
                                           JobLocation : event.target.value
                                        })
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>What is the salary range?*</label>
                            <input placeholder='5000 to 50,000' type="text" 

                                onChange={
                                    (event) => {
                                        this.setState({
                                            Salary: event.target.value
                                        })
                                    }
                                }

                            />
                        </Form.Field>

                        <Button type='submit' onClick={this.SubmitJob} >Submit Your Job</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}


