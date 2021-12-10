import { SVGProps } from 'react';

export interface Feature {
    name: string;
    description: string;
    icon: (props: SVGProps<SVGSVGElement>) => any;
}
