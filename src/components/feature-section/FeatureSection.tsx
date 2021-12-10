import React from 'react';
import FeatureList from './FeatureList';
import { Feature } from '../../types/Feature';
import styles from './FeatureSection.module.css';

interface FeatureSectionProps {
    features: Feature[];
}

const FeatureSection = ({ features}: FeatureSectionProps) => {
 return (
     <div className={styles['FeatureSection']}>
         <div className={styles['FeatureSection__inner']}>
             <h2 className={styles['FeatureSection__heading']}>Transactions</h2>
             <p className={styles['FeatureSection__smallHeading']}>
                 A better way to send money
             </p>
             <p className={styles['FeatureSection__paragraph']}>
                 Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                 accusamus quisquam.
             </p>

             <FeatureList features={features} />
         </div>
     </div>
 );
}

export default FeatureSection;