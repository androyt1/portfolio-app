import SocialIcons from "./SocialIcons";

const FixedComponent = () => {
    return (
        <div className='hidden sm:flex relative sm:w-[250px] md:w-[360px] mr-16'>
            <div className=' fixed top-[80px] h-screen sm:w-[250px] md:w-[360px] flex-col justify-center items-start   overflow-hidden rounded-bl-xl   bg-zinc-900'>
                <div className='flex   w-full h-1/2 overflow-hidden  px-3 relative flex-col justify-center items-start'>
                    <img
                        src='/images/androy.png'
                        alt=''
                        className='min-w-full w-full object-cover'
                    />
                </div>
                <div className='h-1/2  min-w-full py-3 space-y-3 px-3 '>
                    <button className='py-2  font-semibold rounded-md w-full border border-white/50  text-white md:mt-6'>
                        Download Cv
                    </button>
                    <button className='py-2 font-semibold rounded-md w-full bg-[#38BDF8]   text-zinc-800'>
                        Contact Me
                    </button>
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
};

export default FixedComponent;
