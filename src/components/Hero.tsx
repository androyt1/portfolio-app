const Hero = () => {
    return (
        <section id='hero' className=' text-white h-screen flex items-center '>
            <div
                className=' flex flex-col justify-center items-start px-3 sm:px-0'
                data-aos='fade-up'>
                <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide'>
                    Building Digital <br /> <span className='text-sky-400'>Experiences</span>
                </h1>
                <h2 className='mt-6 text-2xl md:text-4xl text-[#fde68a]'>
                    Crafting Seamless and Intuitive
                    <br /> Web Solutions
                </h2>
                <p className='mt-6 text-lg max-w-2xl  text-zinc-200'>
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
