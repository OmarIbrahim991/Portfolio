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
        <header>
          <a href="https://github.com/OmarIbrahim991/portfolio" target="_blank" rel="noopener noreferrer">
            <i id="logo-header" className="fas fa-code"></i>
          </a>
          <div className="nav">
            <a className="nav-item" href="#my-projects">projects</a>
            <a className="nav-item" href="#about-me">about</a>
          </div>
        </header>
        <main>
          <h2 id="my-projects" className="section-header">my projects</h2>
          <section className="projects">
            {PROJECTS.map(element => (
              <Project key={element.name} {...element} />
              ))
            }
          </section>
          <h2 id="about-me" className="section-header">about me</h2>
          <section className="about">
            <p className="about-desc">
              I am a self taught developer with very good skills in Front-end Development using React-JS and Back-end Development using Python.
            </p>
            <p className="about-desc">
              In addition to Javascript and Python, I am also comfortable with Java, C, and TypeScript.
            </p>
            <p className="about-desc">
              My skills include also Machine Learning & Data Visualization with Python, SQL & ORMs, and Micro-controllers(Embedded C only).
            </p>
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