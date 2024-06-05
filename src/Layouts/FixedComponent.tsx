import SocialIcons from "./SocialIcons";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const FixedComponent = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/pdf/cv.pdf";
        link.download = "cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToContact = () => {
        const link = document.createElement("a");
        link.href = "#contact";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='hidden sm:flex relative sm:w-[250px] md:w-[360px] mr-16 '>
            <div className=' fixed top-[80px] h-screen sm:w-[250px] md:w-[360px] flex-col justify-center items-start   overflow-hidden rounded-bl-xl   '>
                <div className='flex   w-full h-1/2 overflow-hidden  px-3 relative flex-col justify-center items-start dark:bg-transparent'>
                    <img src='/images/me.png' alt='' className='min-w-full w-full object-cover' />
                </div>
                <div className='h-1/2 min-w-full py-3 space-y-3 px-3  dark:bg-transparent'>
                    <button
                        className='
    flex items-center justify-center py-2 px-4 font-semibold rounded-md w-full
    bg-sky-800 text-stone-100 transition duration-300 ease-in-out transform
    hover:border-black hover:bg-stone-700 hover:text-stone-200 hover:scale-105
    dark:bg-sky-400 dark:text-white dark:hover:bg-sky-800 dark:hover:text-stone-300
    active:bg-gray-700 active:text-zinc-800 active:scale-95
    md:mt-6
  '
                        onClick={handleDownload}>
                        <FaDownload className='h-5 w-5 mr-2' />
                        Download CV
                    </button>

                    <button
                        className='
    flex items-center justify-center py-2 px-4 font-semibold rounded-md w-full
    border border-stone-500 text-stone-500 bg-transparent
    transition duration-300 ease-in-out transform
    hover:bg-stone-500 hover:text-white hover:scale-105
    active:bg-blue-700 active:text-white active:scale-95
    dark:border-stone-100 dark:text-stone-100 dark:hover:bg-stone-400 dark:hover:text-stone-800
    dark:active:bg-blue-600 dark:active:text-white
  '
                        onClick={scrollToContact}>
                        <FaEnvelope className='h-5 w-5 mr-2' />
                        Contact Me
                    </button>
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
};

export default FixedComponent;
