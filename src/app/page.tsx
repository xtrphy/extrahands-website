import React from 'react';
import DownloadSection from './custom-components/DownloadSection';
import Trailer from './custom-components/Trailer';
import Anton from './custom-components/Anton';
import Screenshots from './custom-components/Screenshots';
import Reviews from './custom-components/Reviews';

const Home = () => {
    return (
        <>
            <DownloadSection />
            <Anton />
            <Trailer />
            <Screenshots />
            <Reviews />
        </>
    );
};

export default Home;