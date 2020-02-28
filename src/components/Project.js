import React from 'react'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {techs: this.props.techs}
    }

    get_techs = (arr) => {
        let results = []
        arr.forEach(element => {
            switch(element) {
                case 'html':
                    results.push(
                        <a key={element} href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-html5" style={{color: '#ff922d'}}></i>
                        </a>
                    )
                    break
                case 'css':
                    results.push(
                        <a key={element} href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-css3" style={{color: '#0123ef'}}></i>
                        </a>
                    )
                    break
                case 'sass':
                    results.push(
                        <a key={element} href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-sass" style={{color: '#ef00fe'}}></i>
                        </a>
                    )
                    break
                case 'js':
                    results.push(
                        <a key={element} href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-js" style={{color: '#edeb21'}}></i>
                        </a>
                    )
                    break
                case 'npm':
                    results.push(
                        <a key={element} href="https://en.wikipedia.org/wiki/Npm_(software)" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-npm" style={{color: '#ea3120'}}></i>
                        </a>
                    )
                    break
                case 'react':
                    results.push(
                        <a key={element} href="https://en.wikipedia.org/wiki/React_(web_framework)" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-react" style={{color: '#3354cd'}}></i>
                        </a>
                    )
                    break
                default: results.push(<i className="fas fa-code"></i>)
            }
        })
        return results
    }

    render() {
        return (
            <div className="project-item">
                <img className="project-img" src={this.props.img ? require("../img/" + this.props.img) : require("../img/logo512.png")} alt="" />
                <h3 className="project-header">{this.props.name}</h3>
                <p className="project-desc">{this.props.description}</p>
                <div className="project-technologies">
                    {this.state.techs instanceof Array ? this.get_techs(this.state.techs) : null}
                </div>
                <div className="project-btns">
                    <a className="project-btn" href={this.props.link} target="_blank" rel="noopener noreferrer">run</a>
                    <a className="project-btn" href={this.props.source} target="_blank" rel="noopener noreferrer">source code</a>
                </div>
            </div>
        )
    }
}