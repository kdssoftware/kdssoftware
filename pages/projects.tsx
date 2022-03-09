import { NextPage } from "next"
import {projects} from "../public/data";

const Projects : NextPage= () => {


    return (<div className="grid mx-10 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 fixed top-14 md:top-32  mt-12 left-0 overflow-y-auto bottom-1 md:bottom-12" >
        {
            projects.map(project => (
                <div className="relative grid grid-flow-row grid-rows-3 p-3 rounded-lg bg-yellow-600 opacity-90 " key={project.title}>
                    <h2 className="pb-4 text-2xl font-extrabold text-center uppercase text-sky-50">{project.title}</h2>
                    {/* description */}
                    <div className="flex justify-start text-lg capitalize flex-row row-span-1">
                        {project.description}
                    </div>
                    {/* technologies */}
                    <div className="flex flex-wrap justify-center py-2 text-lg">
                        {project.technologies.map(tech => (
                            <span className="px-2 mx-1 mt-1 rounded-full max-h-7 bg-yellow-700" key={tech}>{tech}</span>
                        ))}
                    </div>
                    <div className="absolute flex justify-end py-2 my-1">
                    {
                        project.github? (
                            <a href={project.github} className="px-2">
                                <img className="w-[25px] hover:scale-110 transition-transform ease-in-out duration-200 " src="/icon/github.svg" alt={project.github} />
                            </a>
                        ):""
                    }
                    {
                        project.link? (
                            <a href={project.link} className="px-2">
                                <img className="w-[25px] hover:scale-110 transition-transform ease-in-out duration-200" src="/icon/link.svg" alt={project.link} />
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