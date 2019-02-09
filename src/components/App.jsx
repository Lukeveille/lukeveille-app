import React, { Component } from 'react';
import { Nav } from './Nav'
import { Skills } from './Skills'
import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Skills />
          <hr />
          <About />
          <hr />
          <Projects />
        </main>
        <Contact />
      </div>
    );
  }
}

export default App;
