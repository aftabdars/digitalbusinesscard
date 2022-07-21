import React from 'react'
import './css/Info.css'
import profilePhoto from '../img/Passport.jpg'
import emailIcon from '../img/email.png'
import linkedInIcon from '../img/linkedin.png'

function Info() {
    return (
        <div id="info-container">
            <img id="profile-photo" src={profilePhoto} alt="Profile"></img>
            <div id="name">
                <h1>Aftab Hussain</h1>
                <h2>Frontend Developer</h2>
                {/* <p>raftpilot.com</p> */}
            </div>
            <div id="contact-buttons-container">
                <a className='btn' href="mailto:pilotraft3@gmail.com" target="_blank">
                    <img className='icon' src={emailIcon} />
                    <p className='btn-text'>Email</p>
                </a>
                <a className='btn' id='linked-in' href="https://www.linkedin.com/in/aftab-hussain-113719ba/" target="_blank">
                    <img className='icon' src={linkedInIcon} />
                    <p className='btn-text'>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}

export default Info;