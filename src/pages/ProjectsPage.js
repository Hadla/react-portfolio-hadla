import React from 'react';


class ProjectsPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        title: 'Hadla Bergman',
        headerLinks: [
          { title: 'Home', path: '/' },
          { title: 'About', path: '/about' },
          { title: 'Contact', path: '/contact' }
        ],
        home: {
          title: 'Keep coding',
          subTitle: 'My Projects 2020',
          text: 'Check out my projects below'
        },
        about: {
          title: 'About me'
        },
        contact: {
          title: 'Let\'s talk!'
        }
      }
    }

    render() {
        return(
            <div>
                <p>Hi, this is my project specifics.</p>
            </div>
        );
    }


   
}

export default ProjectsPage;