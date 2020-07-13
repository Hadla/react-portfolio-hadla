import React from 'react';

import ProjectsInfo from '../components/ProjectsInfo';
import Hero from '../components/Hero';
import mindlerImage from '../images/mindler.jpg';
import seraviImage from '../images/seravi.jpg';

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project1: {
        title: 'Mindler',
        subTitle: 'Psychologist online',
        text: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.',
      },
      project2: {
        title: 'Seravi',
        subTitle: 'Informational platform ',
        text: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.',
      },
      project3: {
        title: 'Jessica Hansén',
        subTitle: 'Portfolio',
        text: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum.',
      },
    };
  }
  render(props) {
    return (
      <div>
        <Hero subTitle={this.props.subTitle} className='font-weight-light' />
        <p>Hi, this is my project specifics.</p>
      </div>
    );
  }
}

export default ProjectsPage;
