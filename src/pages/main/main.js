import React from 'react';
import './main.css';
import {useSpring, animated} from 'react-spring'

import Tabs from './../../components/tabs/tabs'


function Header() {

    const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className = 'main'>
        <animated.section style = {props}>
            <div className = 'tab'>
                {/* Will eventaully use map to make multiple links. */}
                <Tabs />
            </div>
            <span className = 'mainbox'>
                <div className = 'halfbox'>
                    <span className = 'image'>
                        Icon
                    </span>
                    <span className = 'title' >
                         Pupperbot
                    </span>
                </div>
                <div className = 'halfbox'>
                    <p>
                    Full Stack Web Developer.
                    Half doggo half bot.
                    The intention of this website is to have a 'home' base of sorts for all my various react based websites.
                    Take a good look around! 
                    </p>
                </div>
            </span>
        </animated.section>
    </div>
  );
}

export default Header;