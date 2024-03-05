import React from 'react';
import { Link } from 'react-router-dom';

const Navabar = () => {
  return (
    <div className='Navbar'> 
      <header className="Nav1 bg-white z-2 bb b--black-20">
        <div></div>
        <div className="Nav2 pv3-ns ph1-ns bg-white">
          <div id="header" class="Nav3">skip to:
          <a aria-label="skip to content" className="NavAnchor" href="#main">content</a>
          <a aria-label="skip to package search" class="NavAnchor" href="#search">package search</a>
          <a aria-label="skip to sign in" className="NavAnchor" href="#Loginin">sign in</a>
          </div>
          <div className="Nav4 center mw9 border-box ph4-ns ph3 flex items-center">
            <span className="Nav5 pr3 dn dib-ns link lh-title dim b--white-30">🖤</span>
            <button tabindex="-1" className="Nav6 f6 fw4 link dn dib-ns tl dim mr4 nowrap">Neoplastic Plasma Medusa</button>
            <nav class="Nav7 db w-100 w-auto-ns truncate" aria-label="Product Navigation">
              <ul id="main-menu" className="NavUL" role="menu" aria-label="Nav Menu">
                <li role="none" className="dib"><a href="/products/pro" role="menuitem" className="NavA no-underline f6-ns f7 fw5 dim pr2 pl2" id="nav-pro-link">Pro</a></li>
                <li role="none"><a href="/products/teams" role="menuitem" className="NavA no-underline f6-ns f7 fw5 dim pr2 pl2" id="nav-teams-link">Teams</a></li>
                <li role="none" className="dib"><a href="/products" role="menuitem" className="NavA no-underline f6-ns f7 fw5 dim pr2 pl2" id="nav-pricing-link">Pricing</a></li>
                <li role="none" className="dib"><a href="https://docs.npmjs.com" role="menuitem" className="NavA no-underline f6-ns f7 fw5 dim pr2 pl2" id="nav-docs-link">Documentation</a></li>
                </ul>
                </nav>
                </div>
                </div>
                <div className="Nav8 bt b--black-10">
                  <div className="Nav9 center mw9 flex flex-wrap ph4-ns border-box">
                    <span className="Nav10">npm</span>
                    <div className="Nav11 mt3 db mr4-ns pb3 pb0-ns flex-auto 2-ns ph3 ph0-ns"><a href="/" aria-label="Npm"><svg viewBox="0 0 780 250" aria-hidden="true"><path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
                    </svg>
                    </a>
                    </div>
                    <div id="search" className="Nav12 relative flex-auto w-100 w-50-ns pv2-ns order-1-ns order-2">
                      <form id="search" method="GET" action="/search" className="Nav13 relative flex bg-transparent ph3 ph2 pv2 ph0-ns pv0-ns bt b--black-10 bn-ns">
                        <div className="Nav14 relative">
                          <div className="Nav15 nowrap flex">
                            <span className="Nav16 db fl pl3 pr1">
                              <svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g stroke="#777777" stroke-width="1.3">
                                    <g>
                                      <path d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"></path>
                                      <path d="M11.4913,11.4913 L17.8683,17.8683"></path>
                                      </g>
                                      </g>
                                      </g>
                                      </svg>
                                      </span>
                                      <input type="search" role="combobox" name="q" hotkeys="[object Object]" placeholder="Search packages" aria-label="Search packages" aria-controls="typeahead-list-199928" aria-expanded="false" aria-activedescendant="" inputref="[object Object]" autocomplete="off" className="Nav17 f5 fw3 black relative" value="" element="input"/>
                                      </div>
                                      </div>
                                      <button type="submit" className="Nav18 bn pv2 ph4 f6 white pointer bn pv2 ph4 f6 white pointer" aria-label="Search">Search</button>
                                      <input type="hidden" aria-hidden="true" name="csrftoken" value="10vrQ8zu6k3btbmuJEiZTRmJmKqwQjy6jA2uz9_KfZT"/>
                                      </form>
                                      </div>
                                      <div className="Nav19 ml3 mt2 mt0-ns pv2-ns flex-auto tr nowrap relative pointer fw6 order-1 order-2-ns">
                                        <div className="Nav20 flex items-center self-center pl3">
                                          <Link to="/SignUP" id="signup" className="Nav21 pa2 lh-copy br2 f6 no-underline fw5 black dim ph3 mr3">Sign Up</Link>
                                          <Link to="/Login" id="signin" className="Nav22 pa1 lh-copy br2 f6 no-underline fw5 black dim">Sign In</Link>
                                          </div>
                                          </div>
                                          </div>
                                          </div>
                                          </header>
    </div>
  );
}

export default Navabar;
