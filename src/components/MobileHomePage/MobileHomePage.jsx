import React from 'react'
import MobileHeader from '../Header/MobileHeader/MobileHeader'
import OtherService from '../OtherService/OtherService'
import Questions from '../Yourquestion/YourQuestion'
import HomePageContent from '../HomePageContent/HomePageContent'
import Footer from '../Footer/Footer'
import MobileFooter from '../MobileFooter/MobileFooter'

const MobileHomePage = () => {
    return (
        <div className='MobileHomePage'>
            <MobileHeader />
            <div className='MobileHomePageOtherService' style={{paddingTop:'120px' , width:"93%" , margin:"0 auto"}}>
                <OtherService />
                <Questions />
                <HomePageContent />
                <Footer conditional={true} IdMore={'more100'} />
                <MobileFooter />
            </div>
        </div>
    )
}

export default MobileHomePage