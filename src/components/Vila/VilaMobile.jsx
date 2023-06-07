import React, { useRef, useState } from "react";
import BoxVila from "../EjareVila/BoxVila";
import EjareVila from "../EjareVila/EjareVila";
import ItemSliderReserveVila from "../EjareVila/ItemSliderVila";
import Footer from "../Footer/Footer";
import VilaContent from "../HomePageContent/VilaContent";
import { Add, ArrowRight, Location, Remove, Date } from "../icons/Icons";
import SearchInput from "../SearchInput/SearchInput";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import DropStartLocation from "../services/Dropdownservices/DropStartLocation";
import { Link } from "react-router-dom";

const VilaMobile = () => {
  const NumberHorofi = [
    "یک",
    "دو",
    "سه",
    "چهار",
    "پنج",
    "شیش",
    "هفت",
    "هشت",
    "نه",
    "ده",
    "یازده",
    "دوازده",
    "سیزده",
    "چهارده",
    "پانزده",
    "شانزده",
    "هفده",
    "هجده",
    "نوزده",
    "بیست",
    "بیست و یک",
    "بیست و دو",
    "بیست و سه",
    "بیست و چهار",
    "بیست و پنج",
    "بیست و شیش",
    "بیست و هفت",
    "بیست و هشت",
    "بیست و نه",
    "سی",
    "سی و یک",
    "سی و دو",
    "سی و سه",
    "سی و چهار",
    "سی و پنج",
    "سی و شیش",
    "سی و هفت",
    "سی و هشت",
    "سی و نه",
    "چهل",
    "چهل و یک",
    "چهل و دو",
    "چهل و سه",
    "چهل و چهار",
    "چهل و پنج",
    "چهل و شیش",
    "چهل و هفت",
    "چهل و هشت",
    "چهل و نه",
    "پنجاه",
    "پنجاه و یک",
    "پنجاه و دو",
    "پنجاه و سه",
    "پنجاه و چهار",
    "پنجاه و پنج",
    "پنجاه و شیش",
    "پنجاه و هفت",
    "پنجاه و شهت",
    "پنجاه و نه",
    "شصت",
    "شصت و یک",
    "شصت و دو",
    "شصت و سه",
    "شصت و چهار",
    "شصت و پنج",
    "شصت و شیش",
    "شصت و هفت",
    "شصت و هشت",
    "شصت و نه",
    "هفتاد",
    "هفتاد و یک",
    "هفتاد و دو",
    "هفتاد و سه",
    "هفتاد و چهار",
    "هفتاد و پنج",
    "هفتاد و شیش",
    "هفتاد و هفت",
    "هفتاد و هشت",
    "هفتاد و نه",
    "هشتاد",
    "هشتاد و یک",
    "هشتاد و دو",
    "هشتاد و سه",
    "هشتاد و چهار",
    "هشتاد و پنج",
    "هشتاد و شیش",
    "هشتاد و هفت",
    "هشتاد و هشت",
    "هشتاد و نه",
    "نود",
    "نود و یک",
    "نود و دو",
    "نود و سه",
    "نود و چهار",
    "نود و پنج",
    "نود و شیش",
    "نود و هفت",
    "نود و هشت",
    "نود و نه",
    "صد",
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
  const inputVilaMobile0 = useRef(0);
  const LabelVilaMobile0 = useRef(0);
  const inputVilaMobile1 = useRef(0);
  const LabelVilaMobile1 = useRef(0);
  const inputVilaMobile2 = useRef(0);
  const LabelVilaMobile2 = useRef(0);
  const inputVilaMobile3 = useRef(0);
  const LabelVilaMobile3 = useRef(0);

  const [people, setpeople] = useState(1);
  const Increment = () => {
    document.querySelector(".BtnDecrement").classList.remove("disabled");

    if (people >= 99) {
      document.querySelector(".BtnIncrement").classList.add("disabled");
    }
    if (people < 100) {
      setpeople((people) => people + 1);
    }
  };
  const Decrement = () => {
    document.querySelector(".BtnIncrement").classList.remove("disabled");

    if (people <= 2) {
      document.querySelector(".BtnDecrement").classList.add("disabled");
    }
    if (people > 1) {
      setpeople((people) => people - 1);
    }
  };
  const items_dropdown = [
    "اقامتگاه های شهر تهران",
    "اقامتگاه های شهر کردان",
    "اقامتگاه های شهر رامسر",
    "اقامتگاه های شهر چالوس",
    "اقامتگاه های شهر متل قو (سلمانشهر)",
    "اقامتگاه های شهر رشت",
    "اقامتگاه های شهر بندر انزلی",
    "اقامتگاه های شهر مشهد",
    "اقامتگاه های شهر نوشهر",
  ];

  const [open, setopen] = useState(false);
  const BgVila = useRef(0);
  const DropdownVila = useRef(0);

  const OpenMenu = () => {
    BgVila.current.style.display = "inline";
    DropdownVila.current.style.display = "inline";
    setopen(true);
  };
  const CloseMenu = () => {
    BgVila.current.style.display = "none";
    DropdownVila.current.style.display = "none";
    setopen(false);
  };

  const [Maghsad, SetMaghsad] = useState("");
  const PutItem = (e) => {
    SetMaghsad(e.target.innerText);

    BgVila.current.style.display = "none";
    DropdownVila.current.style.display = "none";
    setopen(false);

    LabelVilaMobile0.current.classList.add("labelfix");
    LabelVilaMobile1.current.classList.add("labelfix");
  };
  return (
    <div className="vila-mobile">
      <div className="bg-vila-mobile" ref={BgVila} onClick={CloseMenu}></div>
      <div className="dropdown-services-mobile" ref={DropdownVila}>
        <div className="head-dropdown-services-mobile" onClick={CloseMenu}>
          <ArrowRight />
          <p>مقصد یا نوع اقامتگاه</p>
        </div>
        <div className="item-services-mobile">
          <Location />
          <SearchInput
            label="مقصد یا نوع اقامتگاه"
            refinput={inputVilaMobile0}
            refLabel={LabelVilaMobile0}
            valueInput={Maghsad}
          />
        </div>
        <DropStartLocation
          classdropdown="body-dropdown-services-mobile"
          itemsDropdown={items_dropdown}
          handleclick={PutItem}
        />
      </div>
      <div className="header-vila-mobile">
        <p>اقامتگاه</p>
        <Link to='/'>
          <ArrowRight />
        </Link>
      </div>
      <div className="services-mobile">
        <div className="item-services-mobile">
          <Location />
          <SearchInput
            label="مقصد یا نوع اقامتگاه"
            refinput={inputVilaMobile1}
            refLabel={LabelVilaMobile1}
            valueInput={Maghsad}
            handleclick={OpenMenu}
          />
        </div>
        <div className="item-services-mobile border-between">
          <Date />
          <SearchInput
            label="تاریخ ورود"
            refinput={inputVilaMobile2}
            refLabel={LabelVilaMobile2}
          />
          <SearchInput
            label="تاریخ خروج"
            refinput={inputVilaMobile3}
            refLabel={LabelVilaMobile3}
          />
        </div>
        <div className="item-services-mobile">
          <SearchInput
            label="تعداد مسافران"
            valueInput={NumberHorofi[people - 1] + " نفر "}
            classlabel="labelfix"
          />
          <div className="chose-number">
            <div onClick={Increment} className="BtnIncrement">
              <Add />
            </div>
            <span>{people}</span>
            <div onClick={Decrement} className="BtnDecrement disabled">
              <Remove />
            </div>
          </div>
        </div>
        <div className="btn-services-mobile">
          <ButtonSearch />
        </div>
      </div>
      <div className="main">
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
            <div className="slider-reserve-vila">
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
        <div className="vila-content-mobile">
          <VilaContent />
        </div>
        <div className="btns-ejare-vila">
          {ContentEjareVila.map((item) => (
            <EjareVila text={item} link={"./"} />
          ))}
        </div>
      </div>
      <Footer
        conditional={true}
        IdMore="moreVilaMobile"
        IdMoreDesktop="moreVilaMobile"
      />
    </div>
  );
};
export default VilaMobile;
