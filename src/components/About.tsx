import { skills } from "../constants";
const About = () => {
    return (
        <div
            className='min-h-screen bg-stone-700 p-4 flex items-center justify-center pt-[100px] text-slate-100'
            id='about'>
            <div className='bg-black shadow-lg rounded-lg p-6 max-w-4xl w-full' data-aos='fade-up'>
                <h1 className='text-3xl font-semibold text-center mb-4 font-dmserif'>About Me</h1>
                <div className='text-center mb-6'>
                    <img
                        src='/images/androy.png'
                        alt='Profile'
                        className='w-32 h-32 object-cover rounded-full mx-auto mb-4'
                    />
                    <h2 className='text-xl font-semibold'>Andrew Aghoghovwia</h2>
                    <p className='text-sky-300'>Seasoned Fullstack Developer</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-2'>Contact Information</h3>
                    <p>
                        <strong>Location:</strong> Carshalton SM5 1JE
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href='mailto:androyt1@gmail.com' className='text-sky-300'>
                            androyt1@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong> +44 7821 460751
                    </p>
                </div>
                <div className='mt-6'>
                    <h3 className='text-2xl font-bold mb-2'>Professional Summary</h3>
                    <p>
                        Seasoned Fullstack Developer with 7 years of hands-on experience, adept at
                        crafting dynamic and responsive web applications. Specializing in React.js
                        for over 5 years and Node.js for 3 years, I bring a passion for creating
                        intuitive user interfaces and a proven track record of delivering top-notch,
                        high- performance web solutions. Thriving in collaborative, fast-paced
                        development environments, I am dedicated to consistently achieving
                        outstanding results.
                    </p>
                </div>
                <div className='mt-6'>
                    <h3 className='text-2xl font-bold mb-2'>Skills</h3>
                    <ul className='list-none space-y-2'>
                        {skills.map((skill, index) => (
                            <li key={index} className='flex items-center'>
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
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mt-6'>
                    <h3 className='text-2xl font-bold mb-2'>Certifications</h3>
                    <p>Karrox Certified Software Professional - February 2012 to Present</p>
                    <p>
                        Karrox Technologies Limited, commonly referred to as Karrox, is an Indian
                        multinational company that offers various IT training and certification
                        programs. The Karrox Certified Software Professional (KCSP) certification
                        aims to provide individuals with comprehensive training in software
                        development and related skills. Some modules included in the certification
                        include:
                    </p>
                    <ul className='list-disc list-inside'>
                        <li>Programming Fundamentals</li>
                        <li>Object-Oriented Programming (OOP)</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Database Management Systems (DBMS)</li>
                        <li>Web Development</li>
                        <li>Software Engineering</li>
                        <li>Quality Assurance and Testing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
