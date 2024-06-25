'use client';

interface ContainerProps {
    children: React.ReactNode;
    classname?: string;
}

const Container: React.FC<ContainerProps> = ({
    children,
    classname
}) => {
    const className = classname ? classname : "max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
    return (
        <div className={className}>{children}</div>
    )
}

export default Container;