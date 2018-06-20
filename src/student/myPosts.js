import React, { Component } from 'react';
import { Button, Form, Header, Container, TextArea, Tab, Segment, Divider, Item, Feed, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import firebase from 'firebase';




export default class AllPost extends Component {
    constructor(props){
        super(props)
    this.state={
        jobs :[],
        students:[],

        jobtittle: [],
        jobPosition: [],
        Qualification :[],
        salary:[] ,
        skills:[] ,
  }
    this.handleStudentInfo = this.handleStudentInfo.bind(this)
    }


componentDidMount(){
    const database = firebase.database().ref('Jobs')
    const previusUsers = this.state.jobs
    database.on('value',(snap)=>{
        const data = snap.val()
        let listData=''
        Object.keys(data).forEach((key)=>{
            //    this.state.users.push(data[key].Email)
            previusUsers.push({
                jobs:data[key].JobDescription,
                jobPosition: data[key].Position,
            }) 
        })
        this.setState({
            jobs:previusUsers,
            jobPosition : previusUsers
        })
        console.log(data)
    }) 
    
    const databasestd = firebase.database().ref('Students')
    const previusStd = this.state.students
    databasestd.on('value',(snap)=>{
        const stdData = snap.val()
        let StdList=''
        Object.keys(stdData).forEach((key)=>{
            //    this.state.users.push(data[key].Email)
            previusStd.push({
                students:stdData[key].Email
            }) 
        })
        this.setState({
            students:previusStd
        })
        console.log(stdData)
    }) 
}
handleStudentInfo(e){
    const data= 
  console.log("doe")
}
render(){

return(
<div>
            {this.state.jobs.map((user)=>{
             return  <div> <li><a href="">{user.jobs}</a></li>
             <li><a href="">{user.Position}</a></li>
             <li><a href="">{user.jobs}</a></li>
             <li><a href="">{user.jobs}</a></li>
             <li><a href="">{user.jobs}</a></li>
             </div>
})} 
</div>
    
)
}
}

// export default class RenderStudentData extends Component{
//     constructor(props){
//         super(props)
//     }


//     render(){
//         return(
//                 <div>
                    
//                 </div>


//         )
//     }
// }