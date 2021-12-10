import React from 'react';

interface SubHeadingProps {
    title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
    return (
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-center">
            {title}
        </p>
    );
}

export default SubHeading;