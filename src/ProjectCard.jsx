import React from "react"
import './css/project.css'

const ProjectCard = (props) => {
    let project = props.project
    return (
        <div key={project.id} className="pr-id">

            <div className="pr-card" style={{ minHeight: '150px' }} >
                <div className="pr-title">{project.name}
                <p className="prc-text">
                    {project.description}
                </p>
            <button className="pr-button">
                Link
            </button>
            </div>
            </div>
        </div>
    )
}

export default ProjectCard