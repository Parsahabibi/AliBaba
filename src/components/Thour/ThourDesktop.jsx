import React from "react";
import Bgservices from "../Bgservices/Bgservices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
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
import Services from "../services/Services";
import ServicesTour from "../services/ServicesBottom/ServicesTour";
import ServicesbtnsTour from "../services/ServicesTop/ServicesBtnTour";
import Questions from "../Yourquestion/YourQuestion";
import OtherServiceDesktop from "../OtherService/OtherServiceDesktop/OtherServiceDesktop";
import ItemSliderReserveVila from "../EjareVila/ItemSliderVila";
import { Link } from "react-router-dom";
import CardHotel from "../Hotel/CardHotel";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ThourDesktop = () => {
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
    {
      check: "deactive",
      Link: "/Train",
      icon: <TrainServices />,
      text: "قطار",
    },
    { check: "deactive", Link: "/Bus", icon: <BusServices />, text: "اتوبوس" },
    { check: "active", Link: "/Thour", icon: <TourServices />, text: "تور" },
    {
      check: "deactive",
      Link: "/Hotel",
      icon: <HotelServices />,
      text: "هتل",
    },
    {
      check: "deactive",
      Link: "/Vila",
      icon: <VilaServices />,
      text: "ویلا و اقامتگاه",
    },
  ];

  let count = 0;
  const ScrollRightThour = () => {
    document.querySelector(".btn-left-slider").style.display = "flex";
    if (count <= 20) {
      document.querySelector(".btn-right-slider").style.display = "none";
    }
    if (count > 0) {
      document.querySelector(
        ".row-slider-reserve-Thour-desktop"
      ).style.transform = `translateX(${(count -= 20)}%)`;
    }
  };
  const ScrollLeftThour = () => {
    document.querySelector(".btn-right-slider").style.display = "flex";
    if (count >= 40) {
      document.querySelector(".btn-left-slider").style.display = "none";
    }
    if (count < 60) {
      document.querySelector(
        ".row-slider-reserve-Thour-desktop"
      ).style.transform = `translateX(${(count += 20)}%)`;
    }
  };

  let oldx = 0;
  const SwiperThour = (e) => {
    document
      .querySelector(".row-slider-reserve-Thour-desktop")
      .addEventListener("mousemove", function () {
        if (e.pageX < oldx) {
          console.log("left");
          document.querySelector(".btn-right-slider").style.display = "flex";
          if (count >= 40) {
            document.querySelector(".btn-left-slider").style.display = "none";
          }
          if (count < 60) {
            document.querySelector(
              ".row-slider-reserve-Thour-desktop"
            ).style.transform = `translateX(${(count += 20)}%)`;
          }
        } else if (e.pageX > oldx) {
          console.log("right");
          document.querySelector(".btn-left-slider").style.display = "flex";
          if (count <= 20) {
            document.querySelector(".btn-right-slider").style.display = "none";
          }
          if (count > 0) {
            document.querySelector(
              ".row-slider-reserve-Thour-desktop"
            ).style.transform = `translateX(${(count -= 20)}%)`;
          }
        }
        oldx = e.pageX;
      });
  };

  const ValueOtherThour = [
    { name: "تور کیش" },
    { name: "تور استانبول" },
    { name: "تور کیش از کرمان" },
    { name: "تور کیش از شیراز" },
    { name: "تور کیش از اصفهان" },
    { name: "تور کیش از تبریز" },
    { name: "تور کیش از مشهد" },
    { name: "تور کیش از اهواز" },
  ];

  const ItemHotelThour = [
    {
      img: "image1-slider-hotel.jpg",
      name: "داریوش کیش",
      star: "5",
      price: "33,696,000",
    },
    {
      img: "image2-slider-hotel.jpg",
      name: "پانوراما کیش",
      star: "5",
      price: "39,758,000",
    },
    {
      img: "image3-slider-hotel.jpg",
      name: "آفتاب شرق کیش",
      star: "3",
      price: "19,600,000",
    },
    {
      img: "image4-slider-hotel.jpg",
      name: "میراژ کیش",
      star: "5",
      price: "27,090,000",
    },
    {
      img: "image5-slider-hotel.jpg",
      name: "پارسیان کیش",
      star: "3",
      price: "20,820,000",
    },
    {
      img: "image6-slider-hotel.jpg",
      name: "شباویز کیش",
      star: "2",
      price: "22,256,000",
    },
    {
      img: "image7-slider-hotel.jpg",
      name: "گراند کیش",
      star: "3",
      price: "34,402,000",
    },
    {
      img: "image8-slider-hotel.jpg",
      name: "شایگان کیش",
      star: "5",
      price: "38,728,000",
    },
  ];

  const ItemFilterBlit = [
    {
      id: 1,
      img: "img1-filter-blit.jpg",
      location: "تور گروهی استانبول",
      date: (
        <>
          خرداد - تیر - مرداد - شهریور
          <span></span>
          تور ۷ روزه - پرواز ترکیش - هتل ۵ ستاره
        </>
      ),
      price: "690",
      vahed: "دلار",
      caption: "+ ۱۹,۹۰۰,۰۰ تومان",
      filter: "خارجی",
    },
    {
      id: 2,
      img: "img2-filter-blit.jpg",
      location: "تور ژاپن",
      date: (
        <>
          ۵ تا ۱۶ مرداد
          <span></span>۵ تا ۱۶ مرداد
        </>
      ),
      price: "3,400",
      vahed: "دلار",
      caption: "+ پرواز + ویزا",
      filter: "خارجی",
    },
    {
      id: 3,
      img: "img3-filter-blit.jpg",
      location: "تور بزرگ استرالیا",
      date: (
        <>
          ۴ تا ۱۸ مرداد
          <span></span>
          تور ۱۵ روزه
        </>
      ),
      price: "5,890",
      vahed: "دلار",

      caption: "پرواز +",
      filter: "خارجی",
    },
    {
      id: 4,
      img: "img4-filter-blit.jpg",
      location: "تور مغولستان",
      date: (
        <>
          ۲۱ تیر تا ۱ مرداد
          <span></span>تور ۱۲ روزه
        </>
      ),
      price: "2,550",
      vahed: "دلار",
      caption: "+ پرواز + ویزا",
      filter: "خارجی",
    },
    {
      id: 5,
      img: "img5-filter-blit.jpg",
      location: "تور سافاری کنیا",
      date: (
        <>
          خرداد - تیر
          <span></span>تور ۷ روزه - پرواز - هتل
        </>
      ),
      price: "1,480",
      vahed: "دلار",
      caption: "+ پرواز + ویزا",
      filter: "خارجی",
    },
    {
      id: 6,
      img: "img6-filter-blit.jpg",
      location: "تور برزیل و جنگل‌های آمازون",
      date: (
        <>
          ۱۴ تا ۲۸ شهریور
          <span></span>تور ۱۴ روزه - پرواز - هتل
        </>
      ),
      price: "2,590",
      vahed: "دلار",
      caption: "+ پرواز + ویزا",
      filter: "خارجی",
    },
    {
      id: 7,
      img: "img7-filter-blit.jpg",
      location: "تور مسکو و سن‌پترزبورگ",
      date: (
        <>
          هر هفته روزهای جمعه و برگشت پنجشنبه هفته بعد
          <span></span>تور ۷ روزه
        </>
      ),
      price: "496,000,000 ",
      vahed: "ریال",
      caption: "",
      filter: "خارجی",
    },
    {
      id: 8,
      img: "img8-filter-blit.jpg",
      location: "تور جمهوری چک",
      date: (
        <>
          ۴ تا ۹ شهریور
          <span></span>تور ۶ روزه - پرواز - هتل
        </>
      ),
      price: "1,290",
      vahed: "یورو",
      caption: "+ 399,000,000 ریال",
      filter: "اروپا",
    },
    {
      id: 9,
      img: "img9-filter-blit.jpg",
      location: "تور مادرید و بارسلونا",
      date: (
        <>
          تیر - مرداد - شهریور
          <span></span>تور ۸ روزه - پرواز - هتل
        </>
      ),
      price: "1,890",
      vahed: "یورو",
      caption: "+ 399,000,000 ریال",
      filter: "اروپا",
    },
    {
      id: 10,
      img: "img10-filter-blit.jpg",
      location: "تور تبریز ( دارانداش  کندوان مرند)",
      date: (
        <>
          ۶ تا ۹ تیر
          <span></span>۳ روز و ۲ شب
        </>
      ),
      price: "76,000,000 ",
      vahed: "ریال",
      caption: "",
      filter: "داخلی",
    },
    {
      id: 11,
      img: "img11-filter-blit.jpg",
      location: " تور فرانسه (سوئیس)، ایتالیا",
      date: (
        <>
          ۱۲ تا ۲۲ مرداد
          <span></span>
          تور ۱۱ روزه - پرواز - هتل
        </>
      ),
      price: "2,490",
      vahed: "یورو",
      caption: "+ 399,000,000 ریال",
      filter: "اروپا",
    },
    {
      id: 12,
      img: "img12-filter-blit.jpg",
      location: "تور اسپانیا و پرتغال",
      date: (
        <>
          ۳ تا ۱۶ شهریور
          <span></span>
          تور ۱۴ روزه - پرواز - هتل
        </>
      ),
      price: "2,790",
      vahed: "یورو",
      caption: "+ 399,000,000 ریال",
      filter: "اروپا",
    },
    {
      id: 13,
      img: "img13-filter-blit.jpg",
      location: "تور اسپانیا و ایتالیا",
      date: (
        <>
          ۱۰ تا ۲۴ شهریور
          <span></span>
          تور ۱۵ روزه - پرواز - هتل
        </>
      ),
      price: "3,590",
      vahed: "یورو",
      caption: "+ 399,000,000 ریال",
      filter: "اروپا",
    },
    {
      id: 14,
      img: "img14-filter-blit.jpg",
      location: "تور دور اسپانیا و پرتغال",
      date: (
        <>
          <span></span>
        </>
      ),
      price: "3,190",
      vahed: "یورو",
      caption: "+ 399,000,000 ریال",
      filter: "اروپا",
    },
    {
      id: 15,
      img: "img15-filter-blit.jpg",
      location: "تور زوریخ و لوگانو",
      date: (
        <>
          ۲ تا ۹ شهریور - ۱۶ تا ۲۳ شهریور
          <span></span>
          تور ۸ روزه - پرواز - هتل
        </>
      ),
      price: "1,890",
      vahed: "یورو",
      caption: "+ 399,000,000 ریال",
      filter: "اروپا",
    },
    {
      id: 16,
      img: "img16-filter-blit.jpg",
      location: "تور کشمیر",
      date: (
        <>
          ۹ تا ۱۷ تیر - ۲۳ تا ۳۱ تیر
          <span></span>
          تور ۸ روزه
        </>
      ),
      price: "950",
      vahed: "دلار",
      caption: "+ پرواز + ویزا",
      filter: "خارجی",
    },
    {
      id: 17,
      img: "img17-filter-blit.jpg",
      location: "تور ویتنام",
      date: (
        <>
          ۱۴ تا ۲۵ شهریور
          <span></span>
          تور ۱۲ روزه
        </>
      ),
      price: "1,890",
      vahed: "دلار",
      caption: "+ پرواز + ویزا",
      filter: "خارجی",
    },
  ];

  let count2 = 0;
  const ScrollRightHotelThour = () => {
    document.querySelector(".btn-left-slider2").style.display = "flex";
    if (count2 <= 26.5) {
      document.querySelector(".btn-right-slider2").style.display = "none";
    }
    if (count2 > 0) {
      document.querySelector(
        ".slider-hotel-thour"
      ).style.transform = `translateX(${(count2 -= 26.5)}%)`;
    }
  };
  const ScrollLeftHotelThour = () => {
    document.querySelector(".btn-right-slider2").style.display = "flex";
    if (count2 >= 79.5) {
      document.querySelector(".btn-left-slider2").style.display = "none";
    }
    if (count2 < 106) {
      document.querySelector(
        ".slider-hotel-thour"
      ).style.transform = `translateX(${(count2 += 26.5)}%)`;
    }
  };

  const [ValueFilter, SetValueFilter] = useState("همه");

  const AlllocationLength = ItemFilterBlit.length;
  const [LengthFilter, SetLengthFilter] = useState(AlllocationLength);

  const EuropaLength = ItemFilterBlit.filter(
    (item) => item.filter === "اروپا"
  ).length;
  const OutSideLength = ItemFilterBlit.filter(
    (item) => item.filter === "خارجی"
  ).length;
  const InSideLength = ItemFilterBlit.filter(
    (item) => item.filter === "داخلی"
  ).length;

  const [SlideValue, SetSlideValue] = useState(0);

  const SlideToLeft = () => {
    if (LengthFilter > 4) {
      if (SlideValue < (LengthFilter - 4) * 25) {
        SetClassBtnRSlider("enabled-btn");
        SetSlideValue((prev) => prev + 25);
      } else {
        SetClassBtnLSlider("disabled-btn");
      }
    }
  };
  const SlideToRight = () => {
    if (LengthFilter > 4) {
      if (25 <= SlideValue) {
        SetClassBtnLSlider("enabled-btn");
        SetSlideValue((prev) => prev - 25);
      } else {
        SetClassBtnRSlider("disabled-btn");
      }
    }
  };
  const [ClassBtnRSlider, SetClassBtnRSlider] = useState("enabled-btn");
  const [ClassBtnLSlider, SetClassBtnLSlider] = useState("enabled-btn");

  return (
    <div className="thour-desktop">
      <Header />
      <Bgservices img="./assets/image/HomeImage/tour.jpg" />
      <div className="main">
        <Services
          ItemServices={item_services}
          BottomBottomServices={<ServicesTour />}
          TopBottomServices={<ServicesbtnsTour />}
        />

        <div className="container-filter-blit">
          <div className="header-filter-blit">
            <h2> آغاز ماجراجویی اینجاست </h2>
            <p> تورهای گروهی علی‌بابا، تجربه‌ای ناب از سفر </p>
          </div>
          <div className="body-filter-blit">
            <div className="header-body-filter-blit">
              <div className="menu-body-filter-blit">
                <ul>
                  <li
                    className={ValueFilter === "همه" && "active-filter-blit"}
                    onClick={() => {
                      SetValueFilter("همه");
                      SetLengthFilter(AlllocationLength);
                      SetSlideValue(0);
                    }}
                  >
                    همه
                  </li>
                  <li
                    className={ValueFilter === "اروپا" && "active-filter-blit"}
                    onClick={() => {
                      SetValueFilter("اروپا");
                      SetLengthFilter(EuropaLength);
                      SetSlideValue(0);
                    }}
                  >
                    تور اروپا
                  </li>
                  <li
                    className={ValueFilter === "خارجی" && "active-filter-blit"}
                    onClick={() => {
                      SetValueFilter("خارجی");
                      SetLengthFilter(OutSideLength);
                      SetSlideValue(0);
                    }}
                  >
                    تور خارجی
                  </li>
                  <li
                    className={ValueFilter === "داخلی" && "active-filter-blit"}
                    onClick={() => {
                      SetValueFilter("داخلی");
                      SetLengthFilter(InSideLength);
                      SetSlideValue(0);
                    }}
                  >
                    تور داخلی
                  </li>
                </ul>
              </div>
              <div className="btns-body-filter-blit">
                <div
                  className={"btn-slider btn-right-slider3 " + ClassBtnRSlider}
                  onClick={SlideToRight}
                >
                  <Arrow />
                </div>
                <div
                  className={"btn-slider btn-left-slider3 " + ClassBtnLSlider}
                  onClick={SlideToLeft}
                >
                  <Arrow />
                </div>
                <Link to=""> مشاهده همه‌ی تورها </Link>
              </div>
            </div>
            <div className="container-main-body-filter-blit">
              <div
                className="main-body-filter-blit"
                style={{ transform: `translateX(${SlideValue}%)` }}
              >
                {ItemFilterBlit.map(
                  (item) =>
                    ValueFilter === "همه" && (
                      <Link to="">
                        <div className="item-filter-blit">
                          <img src={"/assets/image/thour/" + item.img} alt="" />
                          <h3>{item.location}</h3>
                          <div className="date-filter-blit">{item.date}</div>
                          <div className="caption-filter-blit">
                            <p>شروع قیمت از </p>
                            <div>
                              <p>
                                <span>{item.price}</span> {item.vahed}
                              </p>
                              <p>{item.location}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                )}
                {ItemFilterBlit.map(
                  (item) =>
                    ValueFilter === "اروپا" &&
                    item.filter === "اروپا" && (
                      <Link to="">
                        <div className="item-filter-blit">
                          <img src={"/assets/image/thour/" + item.img} alt="" />
                          <h3>{item.location}</h3>
                          <div className="date-filter-blit">{item.date}</div>
                          <div className="caption-filter-blit">
                            <p>شروع قیمت از </p>
                            <div>
                              <p>
                                <span>{item.price}</span> {item.vahed}
                              </p>
                              <p>{item.location}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                )}
                {ItemFilterBlit.map(
                  (item) =>
                    ValueFilter === "داخلی" &&
                    item.filter === "داخلی" && (
                      <Link to="">
                        <div className="item-filter-blit">
                          <img src={"/assets/image/thour/" + item.img} alt="" />
                          <h3>{item.location}</h3>
                          <div className="date-filter-blit">{item.date}</div>
                          <div className="caption-filter-blit">
                            <p>شروع قیمت از </p>
                            <div>
                              <p>
                                <span>{item.price}</span> {item.vahed}
                              </p>
                              <p>{item.location}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                )}
                {ItemFilterBlit.map(
                  (item) =>
                    ValueFilter === "خارجی" &&
                    item.filter === "خارجی" && (
                      <Link to=''>
                        <div className="item-filter-blit">
                          <img src={"/assets/image/thour/" + item.img} alt="" />
                          <h3>{item.location}</h3>
                          <div className="date-filter-blit">{item.date}</div>
                          <div className="caption-filter-blit">
                            <p>شروع قیمت از </p>
                            <div>
                              <p>
                                <span>{item.price}</span> {item.vahed}
                              </p>
                              <p>{item.location}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        <OtherServiceDesktop />
        <div className="reserve-vila">
          <div className="content-reserve-vila">
            <h2>گارانتی بهترین قیمت</h2>
            <p>
              داستان بسیار ساده است. برای اینکه مطمئن باشید بهترین قیمت تور در
              علی‌بابا ارائه شده است، می‌توانید باز هم در مورد تور جستجو کنید.
              اگر همان تور را با قیمت پایین‌تری در جایی دیگر دیدید، این موضوع را
              به علی‌بابا اطلاع دهید. پس از بررسی این موضوع، علی‌بابا با تخفیفی
              معادل دو برابر این اختلاف قیمت برایتان تور رزرو می‌کند.
              <br />
              <Link to="">بیشتر بخوانید</Link>
            </p>
          </div>
          <div className="container-slider">
            <div
              className="btn-slider btn-right-slider"
              onClick={ScrollRightThour}
            >
              <Arrow />
            </div>
            <div
              className="btn-slider btn-left-slider"
              onClick={ScrollLeftThour}
            >
              <Arrow />
            </div>
            <div
              className="slider-reserve-vila slider-reserve-Thour"
              onMouseDown={SwiperThour}
            >
              <div className="row-slider-reserve-vila row-slider-reserve-Thour-desktop">
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (4).jpg"
                    }
                    title={"تور تهران به کیش"}
                    price={"29,252,000"}
                    ForWhat={"نفر"}
                  />
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (0).jpg"
                    }
                    title={"تور اصفهان به کیش"}
                    price={"18,060,000"}
                    ForWhat={"نفر"}
                  />
                </div>
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (9).jpg"
                    }
                    title={"تور تهران به مشهد"}
                    price={"18,228,000"}
                    ForWhat={"نفر"}
                  />
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (2).jpg"
                    }
                    title={"تور مشهد به کیش"}
                    price={"24,465,000"}
                    ForWhat={"نفر"}
                  />
                </div>
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (3).jpg"
                    }
                    title={"تور شیراز به کیش"}
                    price={"15,540,000"}
                    ForWhat={"نفر"}
                  />
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (1).jpg"
                    }
                    title={"تور تهران به استانبول"}
                    price={"61,719,000"}
                    ForWhat={"نفر"}
                  />
                </div>
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (8).jpg"
                    }
                    title={"تور تهران به قشم"}
                    price={"27,940,000"}
                    ForWhat={"نفر"}
                  />
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (5).jpg"
                    }
                    title={"تور تبریز به کیش"}
                    price={"39,156,000"}
                    ForWhat={"نفر"}
                  />
                </div>
                <div className="col-slider-reserve-vila">
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (6).jpg"
                    }
                    title={"تور اهواز به کیش"}
                    price={"24,416,000"}
                    ForWhat={"نفر"}
                  />
                  <ItemSliderReserveVila
                    src={
                      "/assets/image/thour/Tour-Homepage-PriceGuarantee (7).jpg"
                    }
                    title={"تور ساری به کیش"}
                    price={"22,763,000"}
                    ForWhat={"نفر"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-khadamat-vizhe">
          <h2>خدمات ویژه تور</h2>
          <p>
            سفر به کیش همیشه یکی از گزینه‌های روی میز است. جزیره‌ای آرام و زیبا
            در خلیج فارس که به خاطر داشتن امکانات رفاهی و تفریحی فراوانش،
            گردشگران را به وسوسه می‌اندازد که نه یک بار که چند بار، سفر به این
            جزیره را تجربه کنند. حالا اگر بخواهید تور کیش را از علی بابا رزرو
            کنید، علاوه بر آنکه خیالتان از رزرو تور با بهترین قیمت بازار راحت
            است، می‌توانید از هدیه ویژه علی بابا هم استفاده کنید. این هدیه ویژه
            کسانی است که از امکان خرید تور با بهترین قیمت استفاده کرده‌اند.
          </p>
          <Link to="">بیشتر بخوانید</Link>
        </div>

        <div className="content-other-thour mb-64">
          <h2> سایر تورهای علی‌بابا </h2>
          <p>
            {" "}
            برای افرادی که به تازگی پا به عرصه ی گردشگری گذاشته‌اند، سفر با تور
            بهترین گزینه است. چرا که راهنمایان تور به خاطر تجربه‌های زیادی که
            دارند، اطلاعات خیلی دقیقی از مقصد گردشگری دارند و استفاده از دانش
            آن‌ها می تواند ناشناخته‌هایی از مقصد رویایی‌تان را به شما نشان دهد و
            صد در صد دانستن برخی اطلاعات بهتر از این است که شما فقط آن منطقه را
            ببینید. تور خارجی و داخلی علی‌بابا خاطره یک سفر رویایی را برای شما
            به ارمغان خواهند آورد.{" "}
          </p>
        </div>

        <div className="container-slider container-slider-hotel-thour mb-64">
          <div
            className="btn-slider btn-right-slider2"
            onClick={ScrollRightHotelThour}
          >
            <Arrow />
          </div>
          <div
            className="btn-slider btn-left-slider2"
            onClick={ScrollLeftHotelThour}
          >
            <Arrow />
          </div>
          <div className="slide-slider-hotel-thour">
            <div className="slider-hotel-thour">
              {ItemHotelThour.map((item) => (
                <Link to="">
                  <div className="item-slider-hotel-thour">
                    <img src={"/assets/image/thour/" + item.img} alt="" />
                    <h5>هتل {item.name}</h5>
                    <div className="box-item-slider-hotel-thour">
                      <div className="content-slider-hotel-thour">
                        <span>★ {item.star} ستاره . 1 شب و 2 روز</span>
                        <span>
                          <strong>{item.price}</strong>
                          ریال
                        </span>
                        <p>برای ۱ نفر شامل هتل، پرواز، خدمات</p>
                      </div>
                      <div className="btn-slider-hotel-thour">
                        جزئیات و خرید
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="cards-thour mb-64">
          {ValueOtherThour.map((item) => (
            <CardHotel text={item.name} on={true} />
          ))}
        </div>
      </div>

      <Footer
        conditional={true}
        IdMore="moretrainmobile"
        IdMoreDesktop="moretraindesktop"
      />
    </div>
  );
};

export default ThourDesktop;
