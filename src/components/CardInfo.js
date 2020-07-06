import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';
import ProjectsPage from '../pages/ProjectsPage';

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className='p-card-info' style={style}>
      <p className='p-card-title'>{props.title}</p>
      <p className='p-card-sub-title'>{props.subTitle}</p>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        View
      </a>
      <Link className="nav-link" to="/projects">Read more</Link>
      <Route path="/projects" exact render={ <ProjectsPage />}/>
    </animated.div>
  );
}

export default CardInfo;