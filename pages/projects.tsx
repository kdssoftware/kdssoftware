import { NextPage } from "next"
import {projects} from "../public/data";

const Projects : NextPage= () => {


    return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {
            projects.map(project => (
                <div className="rounded-lg p-3 relative bg-amber-800 opacity-90 grid grid-flow-row grid-rows-1 auto-rows-max" key={project.title}>
                    <h2 className="text-2xl text-center font-bold uppercase text-sky-50 pb-4">{project.title}</h2>
                    {/* description */}
                    <div className="flex justify-center capitalize text-lg">
                        {project.description}
                    </div>
                    {/* technologies */}
                    <div className="flex flex-wrap justify-center text-lg py-2">
                        {project.technologies.map(tech => (
                            <span className="bg-amber-900 rounded-full px-2 mx-1 mt-1" key={tech}>{tech}</span>
                        ))}
                    </div>
                    <div className="flex justify-end absolute py-2 mt-1">
                    {
                        project.github? (
                            <a href={project.github} className="px-2">
                                <img className="w-[25px]" src="/github.svg" alt={project.github} />
                            </a>
                        ):""
                    }
                    {
                        
                        project.link? (
                            <a href={project.link} className="px-2">
                                <img className="w-[25px]" src="/link.svg" alt={project.link} />
                            </a>
                        ):""
                    }
                    </div>
                </div>
            ))
        }
    </div>)
}

export default Projects