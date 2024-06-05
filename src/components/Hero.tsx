import SocialIcons from "../Layouts/SocialIcons";

const Hero = () => {
    return (
        <section
            id='hero'
            className='text-stone-800 dark:text-white min-h-screen flex items-center pb-4 font-lato bg-white dark:bg-transparent '>
            <div
                className=' flex flex-col justify-center items-start px-3 sm:px-0 '
                data-aos='fade-up'>
                <div className='w-full flex flex-row sm:hidden relative justify-between items-center pt-20 mb-4'>
                    <img src='/images/me.png' className='w-60 h-auto rounded-md ' alt='' />
                    <SocialIcons />
                </div>
                <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide font-inter '>
                    Building Digital <br />
                    <span className='text-sky-700 dark:text-sky-400 font-extrabold'>
                        Experiences
                    </span>
                </h1>
                <h2 className='mt-4 sm:mt-6  text-2xl md:text-4xl dark:text-[#fcfcfb] font-inter font-semibold'>
                    Crafting <span className='text-yellow-600 dark:text-indigo-400'>Seamless</span>{" "}
                    and <span className='text-yellow-600 dark:text-indigo-400'>Intuitive</span>
                    <br /> Web Solutions
                </h2>
                <p className='mt-2 sm:mt-6  text-lg max-w-2xl  dark:text-stone-100 font-inter'>
                    I am Andrew Aghoghovwia, a seasoned Fullstack Developer passionate about
                    transforming ideas into interactive, high-performance web applications. With 7
                    years of experience crafting responsive and dynamic user interfaces, I thrive in
                    fast-paced, collaborative environments. Let's bring your vision to life!
                </p>
            </div>
        </section>
    );
};

export default Hero;
