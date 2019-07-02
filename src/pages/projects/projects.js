import React from 'react';
import './projects.css';
import {useSpring, animated} from 'react-spring'

function Projects() {

  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className = 'projectmain'>
        <section>
          Here is all my projects currently working on. I hope you enjoy!
        </section>
        <section>
         <animated.div className = 'box' style = {props}>
            <span className = 'top'>
                Image in place of shop website
            </span>
            <span>
              <a href = 'https://github.com/pupper-bot/' className = 'bottom'>Github</a>
            </span>
         </animated.div>
          <animated.div className = 'box' style = {props}>
          <span className = 'top'>
              Image in place of THIS website :^)
          </span>
          <span>
            <a href = 'https://github.com/pupper-bot/' className = 'bottom'>Github</a>
          </span>
          </animated.div>
        </section>


    </div>
  );
}

export default Projects;