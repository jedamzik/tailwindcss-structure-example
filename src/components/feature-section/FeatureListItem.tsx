import React from 'react';
import { Feature } from '../../types/Feature';
import styles from './FeatureSection.module.css';

interface FeatureListItemProps {
    feature: Feature;
}

const FeatureListItem = ({ feature }: FeatureListItemProps) => {
    return (
        <div key={feature.name} className={styles['FeatureListItem']}>
            <dt>
                <div className={styles['FeatureListItem__icon']}>
                    <feature.icon className={styles['FeatureListItem__icon__inner']} aria-hidden="true" />
                </div>
                <p className={styles['FeatureListItem__name']}>{feature.name}</p>
            </dt>
            <dd className={styles['FeatureListItem__description']}>{feature.description}</dd>
        </div>
    );
}

export default FeatureListItem;