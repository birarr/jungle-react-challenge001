import react from 'react';
import './styles.css';
import calendarIcon from '../../assets/calendarIcon.png';
import hapuLogoGray from '../../assets/hapuLogoGray.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';


function Footer() {
    return(
        <footer className="main-footer">
            <div className='footer-component'>
                <h1 className='become-nanny-h1'>Become a nanny share host today!</h1>
                <h1 className='become-nanny-h1-mobile'>Become a nanny share host</h1>
                <p className='footer-title'>Takes less than 5 minutes to get started</p>
                <button className='footer-button'><span className='button-itens'><img src={calendarIcon} alt=""/><p className="create-nanny">
                Create Your Nanny Share</p> <br/> <p className="take-less">
                    Takes less than 5 minutes</p></span></button>
                    <a className="nanny-shares-link" href="">Or browse local nanny-shares</a>
            </div>
            <div className='footer-last-div'>
                <div className='footer-nav-itens'>
                    <img className='hapu-logo-gray' src={hapuLogoGray} alt="hapu logo gray"/>
                    <nav className='footer-nav'>
                        <li className='create-your-nanny'>Create Your Nanny Share</li>
                        <li className='create-your-nanny-mobile'>Share your Nanny</li>
                        <li className='browse-nanny'>Browse Nanny Shares</li>
                        <li className='browse-nanny-mobile'>Browse Shares</li>
                        <li className='become-nanny'>Become a Nanny Share Host</li>
                        <li className='terms'>{"Terms & Privacy"}</li>
                    </nav>
                    <ul className='social-media'>
                        <a href="https://www.facebook.com"><img src={facebook} alt="facebook logo"></img></a>
                        <a href="https://www.twiter.com"><img src={twitter} alt="twitter logo"></img></a>
                        <a href="https://www.instagram.com"><img src={instagram} alt="instagram logo"></img></a>
                    </ul>
                </div>
                <div className='space'>
                <div className='space-bar'></div>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;