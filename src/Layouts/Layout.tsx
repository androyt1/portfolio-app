import FixedComponent from "./FixedComponent";
import Header from "./Header";

type LayoutProp = {
    children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProp) => {
    return (
        <>
            <Header />
            <div className='w-full flex items-center justify-between  md:px-5 '>
                <FixedComponent />
                <div className='  bg-zinc-9o0 flex-1 text-white '>{children}</div>
            </div>
        </>
    );
};
