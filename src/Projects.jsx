import React, { Component } from "react"
import './css/project.css'
import axios from "axios"

class Projects extends Component {
	constructor() {
    super();
    this.state = {
        projects: [ ]
    };
	}

	componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
	}

	render() {
		const projects = this.state.projects
		let projectsList 

		if (projects.length > 0) {
			projectsList = projects.map(project => {
				return (
					<div key={project.id}>
						<div className="pr-title">
							{project.name}
						</div>
					</div>
				)
			})
		}

		return (
			<div>
				<h1 className="pr-title">My Projects</h1>
					<p className="pr-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia temporibus, suscipit vero, tempore voluptatem assumenda 
            odio ipsam dignissimos exercitationem dicta possimus, quod nemo 
            aliquid minima tempora itaque labore porro rem. Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Eius eaque eligendi natus 
            corrupti quibusdam voluptate dolorem autem magnam. Possimus est 
            quia cumque eos quae earum a! Inventore soluta iste laborum?</p>
							{projectsList}
			</div>
		)
	}
}

export default Projects