import React from 'react';
import { Feature } from '../../types/Feature';
import FeatureListItem from './FeatureListItem';
import styles from './FeatureSection.module.css';

interface FeatureListProps {
    features: Feature[];
}

const FeatureList = ({ features }: FeatureListProps) => {
    return (
        <div className={styles['FeatureList']}>
            <dl className={styles['FeatureList__list']}>
                {features.map((feature) => <FeatureListItem feature={feature} />)}
            </dl>
        </div>
    );
}

export default FeatureList;