import { experiences } from "../constants";

const Experience = () => {
    return (
        <div
            className='min-h-screen bg-stone-300 dark:bg-stone-700 p-4 flex items-center justify-center pt-[100px] text-stone-800 dark:text-slate-100 '
            id='experience'>
            <div
                className='bg-white dark:bg-black shadow-lg rounded-lg p-6 max-w-4xl w-full'
                data-aos='fade-up'>
                <h1 className='text-3xl font-semibold text-center mb-6 font-inter'>Experience</h1>
                {experiences.map((experience, index) => (
                    <div key={index} className='mb-8'>
                        <h2 className='text-2xl font-semibold'>{experience.role}</h2>
                        <h3 className='text-xl font-semibold'>{experience.company}</h3>
                        <p className='text-sky-600 dark:text-sky-300'>{experience.period}</p>
                        <ul className='list-disc list-inside mt-4 space-y-2'>
                            {experience.responsibilities.map((responsibility, i) => (
                                <li key={i} className='flex items-center'>
                                    <svg
                                        className='w-6 h-6 text-stone-300 mr-2'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M5 13l4 4L19 7'></path>
                                    </svg>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
