import React from 'react';
import './main.css';

function Header() {
  return (
    <div className = 'main'>
        <section>
            <span className = 'mainbox'>
                <div className = 'halfbox'>
                    <span className = 'image' />
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
        </section>
    </div>
  );
}

export default Header;