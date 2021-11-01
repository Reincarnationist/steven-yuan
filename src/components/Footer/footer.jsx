import React from 'react'
import './style.css';
import logo from '../../logo.svg'

class Footer extends React.Component {
    render(){
        return (
            <footer className='footer'>
                <div className='footer_child'>
                    <div className='footer_content'>
                        <span>© 2021</span>
                        <span className='footer_dot'>•</span>
                        <span><a className='link' href="/">Ruizhe(Steven) Yuan</a></span>
                        <span className='footer_dot'>•</span>
                        <span><a 
                                className='link'
                                href="https://creativecommons.org/licenses/by-nc/4.0/" 
                                target="_blank" 
                                rel="noreferrer">CC BY-NC 4.0</a></span>
                    </div>
                    </div>
                    <div className='footer_child'>
                        <div className='footer_content'>
                            <span>Built with: </span>
                            <a
                                style={{color:"#61dafb"}}
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                title='React.js'>
                                <img src={logo} className="App-logo" alt="logo" /></a>
                        </div>
                    </div>
                </footer>
        )
    }
}


export default Footer