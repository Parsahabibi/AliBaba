import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Services from "../services/Services";
import Bgservices from "../Bgservices/Bgservices.jsx";
import OtherServiceDesktop from "../OtherService/OtherServiceDesktop/OtherServiceDesktop";

import {
  AirplaneInsideServices,
  AirplaneOutsidServices,
  Arrow,
  BusServices,
  HotelServices,
  TourServices,
  TrainServices,
  VilaServices,
} from "../icons/Icons";
import ContentHotel from "./ContentHotel";
import ServicesHotel from "../services/ServicesBottom/ServicesHotel";
import ServicesbtnsHotel from "../services/ServicesTop/ServicesBtnsHotel";
import Questions from "../Yourquestion/YourQuestion";
import CardHotel from "./CardHotel";

const HotelDesktop = () => {
  const item_services = [
    {
      check: "deactive",
      Link: "/",
      icon: <AirplaneInsideServices />,
      text: "پرواز داخلی",
    },
    {
      check: "deactive",
      Link: "/AirplanOutSide",
      icon: <AirplaneOutsidServices />,
      text: "پرواز خارجی",
    },
    { check: "deactive", Link: "/Train", icon: <TrainServices />, text: "قطار" },
    { check: "deactive", Link: "/Bus", icon: <BusServices />, text: "اتوبوس" },
    { check: "deactive", Link: "/Thour", icon: <TourServices />, text: "تور" },
    { check: "active", Link: "/Hotel", icon: <HotelServices />, text: "هتل" },
    {
      check: "deactive",
      Link: "/Vila",
      icon: <VilaServices />,
      text: "ویلا و اقامتگاه",
    },
  ];

  const CardHotelOutside = [
    { img: "antalya.svg", text: "  آنتالیا" },
    { img: "turkey.svg", text: "  استانبول" },
    { img: "van.svg", text: "وان" },
    { img: "dubai.svg", text: "دبی" },
    { img: "paris.svg", text: "پاریس" },
    { img: "yerevan.svg", text: "ایروان" },
    { img: "amsterdam.svg", text: "آمستردام" },
    { img: "baku.svg", text: "باکو" },
    { img: "rome.svg", text: "رم" },
    { img: "berlin.svg", text: "برلین" },
    { img: "milan.svg", text: "میلان" },
    { img: "moscow.svg", text: "مسکو" },
  ];
  const CardHotelInside = [
    { img: "mashhad.svg", text: "مشهد" },
    { img: "tehran.svg", text: "تهران" },
    { img: "kish.svg", text: "کیش" },
    { img: "tabriz.svg", text: "تبریز" },
    { img: "isfahan.svg", text: "اصفهان" },
    { img: "shiraz.svg", text: "شیراز" },
  ];

  const content_item_your_question_Hotel = [
    {
      id: "item1-questions-hotel-desktop",
      title: `پیش از رزرو هتل، چگونه درباره هتل و فرآیند رزرو آن اطلاعات کسب کنم؟`,
      description: `فرایند انتخاب و رزرو اینترنتی هتل در علی بابا بسیار ساده است. به سادگی و با چند کلیک می توانید با انتخاب مقصد و تاریخ سفر خود، هتل مد نظر خود را با قیمت مناسب رزرو کنید. با این حال در صورت نیاز، مرکز پشتیبانی علی بابا به صورت 24 ساعته پاسخگوی شماست.`,
    },
    {
      id: "item2-questions-hotel-desktop",
      title: `هزینه هتل خارجی را چه طور بپردازیم؟ آیا استفاده از کارت‌های شتاب امکان‌پذیر است؟`,
      description: `زمانی که برای رزرو هتل خارجی به وب‌سایت یا اپلیکیشن علی بابا مراجعه می‌کنید، خیالتان از بابت نحوه پرداخت راحت باشد. شما می‌توانید هزینه رزرو هتل را با همین کارت‌های شتاب خودتان بپردازید. به هیچ وجه نیازی به استفاده از کارت‌های اعتباری خارجی نیست.`,
    },
    {
      id: "item3-questions-hotel-desktop",
      title: `آیا پس از اینکه هتل را رزرو کردیم، می‌توانیم رزرومان را کنسل کنیم و پولمان را پس بگیریم؟`,
      description: `طبیعی است که گاهی اوقات سفرمان به هر دلیلی کنسل شود. هر کدام از هتل‌ها قوانین خودشان را برای کنسلی دارند.طبیعی است که گاهی اوقات سفرمان به هر دلیلی کنسل شود. هر کدام از هتل‌ها قوانین خودشان را برای کنسلی دارند.<br>بعضی از هتل‌ها استرداد پول را می‌پذیرند؛ البته این استرداد در بیشتر موارد با کسر هزینه جریمه است. میزان جریمه هم باز به قوانین هتل و زمانی که کنسلی را اعلام می‌کنید، بستگی دارد. (هر چه دیرتر کنسلی را اعلام کنید، احتمال افزایش جریمه بیشتر است).<br>اما هتل‌هایی هم وجود دارند که کنسلی و استرداد وجه را نمی‌پذیرند. زمانی که در علی بابا در حال رزرو آنلاین هتل هستید، می‌توانید به راحتی قوانین کنسلی را بخوانید.<br>در هنگام رزرو در مقابل هر یک از اتاق‌های هتل واژه‌های «قوانین کنسلی» یا «غیرقابل استرداد» را مشاهده می‌کنید. غیرقابل استرداد همان طور که از نامش پیداست، وجهی به شما پس نمی‌دهد. اما اگر واژه قوانین کنسلی را هنگام جستجوی یک هتل دیدید، روی آن کلیک کنید و این قوانین را بخوانید.`,
    },
    {
      id: "item4-questions-hotel-desktop",
      title: `چه ساعتی می‌توانیم اتاق‌مان را تحویل بگیریم و چه ساعتی باید اتاق را پس بدهیم؟`,
      description: `معمولا ورود مسافر به اتاق (چک‌این) در ساعت 14 و خروج مسافر (چک‌اوت) ساعت 12 ظهر است.`,
    },
    {
      id: "item5-questions-hotel-desktop",
      title: `نیم‌شارژ ورود و خروج چیست؟`,
      description: `ساعت ورود به هتل ساعت 14 و خروج 12 ظهر است؛ مسافرانی که ورود زودهنگام (حدود ساعت 8 صبح) یا خروج دیرهنگام (حدود ساعت 18 عصر) را دارند، از این گزینه استفاده می‌کنند؛ قیمت نیم‌شارژ معمولا نصف رزرو یک شب است. با این حال این هزینه توسط هتل تعیین می‌شود و از هتلی به هتل دیگر می‌تواند متفاوت باشد.`,
    },
    {
      id: "item6-questions-hotel-desktop",
      title: `کودکان تا چه سنی رایگان پذیرش می‌شوند و تخت آنها چگونه است؟`,
      description: `شرایط سنی کودک برای پذیرش در هتل در قسمت «قوانین» اطلاع‌رسانی شده است.`,
    },
    {
      id: "item7-questions-hotel-desktop",
      title: `تفاوت اتاق‌ها با هم مانند دبل یا توئین بودن یا جونیور یا امپریال یا حتی سوئیت چیست؟`,
      description: `اتاق دبل دو تخت چسبیده‌به‌هم دارد و مناسب زوج‌ها است. اتاق‌های تویین دو تخت سینگل یا جدا از هم دارند. اتاق‌هایی مثل جونیور یا امپریال از نظر متراژ، دیزاین و طبقات نسبت به اتاق‌های استاندارد اتاق‌های باکیفیت‌تری هستند. البته سرویس و خدمات هتل برای همه اتاق‌ها یکسان است.`,
    },
    {
      id: "item8-questions-hotel-desktop",
      title: `واچر چیست؟`,
      description: `رسید پرداخت و تاییدیه رزرو اقامتگاه را «واچر» می‌گویند. واچر پس از انجام پرداخت توسط شما از طرف سیستم رزرواسیون علی بابا صادر می‌شود و در اختیار شما قرار می‌گیرد.`,
    },
    {
      id: "item9-questions-hotel-desktop",
      title: `دلیل پایین بودن نرخ هتل های علی بابا چیست؟`,
      description: `علی بابا با تامین‌کنندگان قرارداد سالیانه دارد و در ایام غیرپیک هم مسافر هتل‌ها را تامین می‌کند. این باعث می‌شود تا علی بابا بتواند امکان رزرو ارزان هتل را برای مسافران فراهم کند.`,
    },
    {
      id: "item10-questions-hotel-desktop",
      title: `مبلغ درج شده در وب‌سایت علی بابا مبلغ نهایی است؟ آیا امکان دارد بعدا تغییر کند؟`,
      description: `مبلغ اعلام‌شده نهایی است، مگر در زمان‌های خاص مانند عید نوروز؛ در این شرایط حتما در هنگام رزرو اعلام می‌شود که نرخ فعلی علی‌الحساب است.`,
    },
  ];
 

  return (
    <div className="hotel-desktop">
      <Header />
      <Bgservices img="./assets/image/HomeImage/hotel.jpg" />
      <div className="main">
        <Services
          ItemServices={item_services}
          BottomBottomServices={<ServicesHotel />}
          TopBottomServices={<ServicesbtnsHotel />}
        />
        <OtherServiceDesktop />
        <div className="card">
          <div className="card-outside">
            {CardHotelOutside.map((item) => (
              <CardHotel
                src={"./assets/image/Hotel/" + item.img}
                text={item.text}
              />
            ))}
          </div>
          <div className="card-inside">
            {CardHotelInside.map((item) => (
              <CardHotel
                src={"./assets/image/Hotel/" + item.img}
                text={item.text}
              />
            ))}
          </div>
        </div>
        <Questions
          ItemYourQuestion={content_item_your_question_Hotel}
          title="پرسش‌های متداول درباره رزرو هتل در علی‌بابا"
        />
        <ContentHotel />
      </div>

      <Footer
        conditional={true}
        IdMore="morehoteldesktop2"
        IdMoreDesktop="morehoteldesktop"
      />
    </div>
  );
};

export default HotelDesktop;
