import React from 'react';

interface HeadingProps {
    title: string;
}

const Heading = ({ title }: HeadingProps) => {
    return (
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase lg:text-center">{title}</h2>
    );
}

export default Heading;