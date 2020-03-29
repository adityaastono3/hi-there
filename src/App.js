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
              <p className="header-playfair">
                Hi there,
              </p>
              <p className="header-playfair">
                Yennhi.
              </p>
            </div>
          </div>
          <div
            className="happy-moments animated fadeInDown slow delay-4s"
          >
            Happy moments below.
          </div>
        </div>
        <div className="section">
          <div className="box-champagne">
            <p className="mini-header-playfair" style={{ textAlign: 'right', paddingTop: '50px' }}>I WISH SPRING WOULD END SOON</p>
            <div className="story-box">
              <p style={{ fontSize: '14px' }}>
                Never in my wildest dream that this would came out from my mind.<br />
                <br />
                The moment when the flowers bloom,<br />
                The moment when puffy jackets are finally shelved,<br />
                The moment when the urge of cleaning emerges,<br />
                The moment when...<br />
                <br />
                Ah whatever, i'm not trying to be poetic here.<br />
                It's just - it's when all the good things come to place!<br />
                It's a joyful season!<br />
                <br />
                But - we know we are not getting it this year.<br />
                <br />
                I do have to admit that i had something planned for you, since like - forever.<br />
                But of course the inevitable did not allow me to do so.<br />
                So i have something else in mind. <br />
                <br />
                Why don't you scroll down, and have a look - <span style={{ textDecoration: 'underline' }}>line by line</span>?
              </p>
            </div>
            <div>
              <span className="chevron bottom flicker-5s"/>
            </div>
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
              <p style={{ margin: '0' }}>When the time comes</p>
              <p style={{ margin: '0' }}>When we have reflected on ourselves</p>
              <p style={{ margin: '0' }}>When we get to meet the ones we love</p>
              <span>I want to take you </span>
              <a
                href="https://www.concertgebouw.nl/nl/page/43079/van=2020-06-03"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>
              <p>Will you let me?</p>
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