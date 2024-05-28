import { projects } from "../constants";

const Projects = () => {
    return (
        <div
            className='min-h-screen bg-stone-700  p-4 flex items-center justify-center pt-[100px]'
            id='projects'>
            <div
                className='bg-black shadow-lg rounded-lg p-6 max-w-4xl w-full text-zinc-100'
                data-aos='fade-up'>
                <h1 className='text-3xl font-bold text-center mb-6'>Projects</h1>
                {projects.map((project, index) => (
                    <div key={index} className='mb-8'>
                        <h2 className='text-2xl font-semibold'>{project.name}</h2>
                        <p className='text-zinc-200'>{project.description}</p>
                        <p className='text-zinc-300 mt-2'>
                            <strong>Technologies:</strong> {project.technologies.join(", ")}
                        </p>
                        <a
                            href={project.link}
                            className='text-sky-300 mt-2 inline-block'
                            target='_blank'
                            rel='noopener noreferrer'>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
