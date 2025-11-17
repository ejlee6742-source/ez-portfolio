import React from "react";
import {Link} from "react-router-dom";

const cardStyle={
    backgroundColor:"#fff",
    padding:"20px",
    textAlign:"center",
    marginBottom:"20px"
}

const linkStyle={
    color:"red",
    textDecoration:"none",
}

export default function ProjectCard(props) {
    const {project} = props;
    return(
        <div style={cardStyle}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} style={linkStyle}>View Details</Link>
        </div>
    )
}