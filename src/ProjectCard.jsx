import React from "react"
import './css/project.css'

const ProjectCard = (props) => {
    let project = props.project
    return (
        <div key={project.id} className="pr-id">
        <div className="pr-card" style={{ minHeight: '150px' }} >
            <a href={project.website}><div className="prc-title">{project.name}</div></a>
                <p className="prc-text">
                    {project.description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard