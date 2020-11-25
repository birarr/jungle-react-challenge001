import React from 'react';
import './styles.css';
import hapuLogoGreen from '../../assets/hapuLogoGreen.png';

function Header() {
    return(
        <header>
        <nav className='header-menu'>
           <ul id='header-nav-left'>
               <img id='hapu-green-logo'src={hapuLogoGreen} alt="hapu green logo"/>
               <li><a href=""></a>Create Your Nanny Share</li>
               <li><a href=""></a>Browse Nanny Shares</li>
               <li><a href=""></a>Our Story</li>
           </ul> 
           <ul id='header-nav-right'>
               <button id="button-become-nanny">Become A Nanny Share Host</button>
               <li id="signin"><a href="">Sign In</a></li>
           </ul>
        </nav>
        <div id='header-content'>
            <h1>Become a nanny share host</h1>
            <p>Reduce costs, increase incomes and change childcare forever</p>
        </div>
    </header>
    )
}

export default Header;