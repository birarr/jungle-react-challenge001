import React from 'react';
import './styles.css'
import hapuLogoGreen from '../../assets/hapuLogoGreen.png';
import parentsLogo from '../../assets/parentsProfile.png';
import nannysLogo from '../../assets/nannysProfile.png';


function Landing() {
    return(
        <div>
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
                <div id='backgroundImage'>
                    <h1>Become a nanny share</h1>
                    <p>Reduce costs, increase incomes and change childcare forever</p>
                </div>
            </header>

            <section>
                <div className="content">
                    <div id='parents-content'>
                        <img src={parentsLogo} alt=""/>
                        <h1>Parents</h1>
                        <p>“I have a fantastic home, a fantastic <br/> nanny and I want to reduce my costs!”</p>
                        <p>Your home and a great relationship with your nanny <br/>
                         is an asset you can leverage to significantly reduce <br/>
                          your childcare costs. All the while increasing your <br/>
                           nannies pay. </p>
                    </div>
                    <div id='nannys-content'>
                        <img src={nannysLogo} alt=""/>
                        <h1>Nannies</h1>
                        <p>“I work for a great family in a great <br/> home and I want to increase my <br/> income and control!”</p>
                        <p>Now you can partner with your existing family and <br/>
                          employer to reduce their costs and increase your <br/>
                          pay. All the while gaining a new level of control that <br/>
                          ensures any share arrangement is as beneficial to <br/>
                          you as to the families involved. You start the share, <br/> you run the share.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing;