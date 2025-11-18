import {useState, useEffect} from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects(){

    const [projects, setProjects] = useState([]);
    
    async function loadJsonData() {
        try {
            const res = await fetch(import.meta.env.BASE_URL + "data/projects.json");
            const data = await res.json();
            setProjects(data);
        } catch(error){
            console.error("Failed to load Json Data", error);
        }
    }

    useEffect(() => {
        loadJsonData();
    }, []);

    return(
        <div>
            <h1>Projects</h1>
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}