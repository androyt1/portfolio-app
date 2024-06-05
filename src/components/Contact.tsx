const Contact = () => {
    return (
        <div
            className='min-h-screen bg-stone-300 dark:bg-stone-700 p-4 flex items-center justify-center pt-[100px] text-stone-800 dark:text-slate-100'
            id='contact'>
            <div
                className='bg-white dark:bg-black shadow-lg rounded-lg p-6 max-w-4xl w-full'
                data-aos='fade-up'>
                <h1 className='text-3xl font-semibold text-center mb-6 font-inter'>
                    📞 Contact Me
                </h1>
                <div className='space-y-4 text-center'>
                    <div>
                        <h2 className='text-xl font-bold'>👤 Name</h2>
                        <p>Andrew Aghoghovwia</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>📧 Email</h2>
                        <p>
                            <a
                                href='mailto:androyt1@gmail.com'
                                className='text-sky-600 dark:text-sky-300 hover:underline'>
                                androyt1@gmail.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>📱 Phone/WhatsApp</h2>
                        <p>
                            <a
                                href='tel:+447821460751'
                                className='text-sky-600 dark:text-sky-300 hover:underline'>
                                +44 7821 460751
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
