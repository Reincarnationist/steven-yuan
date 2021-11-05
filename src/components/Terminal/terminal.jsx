import React from 'react'
import './style.css';

import Stack from '@mui/material/Stack';
import Typewriter from 'typewriter-effect';



class Terminal extends React.Component {
    constructor(prop){
        super(prop)
        this.state = {
            executed: false,
            display: false,
            location: false,
            skills: false,
            interests: false,
            contact: false
        }

        this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    handleKeyDown(e){
        if(e.keyCode === 13){
            this.setState({
                display: true
            })
            setTimeout(() =>{
                this.setState({
                    location: true
                })
            },2000)
            setTimeout(() =>{
                this.setState({
                    skills: true
                })
            },4000)
            setTimeout(() =>{
                this.setState({
                    interests: true
                })
            },6000)
            setTimeout(() =>{
                this.setState({
                    contact: true
                })
            },8000)
        }
    }

    componentDidMount(){
        this._isMounted = true;
        document.addEventListener("keydown", this.handleKeyDown);
      }
      componentWillUnmount(){
        this._isMounted = false;
        document.removeEventListener("keydown", this.handleKeyDown);
      }
    render(){
        return (
            <div className='terminal'>
                <div className='terminal_container'>
                    <div className='header_container'>
                        <Stack
                            direction="row"
                            spacing={1} 
                            className='mac_icons'
                            >
                            <span className='icon1'></span>
                            <span className='icon2'></span>
                            <span className='icon3'></span>
                        </Stack>
                        <div className='title'>
                            <span>{this.state.executed ? "Executed":"Executing"} : introduceSelf.js</span>
                            </div>
                    </div>
                    <div className='main'>
                        <Stack
                            direction="column"
                            spacing={0} 
                            className='main_stack'
                            >
                            <Stack
                                direction="row"
                                spacing={1} 
                                style={{display: 'flex'}}
                            >
                                <span className='indicator'>&gt; </span>
                                <Typewriter
                                    options={{
                                        strings: 'self.about',
                                        autoStart: true,
                                        loop: false,
                                        cursor: '',
                                        delay: 75,
                                    }}
                                    />
                            </Stack>
                            <p>{this.state.display ? 'Loading data': 'Press enter to learn more about me'}</p>
                            {/* only display following after enter is pressed */}
                            {this.state.display && 
                                <div>
                                <Stack
                                    direction="row"
                                    spacing={1} 
                                    style={{display: 'flex'}}
                                >
                                    <span className='indicator'>&gt; </span>
                                    <Typewriter
                                    options={{
                                        strings: 'self.education',
                                        autoStart: true,
                                        loop: false,
                                        cursor: '',
                                        delay: 75,
                                    }}
                                    />
                                </Stack>
                                <p className='education'>"B.Sc Statistics, Computer Science, and Mathematics - University of Toronto"</p>
                                {this.state.location && <Stack
                                    direction="row"
                                    spacing={1} 
                                    style={{display: 'flex'}}
                                >
                                    <span className='indicator'>&gt; </span>
                                    <Typewriter
                                    options={{
                                        strings: 'self.location',
                                        autoStart: true,
                                        loop: false,
                                        cursor: '',
                                        delay: 75,

                                    }}
                                    />
                                </Stack>}
                                <p className='location'>"Toronto/Mississauga, Canada"</p>
                                {this.state.skills && <Stack
                                    direction="row"
                                    spacing={1} 
                                    style={{display: 'flex'}}
                                >
                                    <span className='indicator'>&gt; </span>
                                    <Typewriter
                                    options={{
                                        strings: 'self.skills',
                                        autoStart: true,
                                        loop: false,
                                        cursor: '',
                                        delay: 75,
                                    }}
                                    />
                                </Stack>}
                                <p className='skills'>[ "JavaScript", "Express.Js", "React.Js", "Python", "Go", "Git" ]</p>
                                {this.state.interests && <Stack
                                    direction="row"
                                    spacing={1} 
                                    style={{display: 'flex'}}
                                >
                                    <span className='indicator'>&gt; </span>
                                    <Typewriter
                                    options={{
                                        strings: 'self.interests',
                                        autoStart: true,
                                        loop: false,
                                        cursor: '',
                                        delay: 75,

                                    }}
                                    />
                                </Stack>}
                                <p className='interests'>[ "table tennis", "gaming", "photography" ]</p>
                                {this.state.contact && <Stack
                                    direction="row"
                                    spacing={1} 
                                    style={{display: 'flex'}}
                                >
                                    <span className='indicator'>&gt; </span>
                                    <Typewriter
                                    options={{
                                        strings: 'self.contactMe()',
                                        autoStart: true,
                                        loop: false,
                                        cursor: '',
                                        delay: 75,
                                    }}
                                    />
                                </Stack>}
                                <p className='contact'>[ <a href='https://www.linkedin.com/in/ruizheyuan/' target='_blank' rel='noreferrer' 
                                style={{fontWeight: 500,
                                    color: "#2bae66",
                                    textDecoration: 'none'}}> Linkedin</a>, <a href='mailto:ruizhe.yuan@mail.utoronto.ca' target='_blank' rel='noreferrer' 
                                    style={{fontWeight: 500,
                                        color: "#2bae66",
                                        textDecoration: 'none'}}> Email - ruizhe.yuan@mail.utoronto.ca</a> ]</p>
                                </div>
                            }
                        </Stack>
                    </div>   
                    </div>
            </div>
        )
    }

}

export default Terminal