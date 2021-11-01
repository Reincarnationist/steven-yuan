import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { Link} from "react-router-dom";
class Header extends React.Component {
    render(){
        return (
            <header className='header'>
                <span className='span_wrapper'>
                    
                    <Link to='/' style={{textDecoration: "none"}}>
                        <div className='home'>
                            <span style={{marginRight: "5px"}}>&gt;</span>
                            <span>$ cd ~/home/</span>
                            <span className="home_cursor"> </span>
                            </div>
                        </Link>
                        
                    <span className='header_right'>
                        <nav className='menu'>
                            <ul className='menu_inner'>
                                <li><Link to="/about">About Me</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                            <Link title="My cats' photos" to="/cats" className="cat"><FontAwesomeIcon icon={faCat} /></Link>
                    </span>
                    
                </span>
                    
            </header>
            
        )
    }

}

export default Header