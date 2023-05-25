import React from 'react'
import Header from '../Header/Header'
import Bgservices from '../Bgservices/Bgservices'
import Services from '../services/Services'
import Questions from '../Yourquestion/YourQuestion'
import HomePageContent from '../HomePageContent/HomePageContent'
import Footer from '../Footer/Footer'
import OtherServiceDesktop from '../OtherService/OtherServiceDesktop/OtherServiceDesktop'
import { AirplaneInsideServices, BusServices, HotelServices, TourServices, TrainServices, VilaServices } from '../icons/Icons'
import ServicesVila from '../services/ServicesBottom/ServicesVila'
import ServicesAirplaneInside from '../services/ServicesBottom/ServicesAirplaneInside'
import ServicesbtnsAirplaneInside from '../services/ServicesTop/ServicesBtnsAirplaneinside'

const DesktopHomePage = () => {
    const item_services = [
      {
        check: "active",
        icon: <AirplaneInsideServices />,
        text: "پرواز داخلی",
      },
      {
        check: "deactive",
        icon: <AirplaneInsideServices />,
        text: "پرواز خارجی",
      },
      { check: "deactive", icon: <TrainServices />, text: "قطار" },
      { check: "deactive", icon: <BusServices />, text: "اتوبوس" },
      { check: "deactive", icon: <TourServices />, text: "تور" },
      { check: "deactive", icon: <HotelServices />, text: "هتل" },
      { check: "deactive", icon: <VilaServices />, text: "ویلا و اقامتگاه" },
    ];
    const content_item_your_question_AirlanInside = [
      {
        id: "item1-questions",
        title: `چند روز قبل از پرواز، بلیط هواپیما را بخریم؟`,
        description: `امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید`,
      },
      {
        id: "item2-questions",
        title: `در هر پرواز، میزان بار مجاز چقدر است؟`,
        description: `میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.`,
      },
      {
        id: "item3-questions",
        title: `نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟`,
        description: `نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه <Link to=''>بلیط هواپیما</Link> به این نکته توجه داشته باشید.`,
      },
      {
        id: "item4-questions",
        title: `رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟`,
        description: `خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.`,
      },
      {
        id: "item5-questions",
        title: `آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟`,
        description: `وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد.`,
      },
      {
        id: "item6-questions",
        title: `آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟`,
        description: `در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند.`,
      },
      {
        id: "item7-questions",
        title: `هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم، امکان انتخاب صندلی مورد نظرمان وجود دارد؟`,
        description: ` خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر است.`,
      },
    ];
    return (
      <div className="DesktopHomePage">
        <div>
          <Header />
          <Bgservices img="./assets/image/HomeImage/Domesticflight.jpg" />
          <div className="main">
            <Services
              ItemServices={item_services}
              BottomBottomServices={<ServicesAirplaneInside />}
              TopBottomServices={<ServicesbtnsAirplaneInside />}
            />
            <OtherServiceDesktop />
            <Questions
              ItemYourQuestion={content_item_your_question_AirlanInside}
            />
            <HomePageContent />
          </div>
          <Footer conditional={true} IdMoreDesktop="moredesktophomepage"/>
        </div>
      </div>
    );
}

export default DesktopHomePage