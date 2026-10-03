export default function ProjectItem({data}){
    return<li className="project-item">
        <a href={data.link}>
            <h3>{data.name}</h3>
        </a>
            <p>{data.description}</p>
    </li>
}