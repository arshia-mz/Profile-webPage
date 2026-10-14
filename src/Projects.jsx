import MainHeader from "./MainHeader";

import Project from '../Projects.json';
import ProjectItem from "./ProjectItem";

export default function Projects({...props})
{
    return<div className="projects" {...props}>
        <MainHeader title={'Projects'}/>
        <ul className="project-list">
            {Project.map((item) => (
                <ProjectItem key={item.id} data={item}/>
            ))}
        </ul>
    </div>
}