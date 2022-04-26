import React from 'react';
import Banner from './components/banner';
import Ecosystem from './components/ecosystem';
import Footer from './components/footer';
import Header from './components/header';
import Metaverse from './components/metaverse';
import Personal from './components/personal';
import Possible from './components/possible';
import Total from './components/total';
function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Possible />
            <Total />
            <Personal />
            <Metaverse />
            <Ecosystem />
            <Footer />
        </div>
    );
}

export default Home;