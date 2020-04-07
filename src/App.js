import React, { Component } from 'react';
import './App.css';

import Iframe from './components/iframe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section">
          <div style={{ paddingTop: '10px', paddingRight: '20px', textAlign: 'right' }}>
            <div className="dots aaaa-yellow"/>
            <div className="dots aaaa-red"/>
            <div className="dots aaaa-blue"/>
            <div className="dots aaaa-black"/>
          </div>
          <div className="welcome">
            <div className="animated fadeInDown slow delay-2s">
              <p className="mini-header-playfair">
                Hi there,
              </p>
              <p className="mini-header-playfair">
                Yennhi.
              </p>
            </div>
            <div className="animated fadeInDown slow delay-4s">
              <p className="story-unfolds flicker-8s">Story unfolds below.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="box-champagne">
            {/*<p className="mini-header-playfair" style={{ textAlign: 'right', paddingTop: '50px' }}>I WISH SPRING WOULD END SOON</p>*/}
            {/*<p className="mini-header-playfair" style={{ textAlign: 'right', paddingTop: '20px' }}>NEVER HAVE I THOUGHT THIS WOULD BE</p>*/}
            <nav className="menu">
              <div className="menu__item">
                <a className="menu__item-link">Showreel</a>
                <div className="marquee">
                  <div className="marquee__inner" aria-hidden="true">
                    <span>Showreel</span>
                    <span>Showreel</span>
                    <span>Showreel</span>
                    <span>Showreel</span>
                  </div>
                </div>
              </div>
              <div className="menu__item">
                <a className="menu__item-link">Case Studies</a>
                <div className="marquee">
                  <div className="marquee__inner" aria-hidden="true">
                    <span>Case Studies</span>
                    <span>Case Studies</span>
                    <span>Case Studies</span>
                    <span>Case Studies</span>
                  </div>
                </div>
              </div>
              <div className="menu__item">
                <a className="menu__item-link">Experiments</a>
                <div className="marquee">
                  <div className="marquee__inner" aria-hidden="true">
                    <span>Experiments</span>
                    <span>Experiments</span>
                    <span>Experiments</span>
                    <span>Experiments</span>
                  </div>
                </div>
              </div>
              <div className="menu__item">
                <a className="menu__item-link">Our Crew</a>
                <div className="marquee">
                  <div className="marquee__inner" aria-hidden="true">
                    <span>The Crew</span>
                    <span>The Crew</span>
                    <span>The Crew</span>
                    <span>The Crew</span>
                  </div>
                </div>
              </div>
              <div className="menu__item">
                <a className="menu__item-link">Contact</a>
                <div className="marquee">
                  <div className="marquee__inner" aria-hidden="true">
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="section">
          <div className="playlist">
            <p className="header-playfair flicker-8s" style={{ textAlign: 'right', paddingRight: '10px' }}>MOMENTS</p>
            <p className="header-playfair flicker-5s" style={{ textAlign: 'left', paddingLeft: '10px', marginBottom: '10px' }}>LASTING</p>
            <Iframe
              className="border-gold"
              src="https://open.spotify.com/embed/playlist/5NEtTRvgiNXXTmvriVy66F"
              width="300"
              height="380"
            />
            <p className="header-playfair flicker-8s" style={{ textAlign: 'left', paddingLeft: '10px' }}>HAPPINESS</p>
            <p className="header-playfair flicker-5s" style={{ textAlign: 'right', paddingRight: '10px' }}>ETERNAL</p>
          </div>
        </div>
        <div className="section">
          <div className="invite-circle">
            <div className="wave" />
            <div className="circle-text">
              <p style={{ margin: '0' }}>Dear the blazing sun,</p>
              <p style={{ margin: '0' }}>Dear the blooming wild,</p>
              <p style={{ margin: '0' }}>Dear the soothing melody,</p>
              <span>I want to take Yennhi </span>
              <a
                className="flicker-5s"
                href="https://www.concertgebouw.nl/nl/page/43079/van=2020-06-03"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              <span> with me.</span>
              <p>Can you make it a reality?</p>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '10px', paddingLeft: '20px', textAlign: 'left' }}>
            <div className="dots aaaa-yellow"/>
            <div className="dots aaaa-red"/>
            <div className="dots aaaa-blue"/>
            <div className="dots aaaa-black"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;