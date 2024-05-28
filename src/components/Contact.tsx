const Contact = () => {
    return (
        <div
            className='min-h-screen bg-stone-700 p-4 flex items-center justify-center pt-[100px]'
            id='contact'>
            <div
                className='bg-black shadow-lg rounded-lg p-6 max-w-4xl w-full text-zinc-100'
                data-aos='fade-up'>
                <h1 className='text-3xl font-semibold text-center mb-6 font-dmserif'>
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
                                className='text-blue-400 hover:underline'>
                                androyt1@gmail.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>📱 Phone/WhatsApp</h2>
                        <p>
                            <a href='tel:+447821460751' className='text-blue-400 hover:underline'>
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
