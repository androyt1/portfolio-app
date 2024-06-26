import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { navlinks } from "../constants";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Header = () => {
    const [active, setActive] = useState<string>("Home");

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className='h-20 w-full  sticky top-0 flex justify-between items-center px-3 md:px-5 -mt-20 z-[100] backdrop-blur-md bg-white dark:bg-transparent '>
            <nav className='flex justify-between items-center w-full relative'>
                <div className='text-2xl font-noraml text-stone-800 dark:text-stone-100 font-inter'>
                    Andrew <span className=''>Aghoghovwia</span>
                </div>
                <ul className='hidden sm:flex space-x-4 '>
                    {navlinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                onClick={() => setActive(link.label)}
                                className={`${
                                    active === link.label
                                        ? "text-[18px] dark:text-zinc-100 underline"
                                        : "text-base dark:text-[#999997]"
                                }`}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center'>
                    <ThemeSwitcher />
                </div>
                <div className='flex sm:hidden'>
                    {isOpen ? (
                        <RiCloseLargeLine
                            size={30}
                            className='cursor-pointer dark:text-stone-100 text-stone-800'
                            onClick={toggle}
                        />
                    ) : (
                        <FiMenu
                            size={30}
                            className='cursor-pointer dark:text-stone-100 text-stone-800'
                            onClick={toggle}
                        />
                    )}
                </div>

                <div
                    className={`w-full h-screen fixed bg-stone-950/70 backdrop-blur-md top-20 left-0 transition duration-500 end-auto flex justify-start items-center ${
                        isOpen ? "translate-x-0" : "-translate-x-[100%]"
                    }`}
                    onClick={() => setIsOpen(false)}>
                    <div
                        className='w-[40%] h-full bg-stone-950/80 flex justify-center items-center'
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the sidebar
                    >
                        <ul className='flex flex-col justify-center items-center gap-10 w-full px-3'>
                            {navlinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        onClick={() => setActive(link.label)}
                                        className={`${
                                            active === link.label
                                                ? "text-[22px] text-zinc-100"
                                                : "text-base text-[#999997]"
                                        }`}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button className='flex items-center justify-center py-2 font-semibold rounded-md w-full border border-white/50 text-white md:mt-6 hover:bg-white hover:text-zinc-800 active:bg-gray-200 active:text-zinc-800 px-3 '>
                                    <FaDownload className='h-5 w-5 mr-2' />
                                    Download CV
                                </button>
                            </li>
                            <li>
                                <button className='flex items-center justify-center py-2 font-semibold rounded-md w-full bg-[#38BDF8] text-zinc-800 hover:bg-[#2CA7D8] hover:text-white active:bg-[#1C8DB0] active:text-white px-3 '>
                                    <FaEnvelope className='h-5 w-5 mr-2' />
                                    Contact Me
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
