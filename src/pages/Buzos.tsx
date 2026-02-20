import React from 'react';
import Collection from '../components/buzos/Collection';
import BuzoCarousel from '../components/buzos/BuzoCarousel';
import ProcessSteps from '../components/buzos/ProcessSteps';

const Buzos: React.FC = () => {
    return (
        <div className="bg-neutral-950 pt-20">
            <Collection />
            <BuzoCarousel />
            <ProcessSteps />
        </div>
    )
}

export default Buzos;
