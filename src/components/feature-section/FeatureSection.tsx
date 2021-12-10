import React from 'react';
import FeatureList from './FeatureList';
import { Feature } from '../../types/Feature';

interface FeatureSectionProps {
    features: Feature[];
}

const FeatureSection = ({ features}: FeatureSectionProps) => {
 return (
     <div className="py-12 bg-white border border-gray-200 rounded shadow-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                 A better way to send money
             </p>
             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                 Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                 accusamus quisquam.
             </p>

             <FeatureList features={features} />
         </div>
     </div>
 );
}

export default FeatureSection;