import React from "react";
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
import VilaContent from "../HomePageContent/VilaContent";
import EjareVila from "../EjareVila/EjareVila";
import BoxVila from "../EjareVila/BoxVila";
import ServicesVila from "../services/ServicesBottom/ServicesVila";
import ServicesbtnsVila from "../services/ServicesTop/ServicesBtnsVila";
import ItemSliderReserveVila from "../EjareVila/ItemSliderVila";
import { json } from "react-router-dom";

const VilaDesktop = () => {
  const item_services = [
    {
      check: "deactive",
      icon: <AirplaneInsideServices />,
      text: "پرواز داخلی",
    },
    {
      check: "deactive",
      icon: <AirplaneOutsidServices />,
      text: "پرواز خارجی",
    },
    { check: "deactive", icon: <TrainServices />, text: "قطار" },
    { check: "deactive", icon: <BusServices />, text: "اتوبوس" },
    { check: "deactive", icon: <TourServices />, text: "تور" },
    { check: "deactive", icon: <HotelServices />, text: "هتل" },
    { check: "active", icon: <VilaServices />, text: "ویلا و اقامتگاه" },
  ];
  const ContentEjareVila = [
    " اجاره ویلا در کردان",
    "اجاره ویلا شمال",
    "اجاره ویلا در رامسر",
    "اجاره ویلا در کیش",
    "اجاره ویلا در طالقان",
    "اجاره ویلا",
    "اجاره سوئیت در کیش",
    "اجاره سوئیت در تهران",
    "اجاره روزانه خانه در تهران",
    "اجاره ویلا در ساری",
    "اقامتگاه بومگردی قشم",
    "اجاره سوئیت در مشهد",
  ];
  const ConstentBoxVila = [
    {
      src: "./assets/image/vila/nezafat.png",
      title: "تضمین نظافت و پاکیزگی اقامتگاه ها",
      text: "خدمات ضدعفونی و اقامتگاه و کیف حاوی وسایل بهداشتی",
    },
    {
      src: "./assets/image/vila/roostagardi.png",
      title: "روستاگردی با اقامتگاه های جاباما",
      text: "کشف فرهنگ های دیده نشده و زندگی با مردم بومی",
    },
    {
      src: "./assets/image/vila/kaari.png",
      title: "اقامتگاه های مناسب سفرهای کاری",
      text: "اقامتگاه های اقتصادی برای مدت زمان کوتاه",
    },
  ];

  let count = 0;
  const ScrollRight = () => {
    document.querySelector(".btn-left-slider").style.display = "flex";
    if (count <= 25) {
      document.querySelector(".btn-right-slider").style.display = "none";
    }
    if (count > 0) {
      document.querySelector(
        ".row-slider-reserve-vila"
      ).style.transform = `translateX(${(count -= 25)}%)`;
    }
  };
  const ScrollLeft = () => {
    document.querySelector(".btn-right-slider").style.display = "flex";
    if (count >= 25) {
      document.querySelector(".btn-left-slider").style.display = "none";
    }
    if (count < 50) {
      document.querySelector(
        ".row-slider-reserve-vila"
      ).style.transform = `translateX(${(count += 25)}%)`;
    }
  };

  let oldx = 0;
  const Swiper = (e) => {
    document
      .querySelector(".slider-reserve-vila")
      .addEventListener("mousemove", function () {
        if (e.pageX < oldx) {
          console.log("left");
          document.querySelector(".btn-right-slider").style.display = "flex";
          if (count >= 25) {
            document.querySelector(".btn-left-slider").style.display = "none";
          }
          if (count < 50) {
            document.querySelector(
              ".row-slider-reserve-vila"
            ).style.transform = `translateX(${(count += 25)}%)`;
          }
        } else if (e.pageX > oldx) {
          console.log("right");
          document.querySelector(".btn-left-slider").style.display = "flex";
          if (count <= 25) {
            document.querySelector(".btn-right-slider").style.display = "none";
          }
          if (count > 0) {
            document.querySelector(
              ".row-slider-reserve-vila"
            ).style.transform = `translateX(${(count -= 25)}%)`;
          }
        }
        oldx = e.pageX;
        // let ContainerSlider = document.querySelector(
        //   ".row-slider-reserve-vila"
        // );
        // console.log(position + "-------" + e.pageX);
        // console.log(position - e.pageX);
        // ContainerSlider.style.transform = `translateX(${start - e.pageX}px)`;
      });
  };

  return (
    <div className="vila-desktop">
      <Header />
      <Bgservices img="./assets/image/HomeImage/villa.jpg" />
      <div className="main">
        <Services
          ItemServices={item_services}
          BottomBottomServices={<ServicesVila />}
          TopBottomServices={<ServicesbtnsVila />}
        />
        <OtherServiceDesktop />
        <div className="reserve-vila">
          <div className="content-reserve-vila">
            <h2> مرجع رزرو ویلا، اقامتگاه و سوئیت </h2>
            <p>
              اگر قصد سفر دارید و به دنبال تجربه شایسته سفر هستید، یافتن
              اقامتگاهی مناسب از نخستین اقدامات شما باید باشد. علی‌بابا با
              همکاری جاباما، معتبرترین سامانه رزرو هتل و اجاره اقامتگاه، است. در
              سفرهای داخلی و خارجی، علی‌بابا با همکاری جاباما انتخاب‌های متنوعی
              را در اختیارتان می‌گذارد. اطلاعات درباره شرایط هتل یا اقامتگاه،
              موقعیت مکانی، عکس‌هایی واضح و هزینه اقامت، داده‌هایی است که در
              اختیار شما گذاشته می‌شود تا انتخاب آگاهانه‌ای داشته باشید. علاوه
              بر این، پوشش سراسری هتل‌های ایران و پوشش گسترده هتل‌های جهان، به
              شما کمک می‌کند تا با تنوع قابل‌توجهی از هتل و اقامتگاه روبه‌رو
              شوید.
            </p>
          </div>
          <div className="container-slider">
            <div className="btn-slider btn-right-slider" onClick={ScrollRight}>
              <Arrow />
            </div>
            <div className="btn-slider btn-left-slider" onClick={ScrollLeft}>
              <Arrow />
            </div>
            <div className="slider-reserve-vila" onMouseDown={Swiper}>
              <div className="row-slider-reserve-vila">
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/vila/kish_island_image_accommodation.jpg"
                    }
                    title={"کیش"}
                    price={"11,900,000"}
                  />
                  <ItemSliderReserveVila
                    src={"/assets/image/vila/qeshm_image_accommodation.jpg"}
                    title={"قشم"}
                    price={"7,900,000"}
                  />
                </div>
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={"/assets/image/vila/tehran_image_accommodation.jpg"}
                    title={"تهران"}
                    price={"14,600,000"}
                  />
                  <ItemSliderReserveVila
                    src={"/assets/image/vila/mashhad_image_accommodation.jpg"}
                    title={"مشهد"}
                    price={"6,730,000"}
                  />
                </div>
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={"/assets/image/vila/isfahan_image_accommodation.jpg"}
                    title={"اصفهان"}
                    price={"8,850,000"}
                  />
                  <ItemSliderReserveVila
                    src={"/assets/image/vila/rasht_image_accommodation.jpg"}
                    title={"رشت"}
                    price={"9,900,000"}
                  />
                </div>
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={"/assets/image/vila/ramsar_image_accommodation.jpg"}
                    title={"رامسر"}
                    price={"16,400,000"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="boxs-vila">
          <h2>سفر با خیال راحت</h2>
          <div className="body-boxs-vila">
            {ConstentBoxVila.map((item) => (
              <BoxVila src={item.src} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
        <VilaContent />
        <div className="btns-ejare-vila">
          {ContentEjareVila.map((item) => (
            <EjareVila text={item} link={"./"} />
          ))}
        </div>
      </div>

      <Footer conditional={true} IdMore="more7" IdMoreDesktop="more100" />
    </div>
  );
};

export default VilaDesktop;
