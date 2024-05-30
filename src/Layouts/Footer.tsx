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

                <p className='text-sm'>© 2024 Andrew Aghoghovwia. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
