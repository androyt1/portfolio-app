const Footer = () => {
    return (
        <footer className='bg-black text-zinc-100 py-6'>
            <div className='container mx-auto text-center'>
                <div className='mb-4'>
                    <p className='text-lg'>👤 Andrew Aghoghovwia</p>
                    <p>
                        📧{" "}
                        <a
                            href='mailto:androyt1@gmail.com'
                            className='text-blue-400 hover:underline'>
                            androyt1@gmail.com
                        </a>
                    </p>
                    <p>
                        📱{" "}
                        <a href='tel:+447821460751' className='text-blue-400 hover:underline'>
                            +44 7821 460751
                        </a>
                    </p>
                </div>
                <div className='flex justify-center space-x-6 mb-4'>
                    <a
                        href='https://www.linkedin.com/in/yourprofile'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img src='linkedin-icon.svg' alt='LinkedIn' className='h-6 w-6' />
                    </a>
                    <a
                        href='https://github.com/yourprofile'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img src='github-icon.svg' alt='GitHub' className='h-6 w-6' />
                    </a>
                    <a
                        href='https://twitter.com/yourprofile'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <img src='twitter-icon.svg' alt='Twitter' className='h-6 w-6' />
                    </a>
                </div>
                <p className='text-sm'>© 2024 Andrew Aghoghovwia. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
