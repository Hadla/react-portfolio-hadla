import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {
  return (
    <div>
      <Hero className='hp-hero pt-0' title={props.title} subTitle={props.subTitle} text={props.text} />
      <Link className='nav-link' to='/projects'>
        Read more about my projects here
      </Link>

      <Carousel />
    </div>
  );
}

export default HomePage;
