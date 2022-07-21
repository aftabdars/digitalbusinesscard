import React from 'react'
import twitterLogo from "../img/twitter.png"
import facebookLogo from "../img/facebook.png"
import instagramLogo from "../img/instagram.png"
import githubLogo from "../img/github.png"
import './css/Footer.css'

function Footer() {
    return (
        <footer id='footer'>
            <a href="https://twitter.com/raftpilot1" target="_blank"><img src={twitterLogo} /></a>
            <a href="https://www.facebook.com/raftpilot/" target="_blank"><img src={facebookLogo} /></a>
            <a href="https://www.instagram.com/raftpilotyt/" target="_blank"><img src={instagramLogo} /></a>
            <a href="https://github.com/aftabdars" target="_blank"><img src={githubLogo} /></a>
        </footer>
    )
}

export default Footer;