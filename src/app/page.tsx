import React from 'react';
import DownloadSection from './components/DownloadSection';
import Trailer from './components/Trailer';
import Anton from './components/Anton';

const Home = () => {
    return (
        <>
            <DownloadSection />
            <Anton />
            <Trailer />
        </>
    );
};

export default Home;