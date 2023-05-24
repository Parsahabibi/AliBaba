import React from 'react'
import Header from '../Header/Header'
import Bgservices from '../Bgservices/Bgservices'
import Services from '../services/Services'
import Questions from '../Yourquestion/YourQuestion'
import HomePageContent from '../HomePageContent/HomePageContent'
import Footer from '../Footer/Footer'
import OtherServiceDesktop from '../OtherService/OtherServiceDesktop/OtherServiceDesktop'

const DesktopHomePage = () => {
    return (
        <div className='DesktopHomePage'>
            <div>
                <Header />
                <Bgservices img="./assets/image/HomeImage/Domesticflight.jpg" />
                <div className="main">
                    <Services />
                    <OtherServiceDesktop />
                    <Questions />
                    <HomePageContent />
                </div>
                <Footer conditional={true} IdMore="more4" />
            </div>
        </div>
    )
}

export default DesktopHomePage