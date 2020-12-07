import react from 'react';
import './styles.css';
import calendarIcon from '../../assets/calendarIcon.png';
import hapuLogoGray from '../../assets/hapuLogoGray.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';


function Footer() {
    return(
        <footer>
            <div id='footer-component'>
                <h1 id='become-nanny-h1'>Become a nanny share host today!</h1>
                <h1 id='become-nanny-h1-mobile'>Become a nanny share host</h1>
                <p id='footer-title'>Takes less than 5 minutes to get started</p>
                <button id='footer-button'><div id='button-itens'><img src={calendarIcon} alt=""/><p id="create-nanny">
                Create Your Nanny Share</p> <br/> <p id="take-less">
                    Takes less than 5 minutes</p></div></button>
                    <a href="">Or browse local nanny-shares</a>
            </div>
            <div id='footer-last-div'>
                <div id='footer-nav-itens'>
                    <img id='hapu-logo-gray' src={hapuLogoGray} alt="hapu logo gray"/>
                    <nav id='footer-nav'>
                        <li id='create-your-nanny'>Create Your Nanny Share</li>
                        <li id='create-your-nanny-mobile'>Share your Nanny</li>
                        <li id='browse-nanny'>Browse Nanny Shares</li>
                        <li id='browse-nanny-mobile'>Browse Shares</li>
                        <li id='become-nanny'>Become a Nanny Share Host</li>
                        <li id='terms'>{"Terms & Privacy"}</li>
                    </nav>
                    <ul id='social-media'>
                        <img src={facebook} alt="facebook logo"/>
                        <img src={twitter} alt="twitter logo"/>
                        <img src={instagram} alt="instagram logo"/>
                    </ul>
                </div>
                <div id='space'>
                <div id='space-bar'></div>
                </div>
            </div>
            <div id='footer-copyright'>
                <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;