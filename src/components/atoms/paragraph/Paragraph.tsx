import React, { FC } from 'react';

const Paragraph: FC = ({ children }) => {
    return (
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto lg:text-center">
            {children}
        </p>
    );
}

export default Paragraph;