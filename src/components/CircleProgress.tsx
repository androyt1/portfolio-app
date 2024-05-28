import { useScroll, useTransform, motion } from "framer-motion";

const CircleProgress = () => {
    const { scrollYProgress } = useScroll();

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

    return (
        <div className='z-[100]'>
            <svg className='w-10 h-10 animate-pulse' viewBox='0 0 120 120'>
                <circle
                    cx='60'
                    cy='60'
                    r={radius}
                    fill='transparent'
                    stroke='#fff'
                    strokeWidth='10'
                />
                <motion.circle
                    cx='60'
                    cy='60'
                    r={radius}
                    fill='transparent'
                    stroke='#075985'
                    strokeWidth='10'
                    strokeDasharray={circumference}
                    style={{
                        strokeDashoffset: strokeDashoffset,
                    }}
                    transform='rotate(-90 60 60)'
                />
            </svg>
        </div>
    );
};

export default CircleProgress;
