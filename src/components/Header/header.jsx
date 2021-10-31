import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render(){
        return (
            <header className='header'>
                <span className='span_wrapper'>
                    <a href='/' style={{textDecoration: "none"}}>
                        <div className='home'>
                            <span style={{marginRight: "5px"}}>&gt;</span>
                            <span>$ cd ~/home/</span>
                            <span className="home_cursor"> </span>
                            </div>
                        </a>
                    <span className='header_right'>
                        <nav className='menu'>
                            <ul className='menu_inner'>
                                <li><a href="www.google.ca">About Me</a></li>
                                <li><a href="www.google.ca">Projects</a></li>
                                <li><a href="www.google.ca">Contact</a></li>
                                </ul>
                            </nav>
                            <a title="My cats' photos" href='/cats' className='cat'><FontAwesomeIcon icon={faCat} /></a>
                        
                        </span>
                </span>
                    
            </header>
            
        )
    }

}

export default Header