import { useState } from "react";
import { FiMenu } from "react-icons/fi";

type LinkProps = {
    id: number;
    label: string;
    href: string;
};

const Header = () => {
    const [active, setActive] = useState<string>("Home");

    const navlinks: LinkProps[] = [
        {
            id: 0,
            label: "Home",
            href: "#hero",
        },
        {
            id: 1,
            label: "About",
            href: "#about",
        },
        {
            id: 2,
            label: "Experience",
            href: "#experience",
        },
        {
            id: 3,
            label: "Projects",
            href: "#projects",
        },
        {
            id: 4,
            label: "Contact",
            href: "#contact",
        },
    ];

    return (
        <header className='h-20 w-full bg-zinc-900 sticky top-0 flex justify-between items-center px-3 -mt-20 z-[100]'>
            <nav className='flex justify-between items-center w-full'>
                <div className='text-2xl font-bold text-zinc-100'>Andrew.A</div>
                <ul className='hidden sm:flex space-x-4 '>
                    {navlinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                onClick={() => setActive(link.label)}
                                className={`${
                                    active === link.label
                                        ? "text-[18px] text-zinc-100"
                                        : "text-base text-[#fde68a]"
                                }`}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex sm:hidden'>
                    <FiMenu size={30} color='#fff' className='cursor-pointer' />
                </div>
            </nav>
        </header>
    );
};

export default Header;
