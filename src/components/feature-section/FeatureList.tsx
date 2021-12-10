import React from 'react';
import { Feature } from '../../types/Feature';
import FeatureListItem from './FeatureListItem';

interface FeatureListProps {
    features: Feature[];
}

const FeatureList = ({ features }: FeatureListProps) => {
    return (
        <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => <FeatureListItem feature={feature} />)}
            </dl>
        </div>
    );
}

export default FeatureList;