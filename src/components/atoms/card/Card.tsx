import React, { FC } from 'react';

const Card: FC = ({ children }) => {
    return (
        <div className="px-4 py-12 bg-white border border-gray-200 rounded shadow-sm sm:px-6 lg:px-8">
            {children}
        </div>
    );
}

export default Card;