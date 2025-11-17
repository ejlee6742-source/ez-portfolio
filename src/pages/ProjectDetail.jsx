import React from "react"
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const detailStyle={
    padding:"20px",
    border:"1px solid #333",
    display:"block",
    textAlign:"center"
}
export default function ProjectDetail (){
    const {id} = useParams();
    const [project, setProject] = React.useState({
        id:"",
        name:"",
        desciption:""
    });

    async function loadJsonData() {
        try {
            const res = await fetch("/data/projects.json");
            const data = await res.json();
            if(data){
                const selectedProject = data.find((p) => p.id === Number(id))
                setProject(selectedProject)
            }
        } catch(error){
            console.error("Failed to load Json Data", error);
        }
    }

    React.useEffect(() => {
        loadJsonData();
    }, [])

    return(
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.link} target="_" rel="noopener noreferrer">Visit Project</a>
            <Link to="/projects" style={detailStyle}>Back</Link>
        </div>
    )
}