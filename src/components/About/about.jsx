import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import self from '../../assets/images/self.jpg'
import uoft from '../../assets/images/uoft.svg.png'
import kcss from '../../assets/images/kcss.png'
import resp from '../../assets/images/certificates/responsive_web_design.PNG'
import algo from '../../assets/images/certificates/Js_algo_and_data_structure.PNG'
import front_end from '../../assets/images/certificates/front_end_development_libraries.PNG'

class About extends React.Component {
    render(){
        return (
        <div className='about_container'>
            <div className='intro_container'>
                <div className='self_pic'>
                    <img className='self_pic' src={self} alt='self' />
                    </div>
                <div className='intro'>
                    <h1 style={{fontWeight: 700, fontSize: '4rem', margin: '0 10px 10px 0', color: '#f5bd69'}}>Hi, I'm Steven!</h1>
                    <p className='intro_inner'>I graduated from UofT MCS (Mathematics, Computer Science & Statistics) department in November 2021.
                        Here on my website, you can look through the <Link className= 'link' to="/projects">projects </Link> 
                        I have worked on and browse my lovely <Link className= 'link' to="/cats">cats' photos</Link>.
                        Also, you can see my resume and reach out to me through <Link className= 'link' to="/contact">contact</Link> if interested.</p>
                    <Button 
                    variant="contained" 
                    size="large" 
                    style={{backgroundColor: '#2bae66'}} 
                    href='https://drive.google.com/file/d/1soCM89ty5G6zoxSzfKMGt3AkyYMfTc51/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'
                    >View My Resume</Button>
                    </div>
                </div>
            <div className='education_container'>
                <h2 style={{textAlign:'center'}}> Education Experience </h2>
                <a 
                className='uoft_box' 
                href='https://www.utoronto.ca/' 
                target='_blank'
                rel="noreferrer"
                >
                    <img src={uoft} alt='University of Toronto' style={{height: 100, width: 100}}/>
                    <span>
                        <h3 className='uoft_box_title'>University of Toronto</h3>
                        <p style={{fontStyle: 'italic'}}>Bachelor of Science: Statistics, Computer Science, and Mathematics</p>
                    </span>
                    <p style={{fontStyle: 'italic', flex: 1, textAlign: 'right'}}>2016 - 2021</p>
                </a>

                <a 
                className='uoft_box' 
                href='http://www.yrdsb.ca/schools/kingcity.ss/Pages/default.aspx' 
                target='_blank'
                rel="noreferrer"
                >
                    <img src={kcss} alt='King City Secondary School' style={{height: 100, width: 100}}/>
                    <span>
                        <h3 className='uoft_box_title'>King City Secondary School</h3>
                        <p style={{fontStyle: 'italic'}}>King City, ON</p>
                    </span>
                    <p style={{fontStyle: 'italic', flex: 1, textAlign: 'right'}}>2014 - 2016</p>
                </a>
                </div>
            <div className='work_container'>
                <h2 style={{textAlign:'center'}}> Work Experience </h2>
                <span className='uoft_box'>
                    <span>
                        <h3 className='uoft_box_title'>Xun You NetWork Technology Co.</h3>
                        <p style={{fontStyle: 'italic'}}>Research and Development Engineer Intern</p>
                        <p> - Developed an echo server using Go to limit test the speed and stability of data transfer in a high-volume and high-concurrency scenario.<br/>
                            - Designed an informative website to display the result during the test dynamically.<br/>
                            - Added new features strictly following project protocol.<br/>
                            - Ensured the code is consistent with the company’s coding standards.
                            </p>
                    </span>
                    <p style={{minWidth: 200, fontStyle: 'italic', flex: 1, textAlign: 'right'}}>July 2019 - August 2019</p>
                </span>
                <span className='uoft_box'>
                    <span>
                        <h3 className='uoft_box_title'>Donghai Securities</h3>
                        <p style={{fontStyle: 'italic'}}>Data Analyst Intern</p>
                        <p> - Research and develop the possibility to store and manipulate data using Redis for Financial Technology Department.<br/>
                            - Analyze data given by the department to make predictions for finance needs.
                            </p>
                    </span>
                    <p style={{minWidth: 200, fontStyle: 'italic', flex: 1, textAlign: 'right'}}>May 2019 - July 2019</p>
                </span>
                </div>
            <div className='cert_container'>
                <h2 style={{textAlign:'center'}}> Certificates </h2>
                <Grid container spacing={2} style={{textAlign:'center'}}>
                    <Grid item xs={4} key={0}>
                        <a
                        href='https://freecodecamp.org/certification/reincarnationist/responsive-web-design'
                        target='_blank'
                        rel="noreferrer"
                        >
                        <img style={{width:300, height:300}} src={resp} alt="Responsive Web Design" />
                        </a>
                        </Grid>
                    <Grid item xs={4} key={1}>
                        <a 
                        href='https://freecodecamp.org/certification/reincarnationist/javascript-algorithms-and-data-structures'
                        target='_blank'
                        rel="noreferrer"
                        >
                        <img style={{width:300, height:300}} src={algo} alt="JavaScript Algorithms and Data Structures" />
                        </a>
                        </Grid>   
                    <Grid item xs={4} key={2}>
                        <a 
                        href='https://freecodecamp.org/certification/reincarnationist/front-end-development-libraries'
                        target='_blank'
                        rel="noreferrer"
                        >
                        <img style={{width:300, height:300}} src={front_end} alt="Front End Development Libraries" />
                        </a>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

















export default About