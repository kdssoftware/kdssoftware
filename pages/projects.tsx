import { NextPage } from "next"
import {projects} from "../public/data";

const Projects : NextPage= () => {


    return (<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
            projects.map(project => (
                <div className="relative grid grid-flow-row grid-rows-1 p-3 rounded-lg bg-red-800 opacity-90 auto-rows-max" key={project.title}>
                    <h2 className="pb-4 text-2xl font-bold text-center uppercase text-sky-50">{project.title}</h2>
                    {/* description */}
                    <div className="flex justify-center text-lg capitalize">
                        {project.description}
                    </div>
                    {/* technologies */}
                    <div className="flex flex-wrap justify-center py-2 text-lg">
                        {project.technologies.map(tech => (
                            <span className="px-2 mx-1 mt-1 rounded-full bg-red-900" key={tech}>{tech}</span>
                        ))}
                    </div>
                    <div className="absolute flex justify-end py-2 mt-1">
                    {
                        project.github? (
                            <a href={project.github} className="px-2">
                                <img className="w-[25px]" src="/icon/github.svg" alt={project.github} />
                            </a>
                        ):""
                    }
                    {
                        project.link? (
                            <a href={project.link} className="px-2">
                                <img className="w-[25px]" src="/icon/link.svg" alt={project.link} />
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