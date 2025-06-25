import React from 'react';
import DownloadSection from './custom-components/DownloadSection';
import Trailer from './custom-components/Trailer';
import Anton from './custom-components/Anton';
import Screenshots from './custom-components/Screenshots';

const Home = () => {
    return (
        <>
            <DownloadSection />
            <Anton />
            <Trailer />
            <Screenshots />
        </>
    );
};

export default Home;