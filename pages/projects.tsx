import { NextPage } from 'next';
import { projects } from '../public/data';

const Projects: NextPage = () => {
  return (
    <div
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-dracula-foreground"
    >
      {projects.map((project) => (
        <div
          className="flex justify-center h-full "
          key={project.title}
        >
          <div
            className="w-full p-1 transition duration-300 rounded-lg shadow-md opacity-95 hover:opacity-100 bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark hover:scale-105 shadow-dracula-background "
          >
            <div className="flex flex-col w-full h-full px-4 pt-4 pb-2 rounded-lg opacity-100 bg-dracula-purple-dark ">
              <div className="flex justify-start w-full p-2">
                {project.github ? (
                  <a href={project.github} className="px-2">
                    <div
                      className="w-6 h-6 transition-transform duration-200 ease-in-out bg-white hover:scale-110 bg-opacity-90"
                      style={{
                        maskImage: "url('/icon/github.svg')",
                        WebkitMaskImage: "url('/icon/github.svg')",
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskSize: '1.5rem',
                        WebkitMaskSize: '1.5rem',
                      }}
                    ></div>
                  </a>
                ) : (
                  ''
                )}
                {project.link ? (
                  <a href={project.link} className="px-2">
                    <div
                      className="w-6 h-6 transition-transform duration-200 ease-in-out bg-white hover:scale-110 bg-opacity-90"
                      style={{
                        maskImage: "url('/icon/link.svg')",
                        WebkitMaskImage: "url('/icon/link.svg')",
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskSize: '1.5rem',
                        WebkitMaskSize: '1.5rem',
                      }}
                    ></div>
                  </a>
                ) : (
                  ''
                )}
              </div>
              <h2
                className="py-2 text-2xl font-extrabold text-center text-dracula-green-dark bg-clip-text"
              >
                {project.title}
              </h2>
              <div className="flex flex-row justify-start row-span-1 px-2 pt-3 pb-6 text-lg capitalize text-dracula-foreground">
                {project.description}
              </div>
              {/* <div className="flex flex-wrap justify-center py-2 text-lg">
                {project.technologies.map((tech) => (
                  <span
                    className="px-3  py-0.5 mx-0.5 my-1 rounded-full border-dracula-extra border-2
                  text-transparent bg-clip-text bg-gradient-to-r from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark
                  "
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
