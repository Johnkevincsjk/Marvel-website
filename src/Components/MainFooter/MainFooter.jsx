import React from 'react'
import '../MainFooter/MainFooter.css'

export default function MainFooter() {
    return (
        <div className='container-fluid footer-main'>
            <div className="footer-sec1">
                <div className="footer-sec1-img">
                    <img src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg" alt="" />
                </div>
                <div className="footer-sec1-content">
                    <h4>Marvel Insider</h4>
                    <h2>Watch, Earn, Redeem!​</h2>
                    <p>Get rewarded for doing what you already do as a fan.​</p>
                    <p>Terms and Conditions Apply.</p>
                </div>

            </div>
            <div className="footer-sec2">
                <div className="footer-sec3">
                    <div className="footer-phase1">
                        <img src="https://e7.pngegg.com/pngimages/843/872/png-clipart-iron-man-captain-america-logo-marvel-cinematic-universe-avengers-avengers-avengers-logo-text-superhero.png" alt="" />

                    </div>
                    <div className="footer-phase2">
                        <ul className='footer-ul'>
                            <li className='footer-li'><a className='footer-a' href="https://www.marvel.com/corporate/about">About Marvel</a></li>
                            <li className='footer-li'><a className='footer-a' href="https://help.marvel.com/hc/en-us">Help/FAQs</a></li>
                            <li className='footer-li'><a className='footer-a' href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]">Careers</a></li>
                            <li className='footer-li'><a className='footer-a' href="https://www.marvel.com/corporate/interns">Internships</a></li>
                        </ul>
                    </div>
                    <div className="footer-phase3">
                        <ul className='footer-ul'>
                            <li className='footer-li'><a className='footer-a' href="https://www.marvel.com/corporate/advertising">Advertising</a></li>
                            <li className='footer-li'><a className='footer-a' href="https://www.hotstar.com/in/home?ref=%2Fin%3Fcid%3DDTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA">Disney+</a></li>
                            <li className='footer-li'><a className='footer-a' href="https://www.marvelhq.com/">Marvelhq.com</a></li>
                            <li className='footer-li'><a className='footer-a' href="https://www.marvel.com/redeem">Redeem Digital Comics</a></li>
                        </ul>

                    </div>
                    <div className="footer-phase4">
                        <div className="footer-phase4-content">
                            <img src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="" />
                            <div className='footer-phase4-description'>
                                <h4>Marvel Insider</h4>
                                <p>Get Rewarded for Being a Marvel Fan</p>
                            </div>
                        </div>
                        <div className="footer-phase4-content">
                            <img src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="" />
                            <div className='footer-phase4-description'>
                                <h4>Marvel Unlimited</h4>
                                <p>Access Over 30,000+ Digital Comics</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-sec4">
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Addendum to the Global Privacy Policy</li>
                        <li>Interest-Based Ads</li>
                        <li>License Agreement</li>
                        <li>@2024 marvel</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
