import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Projects() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
        return (
            <div className='projects_container'>
                <p style={{
                    textAlign: 'center', 
                    fontWeight: 700, 
                    fontSize: '3rem', 
                    color: 'black', 
                    margin: '10px auto',
                    textDecoration: 'underline',
                    textDecorationColor: '#61dafb',
                    textUnderlineOffset: 10,
                    textDecorationThickness: '0.5rem'}}>My Projects</p>
                <Button 
                variant="contained" 
                size="large" 
                startIcon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>}
                style={{
                    backgroundColor: '#2bae66',
                    margin: '50px 0 50px 0',
                    padding: 5,
                    minWidth: 220,
                    fontWeight: 700,
                    alignSelf: 'center'
                }} 
                href='https://github.com/Reincarnationist'
                >View My Projects</Button>
                <Box style={{margin:'0 0 20px 0', textAlign:'center'}} sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 0, borderColor: 'transparent' }}>
                        <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        aria-label="basic tabs" 
                        textColor="primary"
                        indicatorColor="primary"
                        centered>
                        <Tab style={{
                            margin: 'auto'}} label="JavaScript" {...a11yProps(0)} iconPosition="start" icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-13otjrl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>}/>
                        <Tab style={{
                            margin: 'auto'}} label="Go" {...a11yProps(1)} iconPosition='start' icon={<svg height="24" viewBox="0 0 207 78" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m16.2 24.1c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h35.7c.4 0 .5.3.3.6l-1.7 2.6c-.2.3-.7.6-1 .6z"/><path d="m1.1 33.3c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h45.6c.4 0 .6.3.5.6l-.8 2.4c-.1.4-.5.6-.9.6z"/><path d="m25.3 42.5c-.4 0-.5-.3-.3-.6l1.4-2.5c.2-.3.6-.6 1-.6h20c.4 0 .6.3.6.7l-.2 2.4c0 .4-.4.7-.7.7z"/><g transform="translate(55)"><path d="m74.1 22.3c-6.3 1.6-10.6 2.8-16.8 4.4-1.5.4-1.6.5-2.9-1-1.5-1.7-2.6-2.8-4.7-3.8-6.3-3.1-12.4-2.2-18.1 1.5-6.8 4.4-10.3 10.9-10.2 19 .1 8 5.6 14.6 13.5 15.7 6.8.9 12.5-1.5 17-6.6.9-1.1 1.7-2.3 2.7-3.7-3.6 0-8.1 0-19.3 0-2.1 0-2.6-1.3-1.9-3 1.3-3.1 3.7-8.3 5.1-10.9.3-.6 1-1.6 2.5-1.6h36.4c-.2 2.7-.2 5.4-.6 8.1-1.1 7.2-3.8 13.8-8.2 19.6-7.2 9.5-16.6 15.4-28.5 17-9.8 1.3-18.9-.6-26.9-6.6-7.4-5.6-11.6-13-12.7-22.2-1.3-10.9 1.9-20.7 8.5-29.3 7.1-9.3 16.5-15.2 28-17.3 9.4-1.7 18.4-.6 26.5 4.9 5.3 3.5 9.1 8.3 11.6 14.1.6.9.2 1.4-1 1.7z"/><path d="m107.2 77.6c-9.1-.2-17.4-2.8-24.4-8.8-5.9-5.1-9.6-11.6-10.8-19.3-1.8-11.3 1.3-21.3 8.1-30.2 7.3-9.6 16.1-14.6 28-16.7 10.2-1.8 19.8-.8 28.5 5.1 7.9 5.4 12.8 12.7 14.1 22.3 1.7 13.5-2.2 24.5-11.5 33.9-6.6 6.7-14.7 10.9-24 12.8-2.7.5-5.4.6-8 .9zm23.8-40.4c-.1-1.3-.1-2.3-.3-3.3-1.8-9.9-10.9-15.5-20.4-13.3-9.3 2.1-15.3 8-17.5 17.4-1.8 7.8 2 15.7 9.2 18.9 5.5 2.4 11 2.1 16.3-.6 7.9-4.1 12.2-10.5 12.7-19.1z" fillRule="nonzero"/></g></g></svg>}/>
                        <Tab style={{ 
                            margin: 'auto'}} label="Python" {...a11yProps(2)} iconPosition='start' icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" role="img" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"></path></svg>}/>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} key={0}>
                        <a 
                        className='project_card' 
                        href='https://github.com/Reincarnationist/discordGame' 
                        target='_blank'
                        rel="noreferrer"
                        >
                            <span style={{flexGrow:1}}>
                                <h3 className='project_title'>I Doubt It</h3>
                                <p style={{fontStyle: 'italic', textAlign:'left'}}>A functional card game that can be played on a Discord text channel.</p>
                            </span>
                            <span className='project_type' style={{flex: 1, textAlign: 'right'}}>Gaming</span>
                        </a>
                            </Grid>
                        <Grid item xs={6} key={1}>
                        <a 
                        className='project_card' 
                        href='https://github.com/Reincarnationist/CSC309-Project' 
                        target='_blank'
                        rel="noreferrer"
                        >
                            <span style={{flexGrow:1}}>
                                <h3 className='project_title'>CSC309-Project</h3>
                                <p style={{fontStyle: 'italic', textAlign:'left'}}>A functional and user-friendly website done in "CSC 309 - Programming on the Web" (3rd-year course) with a team of four virtually using Express.js and React.js.</p>
                            </span>
                            <span className='project_type' style={{ flex: 1, textAlign: 'right', backgroundColor:'#feebc8'}}>Website</span>
                        </a>
                        </Grid>
                        <Grid item xs={6} key={2}>
                        <a 
                        className='project_card' 
                        href='https://github.com/Reincarnationist/steven-yuan.com' 
                        target='_blank'
                        rel="noreferrer"
                        >
                            <span style={{flexGrow:1}}>
                                <h3 className='project_title'>Personal Website</h3>
                                <p style={{fontStyle: 'italic', textAlign:'left'}}>A personal website made with React.js and Material-UI.</p>
                            </span>
                            <span className='project_type' style={{ flex: 1, textAlign: 'right', backgroundColor:'#feebc8'}}>Website</span>
                        </a>
                        </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} key={0}>
                        <a 
                        className='project_card' 
                        href='https://github.com/Reincarnationist/starry' 
                        target='_blank'
                        rel="noreferrer"
                        >
                            <span style={{flexGrow:1}}>
                                <h3 className='project_title'>Starry</h3>
                                <p style={{fontStyle: 'italic', textAlign:'left'}}>An echo server using Go to limit test the speed and stability of data transfer in a high-volume and high-concurrency scenario.</p>
                            </span>
                            <span className='project_type' style={{flex: 1, textAlign: 'right', color:'black', backgroundColor: '#c6f6d5'}}>Utility</span>
                        </a>
                            </Grid>
 
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Coming Soon.
                    </TabPanel>
                    </Box>
                </div>
        )
    
}

export default Projects