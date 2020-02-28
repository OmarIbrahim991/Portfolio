import React from 'react'
import Project from './components/Project'
import PROJECTS from './raw'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mode: "light"}
  }
  render() {
    return (
      <React.Fragment>
        <header></header>
        <main>
          <h2 className="section-header">my projects</h2>
          <section id="myprojects" className="projects">
            {PROJECTS.map(element => (
              <Project key={element.name} {...element} />
              ))
            }
          </section>
        </main>
        <footer>
          <div id="socials">
            <a href="mailto:omar.ibrahim.991@gmail.com"><i className="fas fa-envelope-square" style={{color: '#e01'}}></i></a>
            <a href="https://www.linkedin.com/in/omar-ibrahim-423b32137 "><i className="fab fa-linkedin" style={{color: '#0123ef'}}></i></a>
            <a href="https://github.com/OmarIbrahim991"><i className="fab fa-github" style={{color: '#012'}}></i></a>
          </div>
          <p className="footer-text">&copy; {new Date().getFullYear()}</p>
        </footer>
      </React.Fragment>
    )
  }
}