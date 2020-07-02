import React from 'react';

import Hero from '../components/Hero';
import DownloadButton from '../components/DownloadButton';
import Content from '../components/Content';
import Cv from '../assets/CV.pdf'

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <div className="about-me">
        <p>Hello, my name is Hadla. I have a background in Finance and currently in Software Development as a </p>
        <p>Full Stack JavaScript Developer. I am really passionated about front end development.</p>
        <p>I am experienced in JavaScript, React JS, Express JS, Node JS, CSS, HTML, SASS, Material UI and more.</p>
        <p>I am detail focused, logical, analytical and strategic thinker who thrives for problemsolving.</p>
        <p>Highly collaborative with a history of successfully managing projects independently and within teams.</p>
        <p>I have excellent organisational skills and am constantly eager to learn.</p>
        <br/>
        <p>You can download my CV here: <a href={Cv} download='CV Hadla Bergman.pdf' ><DownloadButton /></a></p>
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;
