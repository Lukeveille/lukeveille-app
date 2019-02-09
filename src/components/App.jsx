import React, { Component } from 'react';
import { Nav } from './Nav'
import { Skills } from './Skills'
import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectModal: 0,
    }
    this.showProjectModal = this.showProjectModal.bind(this);
  }

  showProjectModal(project) {
    this.setState(prevState => ({ projectModal: prevState.projectModal === 0? project : 0 }))
  }
  
  componentDidMount() {
    document.addEventListener('keyup', (e) => { if (e.keyCode === 27) { this.showProjectModal(0); }});
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Skills />
          <hr />
          <About />
          <hr />
          <Projects
            projectModal={this.state.projectModal}
            showProjectModal={this.showProjectModal}
          />
        </main>
        <Contact />
      </div>
    );
  }
}

export default App;
