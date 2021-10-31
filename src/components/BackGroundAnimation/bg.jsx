import React from 'react'
import './style.css';


class BGA extends React.Component {
    render(){
        return (
            <div className='wrapper'>
                <div className="UpDownAnimation poly">
                    <svg viewBox="0 0 30 30" className="poly1"><polygon strokeWidth="1px" strokeLinejoin="round" strokeMiterlimit={10} points="14.921,2.27 28.667,25.5 1.175,25.5 " /></svg>
                    <svg viewBox="0 0 30 30" className="poly2"><polygon strokeLinejoin="round" strokeMiterlimit={10} points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 " /></svg>
                    <svg viewBox="0 0 30 30" className="poly3"><polygon strokeLinejoin="round" strokeMiterlimit={10} points="10,0  60,0  35,50" /></svg>           
                    </div>
                <div className="UpDownSlowAnimation poly">
                    <svg viewBox="0 0 30 30" className="poly4"><polygon strokeLinejoin="round" strokeMiterlimit={10} points="50,5   100,5  125,30  125,80 100,105 50,105  25,80  25, 30" /></svg>
                    <svg viewBox="0 0 30 30" className="poly5"><polygon strokeLinejoin="round" strokeMiterlimit={10} points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 " /></svg>
                    </div>
                <div className="UpDownWideAnimation poly">
                    <svg viewBox="0 0 30 30" className="poly6"><polygon strokeLinejoin="round" strokeMiterlimit={10} points="50,5   100,5  125,30  125,80 100,105 50,105  25,80  25, 30" /></svg>
                    <svg viewBox="0 0 30 30" className="poly7"><polygon strokeLinejoin="round" strokeMiterlimit={10} points="10,0  60,0  35,50 " /></svg>
                    </div>
            </div>
            
            
            )
    }

}

export default BGA