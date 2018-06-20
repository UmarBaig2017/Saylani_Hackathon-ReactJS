import React, { Component } from 'react';
import { Router as Router, Route , LINK} from 'react-router-dom';
import firebase from 'firebase';
import SignupForm from './student/signupForm';
import LoginForm from './student/loginForm';
import createBrowserHistory from "history/createBrowserHistory"
import Student from './Dashboard';
import studentForm from './student/studentFrom';

import AllPost from './student/myPosts';
import Home from './Home';
import AdminLogin from "./admin/adminLogin"
import CompLogin from "./componies/compLogin";
import SignupComponey from "./componies/componiesSignup"
import CompJob from "./componies/ComponyJob";
import StudentInfo from "./student/studentInfo"
import JobInfo from "./componies/jobinfo";

const customHistory =createBrowserHistory();



class Routing extends Component {
    render() {
        return (
            <div >
                <Router history={customHistory}> 
                    <div>
                        <Route exact path="/" component={Home} />
                        {/* students */}
                        <Route  path="/signup" component={SignupForm} />
                        <Route path="/login" component={LoginForm} />
                     
                        <Route path="/Dashboard" component={Student} />
                        <Route path="/studentFrom/:email" component={studentForm}/>
                        
                        <Route path="/my-posts/" component={AllPost} />
                        {/*admin login  */}
                        <Route path="/adminLogin" component={AdminLogin} />
                        {/* componey */}
                        <Route path="/componey-login" component={CompLogin} />
                        <Route path="/componey-Job" component={CompJob}/>
                        <Route path="/componey-Jobs" component={CompJob} />
                        
                    </div>

                </Router>

            </div>
        );
    }
}

export default Routing;