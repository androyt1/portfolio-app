import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className='p-2 rounded-full bg-stone-300 dark:bg-gray-800 flex items-center justify-center'>
            <motion.div
                className='flex items-center justify-center'
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 360 : 0 }}
                transition={{ duration: 0.5 }}>
                {theme === "dark" ? (
                    <motion.svg
                        key='moon'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6 text-stone-300'
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        exit={{ opacity: 0, pathLength: 0 }}
                        transition={{ duration: 0.5 }}>
                        <path d='M21.75 15.43c-.65.22-1.33.37-2.05.44a9.038 9.038 0 01-7.18-3.4 9.038 9.038 0 01-1.4-8.91 8.934 8.934 0 00-.44-2.05 9 9 0 1011.07 11.07z' />
                    </motion.svg>
                ) : (
                    <motion.svg
                        key='sun'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-10 h-10 text-yellow-300'
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        exit={{ opacity: 0, pathLength: 0 }}
                        transition={{ duration: 0.5 }}>
                        <path d='M12 4.75V3M12 21v-1.75M4.75 12H3m18 0h-1.75M6.05 6.05L4.93 4.93M19.07 19.07l-1.12-1.12M6.05 17.95l-1.12 1.12M19.07 4.93l-1.12 1.12M12 7a5 5 0 110 10 5 5 0 010-10z' />
                    </motion.svg>
                )}
            </motion.div>
        </button>
    );
};

export default ThemeSwitcher;
