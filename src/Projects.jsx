import MainHeader from "./MainHeader";

import Project from '../Projects.json';
import ProjectItem from "./ProjectItem";

export default function Projects()
{
    return<div className="projects">
        <MainHeader title={'Projects'}/>
        <ul className="project-list">
            {Project.map((item) => (
                <ProjectItem key={item.id} data={item}/>
            ))}
        </ul>
    </div>
}