import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {
    return(
        <div>
        <Hero className="hp-hero pt-0" title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Carousel />
        </div>
    )
}

export default HomePage;