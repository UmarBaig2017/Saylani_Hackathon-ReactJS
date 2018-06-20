// import React, { Component } from 'react';
// import { Button, Form, Header, Container, TextArea, Tab } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


// class Home extends Component {
//     render() {
//         return (
//             <div >
                
//             </div>
//         );
//     }
// }

// export default Home;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import login from "./student/loginForm";
import signup from "./student/signupForm";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

const FixedMenu = () => (
    <Menu fixed='top' size='large'>
        <Container>
            <Menu.Menu position='right'>
        
                <Menu.Item className='item'>
               
                 <Button as='a'>Log in</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button as='a' primary>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default class HomepageLayout extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })
    handleAdmin(e){
        window.location = 'http://localhost:3000/adminLogin';
    }

    handleComponeylogin(e){
        window.location = 'http://localhost:3000/componey-login'
    }
    render() {
        const { visible } = this.state

        return (
            <div>
                {visible ? <FixedMenu /> : null}

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{
                            minHeight: 700, padding: '1em 0em', backgroundColor:"American brown"
                    
                    }}
                        vertical
                        
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large' style={{border:"0px"}}>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted><Link to="/login" component={login} style={{color:"white"}}>Log in</Link></Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}><Link to="/signup" component={signup} style={{ color: "white" }}>Sing Up</Link></Button>
                                </Menu.Item>
                            </Menu>
                        </Container>

                        <Container text>
                            <Header
                                as='h1'
                                content='Campus Recruitment System'
                                inverted
                                style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                            />
                            <Header
                                as='h2'
                                content={<button  onClick={this.handleAdmin}> Admin login </button>}
                                inverted
                                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                            />
                            <Header as="h2" size='medium'
                            content={<button onClick={this.handleComponeylogin}> Componey login </button>} style={{color:"golden"}}>
                                
                            </Header>
                        </Container>
                    </Segment>
                </Visibility>

              
            </div>
        )
    }
}