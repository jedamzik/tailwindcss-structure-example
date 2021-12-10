import React from 'react';
import FeatureList from '../../molecules/feature-list/FeatureList';
import { Feature } from '../../../types/Feature';
import Card from '../../atoms/card/Card';
import Heading from '../../atoms/heading/Heading';
import SubHeading from '../../atoms/sub-heading/SubHeading';
import Paragraph from '../../atoms/paragraph/Paragraph';

interface FeatureSectionProps {
    features: Feature[];
}

const FeatureSection = ({ features}: FeatureSectionProps) => {
 return (
     <Card>
         <div className="max-w-7xl mx-auto">
             <Heading title="Transactions" />
             <SubHeading title="A better way to send money" />
             <Paragraph>
                 Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                 accusamus quisquam.
             </Paragraph>

             <FeatureList features={features} />
         </div>
     </Card>
 );
}

export default FeatureSection;