import { NextPage } from 'next';
import { projects } from '../public/data';

const Projects: NextPage = () => {
  return (
    <div
      className="
    grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-dracula-foreground
    "
    >
      {projects.map((project) => (
        <div
          className="h-full flex justify-center "
          key={project.title}
        >
          <div
            className="rounded-lg w-full p-1
          opacity-90 hover:opacity-100
          bg-gradient-to-br from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark 
          transition duration-300 hover:scale-105 shadow-md shadow-dracula-background
          "
          >
            <div className="flex flex-col px-4 pt-4 pb-2 rounded-lg w-full h-full bg-dracula-purple-dark ">
              <div className="flex justify-start p-2 w-full">
                {project.github ? (
                  <a href={project.github} className="px-2">
                    <div
                      className="bg-gradient-to-br w-6 h-6
                    hover:scale-110 transition-transform ease-in-out duration-200
                    from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark"
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
                      className="bg-gradient-to-br w-6 h-6
                    hover:scale-110 transition-transform ease-in-out duration-200
                    from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark"
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
                className="text-2xl font-extrabold text-center py-2
            text-transparent bg-clip-text bg-gradient-to-r from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark "
              >
                {project.title}
              </h2>
              <div className="flex justify-start pt-3 pb-6 px-2 text-dracula-foreground text-lg capitalize flex-row row-span-1">
                {project.description}
              </div>
              <div className="flex flex-wrap justify-center py-2 text-lg">
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
