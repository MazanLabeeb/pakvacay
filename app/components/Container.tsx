"use client";

interface IContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{children}</div>
    );
};

export default Container;
