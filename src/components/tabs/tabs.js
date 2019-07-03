import React from 'react';
import './tabs.css';
import {useSpring, animated} from 'react-spring'

// Use .map() to make multiple links, store in Graphcool as an easy alternative.
// Or make an array of objects containing everything to be easy. 

function Tabs() {

    const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className = 'main'>
      <animated.section style = {props}>
        <div className = 'sidebox'>
          <a href = 'https://github.com/pupper-bot' className = 'minibox' >
            <div className = 'icon'>
                icon
            </div>

             <div className = 'link'>
                Github
            </div>
          </a>
        </div>
      </animated.section>
    </div>
  );
}

export default Tabs;