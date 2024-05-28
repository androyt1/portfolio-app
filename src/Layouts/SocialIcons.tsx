import { motion, Variants } from "framer-motion";
import { IconType } from "react-icons";
import { TfiLinkedin, TfiGithub, TfiInstagram, TfiFacebook } from "react-icons/tfi";
import CircleProgress from "../components/CircleProgress";

const iconVariants: Variants = {
    initial: {
        scale: 1,
        rotate: 0,
    },
    hover: {
        scale: 1.2,
        rotate: [-45, 45, -45],
        transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
};

interface IconComponentProp {
    IconComponent: IconType;
}

const Icon: React.FC<IconComponentProp> = ({ IconComponent }) => (
    <motion.div variants={iconVariants} initial='initial' animate='initial' whileHover='hover'>
        <IconComponent size={30} color='#fde68a' />
    </motion.div>
);

const SocialIcons: React.FC = () => (
    <div className=' flex flex-col sm:flex-row items-end sm:items-center justify-between w-full md:p-6 gap-2 sm:gap-0'>
        <CircleProgress />
        <Icon IconComponent={TfiLinkedin} />
        <Icon IconComponent={TfiGithub} />
        <Icon IconComponent={TfiInstagram} />
        <Icon IconComponent={TfiFacebook} />
    </div>
);

export default SocialIcons;
