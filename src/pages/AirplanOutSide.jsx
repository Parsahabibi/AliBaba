import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Questions from "../components/Yourquestion/YourQuestion";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import Services from "../components/services/Services";
import Bgservices from "../components/Bgservices/Bgservices.jsx";
import OtherServiceDesktop from "../components/OtherService/OtherServiceDesktop/OtherServiceDesktop";

import ServicesAirplaneOutside from "../components/services/ServicesBottom/ServicesAirplaneOutside";
import ServicesBtnsAirplaneoutside from "../components/services/ServicesTop/ServicesBtnsAirplaneoutside";


import {
  AirplaneInsideServices,
  AirplaneOutsidServices,
  BusServices,
  HotelServices,
  TourServices,
  TrainServices,
  VilaServices,
} from "../components/icons/Icons";
import AirplanOutSideContent from "../components/HomePageContent/AirplanOutSideContent";
const AirplanOutSide = () => {

  const content_item_your_question_AirlanInside = [
    {
      id: "item1-questions-airplaninside",
      title: `بلیط پرواز چه کشورها و ایرلاین‌هایی را می‌توانم‌ در سایت علی‌بابا جستجو و خریداری کنم؟`,
      description: `بلیط تمام خطوط هوایی دنیا در سایت علی‌بابا موجود است، چه پروازهایی که مبدا یا مقصد آنها ایران است و چه پروازهای داخلی دورترین کشورهای دنیا. پروازهای ایرلاین‌هایی مثل لوفت‌هانزا، امارات، قطرایرویز، ترکیش‌ایر، ایرفرانس، کی‌ال‌ام، آئروفلوت، آلیتالیا، اوکراینی، ایرایژیا، پگاسوس و ده‌ها ایرلاین دیگر در علی‌بابا قابل تهیه هستند. همچنین بلیط پروازهای خارجیِ شرکت های هواپیمایی داخلی مانند ماهان، ایران‌ایر، قشم ایر، آتا و .. نیز روی سایت علی‌بابا به فروش می‌رسد.`,
    },
    {
      id: "item2-questions-airplaninside",
      title: `چطور می توانم در مورد مقررات پرواز یا ویزا مربوط به سفرم اطمینان پیدا کنم؟`,
      description: `حتما قبل از انتخاب پرواز خود در مورد مقررات پرواز و قوانین مربوط به ویزا تحقیق کنید (مثلا ممکن است مقصد سفر شما نیاز به ویزا نداشته باشد ولی برای توقفی که در مسیر دارد نیاز به ویزای ترانزیت داشته باشید). برای این کار به صفحه قوانین و مقررات پرواز خارجی مراجعه کنید و در صورتی که نیاز به اطلاعات بیشتری داشتید با پشتیبانی علی‌بابا تماس بگیرید.
        ۰۲۱-۴۳۹۰۰۰۰۰ : شماره تماس`,
    },
    {
      id: "item3-questions-airplaninside",
      title: `آیا برای خرید بلیط ایرلاین‌های خارجی، نیازی به کردیت‌کارت یا روش‌های پرداخت ارزی خواهم داشت؟`,
      description: `به هیچ وجه. شما هزینه‌ بلیط را به صورت ریالی و با کارت‌های شتابی که در دست دارید، تنها با داشتن رمز دوم کارت پرداخت می کنید و بلیط شما بلافاصله صادر خواهد شد و قابل استفاده خواهد بود.`,
    },
    {
      id: "item4-questions-airplaninside",
      title: `آیا ساعت، قیمت و دیگر مشخصات پروازها روی سایت علی‌بابا قطعی است؟`,
      description: `بله، آنچه پس از جستجوی پرواز مورد نظر خود روی سایت علی‌بابا می‌بینید، برنامه قطعی پروازهای ایرلاین‌هاست که به ریال محاسبه شده است. اگر احیانا تغییری در ساعت یا برنامه‌ی پرواز به وجود بیاید، از طریق پشتیبانی سایت علی‌بابا به اطلاع شما خواهد رسید.`,
    },
    {
      id: "item5-questions-airplaninside",
      title: `آیا پروازهای چارتر خارجی هم روی سایت علی‌بابا عرضه می‌شود؟`,
      description: `بله. بلیط کلیه‌ی پروازهای چارتر خارجی که از سوی ایرلاین‌های داخلی یا خارجی برای فروش عرضه می‌شوند را می‌توانید روی سایت علی‌بابا ببینید.`,
    },
    {
      id: "item6-questions-airplaninside",
      title: `چطور می توانم برای سفرم ارزان ترین بلیط ممکن را تهیه کنم؟`,
      description: `ارزان بودن بلیط سفر به عوامل مختلفی مرتبط است که برخی از مهم ترین آنها این موارد هستند:
در پروازهای سیستمی معمولا هرچه به زمان پرواز نزدیک تر می شویم به دلیل پر شدن کلاس نرخی های ارزان تر، قیمت آن افزایش پیدا می کند. معمولا هرچه زودتر پروازتان را بخرید ارزان تر است. بلیط ایرلاین های مختلف را چک کنید. برای اغلب مسیرها ایرلاین های کم هزینه (Low Cost Airline) وجود دارند که در ازای خدمات و امکانات کمتر، پروازهای ارزان تری به شما پیشنهاد می دهند. در روزهای مختلف سال، فصل و هفته و حتی ساعات متفاوت، قیمت یک پرواز ممکن است تغییرات زیادی داشته باشد. با استفاده از تقویم قیمتی و فیلترهای تعبیه شده جستجو می توانید با چند روز جابجایی پروازهای به مراتب ارزان تری پیدا کنید. علاوه بر این، پروازهای توقف دار و صبح زود هم معمولا پروازهای ارزان تری هستند. بلیط خود را از سایت های معتبر خریداری کنید و قیمت آنها را در ازای خدمتی که می دهند با هم مقایسه کنید. با در نظر گرفتن این موارد می توانید هوشمندانه، بهترین و ارزان ترین پرواز را برای سفر خود تهیه کنید.`,
    },
    {
      id: "item7-questions-airplaninside",
      title: `تقویم قیمتی (Flexible Date) چیست و چه کمکی به من می‌کند؟`,
      description: `تقویم قیمتی امکان مقایسه قیمت های روزهای نزدیک به جستجو را به شما می دهد. با کلیلک روی نوار سبز رنگ تقویم قیمتی، قیمت بلیط‌های ۳ روز قبل و ۳ روز بعد از تاریخ مورد نظر شما در جدولی نمایش داده می‌شود و به این ترتیب می‌توانید با تغییر کوچکی در برنامه‌ی سفر خود، هزینه‌ی بلیط را حتی تا نصف کاهش دهید!`,
    },
    {
      id: "item8-questions-airplaninside",
      title: `بهترین پروازها (Best Flights) چه پروازهایی هستند؟`,
      description: `در هر جستجویی که انجام می دهید، به صورت پیش فرض در ابتدای فهرست با پروازهایی روبرو می شوید که به عنوان بهترین پروازها به شما معرفی می شوند. در الگوریتم گزینش و نمایش این پروازها هر دو فاکتور قیمت و مدت زمان سفر در نظر گرفته شده است.`,
    },
    {
      id: "item9-questions-airplaninside",
      title: `چگونه می توانم بلیط پروازم را کنسل کنم یا تغییر دهم و از شرایط و جریمه آن مطلع شوم؟`,
      description: `برای اطلاع دقیق از شرایط و جریمه کنسلی یا تغییر بلیط پرواز مورد نظرتان در هر ساعتی از شبانه روز می توانید با پشتیبانی علی‌بابا تماس بگیرید.`,
    },
    {
      id: "item10-questions-airplaninside",
      title: `برای سوار شدن به هواپیما چه زمانی باید در فرودگاه باشم و چه مدارکی مورد نیاز است؟`,
      description: `برای اینکه بدون دغدغه سفر خود را آغاز کنید باید حداقل دو ساعت قبل از پرواز در فرودگاه حضور داشته باشید. برای پرواز نیازی به داشتن پرینت بلیط ندارید و تصویر و شماره بلیط به همراه مدارک شناسایی کفایت می کند.`,
    },
  ];

  const item_services = [
    { check: "deactive", icon: <AirplaneInsideServices />, text: "پرواز داخلی" },
    { check: "active", icon: <AirplaneOutsidServices />, text: "پرواز خارجی" },
    { check: "deactive", icon: <TrainServices />, text: "قطار" },
    { check: "deactive", icon: <BusServices />, text: "اتوبوس" },
    { check: "deactive", icon: <TourServices />, text: "تور" },
    { check: "deactive", icon: <HotelServices />, text: "هتل" },
    { check: "deactive", icon: <VilaServices />, text: "ویلا و اقامتگاه" },
  ];
  return (
    <div>
      <Header />
      <Bgservices img="./assets/image/HomeImage/Domesticflight.jpg" />
      <div className="main">
        <Services
          ItemServices={item_services}
          BottomBottomServices={<ServicesAirplaneOutside />}
          TopBottomServices={<ServicesBtnsAirplaneoutside />}
        />
        <OtherServiceDesktop />
        <Questions ItemYourQuestion={content_item_your_question_AirlanInside} />
        <AirplanOutSideContent />
      </div>

      <Footer conditional={true} IdMore="more7" />
    </div>
  );
};
export default AirplanOutSide;
