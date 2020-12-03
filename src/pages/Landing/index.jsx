import React, { useState } from 'react';
import './styles.css'
import parentsLogo from '../../assets/parentsProfile.png';
import nannysLogo from '../../assets/nannysProfile.png';
import prices from '../../assets/prices.png';


function Landing() {

    const [isNanniesButtonPressed, setIsNanniesButtonPressed] = useState(true)
    const [isParentsButtonPressed, setIsParentsButtonPressed] = useState(false)

const handleNanniesButtonClick = () => {
  setIsNanniesButtonPressed(true)
  setIsParentsButtonPressed(false)
}
const handleParentsButtonClick = () => {
    setIsNanniesButtonPressed(false)
    setIsParentsButtonPressed(true)
}


    return(
        <div id='body-content'>
            <section id='first-content'>
                <div className="content">
                    <div id='parents-content'>
                        <img id='parents-logo' src={parentsLogo} alt="parents profile"/>
                        <h1>Parents</h1>
                        <h2>“I have a fantastic home, a fantastic nanny and I want to reduce my costs!”</h2>
                        <p id='parents-content-p'>Your home and a great relationship with your nanny
                         is an asset you can leverage to significantly reduce
                          your childcare costs. All the while increasing your
                           nannies pay. </p>
                           <div id='create-nanny'>
                                <button><p id='create'>Create Your Nanny Share Today</p> <p id='take'>Takes less than 5 minutes</p></button>
                                <div>
                                <ul id='create-nanny-benefits'>
                                    <li>Set the rates in partnership with your nanny</li>
                                    <li id='be-found'>Be found by local families on the Hapu map</li>
                                    <li id='be-found-mobile'>Be found by local families on the Hapu</li>
                                    <li>Easily connect and chat with new sharers</li>
                                    <li>Protect your incomings with 2 weeks notice for cancellations</li>
                                    <li>Process late fees at the click of a button</li>
                                </ul>
                                </div>
                           </div>
                    </div>
                    <div id='nannys-content'>
                        <img src={nannysLogo} alt=""/>
                        <h1>Nannies</h1>
                        <h2>“I work for a great family in a great  home and I want to increase my  income and control!”</h2>
                        <p id='nannys-content-p'>Now you can partner with your existing family and 
                          employer to reduce their costs and increase your 
                          pay. All the while gaining a new level of control that 
                          ensures any share arrangement is as beneficial to 
                          you as to the families involved. You start the share,  you run the share.</p>
                          <div id='create-nanny'>
                                <button><p id='create'>Create Your Nanny Share Today</p> <p id='take'>Takes less than 5 minutes</p></button>
                                <div>
                                <ul id='create-nanny-benefits'>
                                    <li>You set up and manage the nanny share on behalf of your host family</li>
                                    <li>You set the rates</li>
                                    <li>Protect your income with 2 weeks notice for cancellations</li>
                                    <li>Process late fees at the click of a button</li>
                                </ul>
                                </div>
                           </div>
                    </div>
                </div>
                <div id='space-bar'></div>
            </section>
            <section id='second-content'>
                <div id='local-families'>
                    <h1>Local families need you!</h1>
                    <p>Families in your area need childcare. There simply is not enough to go around. They need it locally and at 
                        a rate they can afford. In short, they need you. And you need to reduce costs or if a nanny, increase your pay.
                         It’s a win, win, win! But first families need to find you. Go on, reach out to your neighbourhood today with a
                          Hapu nanny share. </p>
                          <a href="">Create your nanny share today</a>
                          <img src={prices} alt="prices table and neighborhood map"/>
                </div>
                <div id='space-bar'></div>
            </section>
            <section id='third-content'>
                <div id='how-works'>
                    <h1>How it works: Some tips and insights</h1>
                    <div id='buttons'>
                        <button id={isParentsButtonPressed ? 'inactive' : 'active'} onClick={handleParentsButtonClick}>
                            <p>Parents</p></button>
                        <button id={isNanniesButtonPressed ? 'inactive' : 'active'} onClick={handleNanniesButtonClick}><p>Nannies</p></button>
                    </div>
                    <div id='how-works-content'>
                        <div id='how-works-subject'>
                            <div>
                        <h2>Setting up your nanny share</h2>
                        <p id='your-weekly'> Discuss with your nanny any increase in pay, your own reduction in costs and the number of children you might take on. 
                            Hapu makes it easy to add more than one child, though you and your nanny may wish to limit to one. We give you the option
                             of open places beyond one as you may find the perfect family who have two little ones. This means a greater reduction in
                              costs for you and a higher increase in pay for your nanny.</p>
                              </div>
                              <div id='verification'>
                              <h2>Setting an hourly rate</h2>
                                      <p>You set the rate you want. And this may be more than half. It’s up to you to determine the amount you and your 
                                          nanny want to see at the end of the week. You can take into account existing costs you’ve already incurred in 
                                          employing your nanny, your home as the location and so on. Do what works for you and your nanny. Once set Hapu 
                                          automatically calculates the weekly cost to be paid. You can also use our automated shared rates if you are open
                                           to taking on more than one additional child. Shared rates makes it easy to split costs.</p>
                                           </div>
                                           <div id='your-weekly'>
                              <h2>Your weekly total and receiving funds </h2>
                              <p>Your days are set as the days you’re employing your nanny. Hapu doesn’t work off a calendar and we don’t want to
                                   complicate things as you’re not running a business. You simply set the days that you currently employ your nanny.
                                    Setting your days combines with your hourly rate(s) and the number of hours you set to calculate the total cost per
                                     week for sharers. You enter your bank account as the receiver of funds and pay your nanny at the end of the week as
                                      you currently do.</p>
                                      </div>
                                      <div id='verification'>
                                      <h2>Verification and qualifications</h2>
                                           <p>Hapu is essentially a parent to parent app with our goal to connect families and provide tools to manage payments
                                                and attendance for nanny share. In doing so we allow parents to perform their own due diligence in verifying 
                                                qualifications and references. You must present to any sharing parents your nanny’s Working With Children Check 
                                                (WWCC) and you can select in your share to present any educational qualifications, first aid and references.</p>
                                                </div>
                                      </div>
                                      {/*<div id='how-works-right'> */}
                                     
                                           
                                               {/* </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing;