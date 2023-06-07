import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Questions from "../Yourquestion/YourQuestion";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import {
  Add,
  ArrowRight,
  Close,
  Date,
  Location,
  Plus,
  PlusServices,
  Remove,
  Switch,
  ToggleDownIcon,
  WarnningIcon,
} from "../icons/Icons";
import SearchInput from "../SearchInput/SearchInput";
import DropdownNumber from "../services/Dropdownservices/DropdownNumber";
import DropStartLocation from "../services/Dropdownservices/DropStartLocation";
import AirplanOutSideContent from "../HomePageContent/AirplanOutSideContent";
import BtnsServices from "../BtnsServices/BtnsServices";
import { Link } from "react-router-dom";

const AirplanOutSideMobile = () => {
  const content_item_your_question_AirlanInside = [
    {
      id: "item1-questions-airplaninside-mobile",
      title: `بلیط پرواز چه کشورها و ایرلاین‌هایی را می‌توانم‌ در سایت علی‌بابا جستجو و خریداری کنم؟`,
      description: `بلیط تمام خطوط هوایی دنیا در سایت علی‌بابا موجود است، چه پروازهایی که مبدا یا مقصد آنها ایران است و چه پروازهای داخلی دورترین کشورهای دنیا. پروازهای ایرلاین‌هایی مثل لوفت‌هانزا، امارات، قطرایرویز، ترکیش‌ایر، ایرفرانس، کی‌ال‌ام، آئروفلوت، آلیتالیا، اوکراینی، ایرایژیا، پگاسوس و ده‌ها ایرلاین دیگر در علی‌بابا قابل تهیه هستند. همچنین بلیط پروازهای خارجیِ شرکت های هواپیمایی داخلی مانند ماهان، ایران‌ایر، قشم ایر، آتا و .. نیز روی سایت علی‌بابا به فروش می‌رسد.`,
    },
    {
      id: "item2-questions-airplaninside-mobile",
      title: `چطور می توانم در مورد مقررات پرواز یا ویزا مربوط به سفرم اطمینان پیدا کنم؟`,
      description: `حتما قبل از انتخاب پرواز خود در مورد مقررات پرواز و قوانین مربوط به ویزا تحقیق کنید (مثلا ممکن است مقصد سفر شما نیاز به ویزا نداشته باشد ولی برای توقفی که در مسیر دارد نیاز به ویزای ترانزیت داشته باشید). برای این کار به صفحه قوانین و مقررات پرواز خارجی مراجعه کنید و در صورتی که نیاز به اطلاعات بیشتری داشتید با پشتیبانی علی‌بابا تماس بگیرید.
        ۰۲۱-۴۳۹۰۰۰۰۰ : شماره تماس`,
    },
    {
      id: "item3-questions-airplaninside-mobile",
      title: `آیا برای خرید بلیط ایرلاین‌های خارجی، نیازی به کردیت‌کارت یا روش‌های پرداخت ارزی خواهم داشت؟`,
      description: `به هیچ وجه. شما هزینه‌ بلیط را به صورت ریالی و با کارت‌های شتابی که در دست دارید، تنها با داشتن رمز دوم کارت پرداخت می کنید و بلیط شما بلافاصله صادر خواهد شد و قابل استفاده خواهد بود.`,
    },
    {
      id: "item4-questions-airplaninside-mobile",
      title: `آیا ساعت، قیمت و دیگر مشخصات پروازها روی سایت علی‌بابا قطعی است؟`,
      description: `بله، آنچه پس از جستجوی پرواز مورد نظر خود روی سایت علی‌بابا می‌بینید، برنامه قطعی پروازهای ایرلاین‌هاست که به ریال محاسبه شده است. اگر احیانا تغییری در ساعت یا برنامه‌ی پرواز به وجود بیاید، از طریق پشتیبانی سایت علی‌بابا به اطلاع شما خواهد رسید.`,
    },
    {
      id: "item5-questions-airplaninside-mobile",
      title: `آیا پروازهای چارتر خارجی هم روی سایت علی‌بابا عرضه می‌شود؟`,
      description: `بله. بلیط کلیه‌ی پروازهای چارتر خارجی که از سوی ایرلاین‌های داخلی یا خارجی برای فروش عرضه می‌شوند را می‌توانید روی سایت علی‌بابا ببینید.`,
    },
    {
      id: "item6-questions-airplaninside-mobile",
      title: `چطور می توانم برای سفرم ارزان ترین بلیط ممکن را تهیه کنم؟`,
      description: `ارزان بودن بلیط سفر به عوامل مختلفی مرتبط است که برخی از مهم ترین آنها این موارد هستند:
در پروازهای سیستمی معمولا هرچه به زمان پرواز نزدیک تر می شویم به دلیل پر شدن کلاس نرخی های ارزان تر، قیمت آن افزایش پیدا می کند. معمولا هرچه زودتر پروازتان را بخرید ارزان تر است. بلیط ایرلاین های مختلف را چک کنید. برای اغلب مسیرها ایرلاین های کم هزینه (Low Cost Airline) وجود دارند که در ازای خدمات و امکانات کمتر، پروازهای ارزان تری به شما پیشنهاد می دهند. در روزهای مختلف سال، فصل و هفته و حتی ساعات متفاوت، قیمت یک پرواز ممکن است تغییرات زیادی داشته باشد. با استفاده از تقویم قیمتی و فیلترهای تعبیه شده جستجو می توانید با چند روز جابجایی پروازهای به مراتب ارزان تری پیدا کنید. علاوه بر این، پروازهای توقف دار و صبح زود هم معمولا پروازهای ارزان تری هستند. بلیط خود را از سایت های معتبر خریداری کنید و قیمت آنها را در ازای خدمتی که می دهند با هم مقایسه کنید. با در نظر گرفتن این موارد می توانید هوشمندانه، بهترین و ارزان ترین پرواز را برای سفر خود تهیه کنید.`,
    },
    {
      id: "item7-questions-airplaninside-mobile",
      title: `تقویم قیمتی (Flexible Date) چیست و چه کمکی به من می‌کند؟`,
      description: `تقویم قیمتی امکان مقایسه قیمت های روزهای نزدیک به جستجو را به شما می دهد. با کلیلک روی نوار سبز رنگ تقویم قیمتی، قیمت بلیط‌های ۳ روز قبل و ۳ روز بعد از تاریخ مورد نظر شما در جدولی نمایش داده می‌شود و به این ترتیب می‌توانید با تغییر کوچکی در برنامه‌ی سفر خود، هزینه‌ی بلیط را حتی تا نصف کاهش دهید!`,
    },
    {
      id: "item8-questions-airplaninside-mobile",
      title: `بهترین پروازها (Best Flights) چه پروازهایی هستند؟`,
      description: `در هر جستجویی که انجام می دهید، به صورت پیش فرض در ابتدای فهرست با پروازهایی روبرو می شوید که به عنوان بهترین پروازها به شما معرفی می شوند. در الگوریتم گزینش و نمایش این پروازها هر دو فاکتور قیمت و مدت زمان سفر در نظر گرفته شده است.`,
    },
    {
      id: "item9-questions-airplaninside-mobile",
      title: `چگونه می توانم بلیط پروازم را کنسل کنم یا تغییر دهم و از شرایط و جریمه آن مطلع شوم؟`,
      description: `برای اطلاع دقیق از شرایط و جریمه کنسلی یا تغییر بلیط پرواز مورد نظرتان در هر ساعتی از شبانه روز می توانید با پشتیبانی علی‌بابا تماس بگیرید.`,
    },
    {
      id: "item10-questions-airplaninside-mobile",
      title: `برای سوار شدن به هواپیما چه زمانی باید در فرودگاه باشم و چه مدارکی مورد نیاز است؟`,
      description: `برای اینکه بدون دغدغه سفر خود را آغاز کنید باید حداقل دو ساعت قبل از پرواز در فرودگاه حضور داشته باشید. برای پرواز نیازی به داشتن پرینت بلیط ندارید و تصویر و شماره بلیط به همراه مدارک شناسایی کفایت می کند.`,
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

  const LabelVilaMobile4 = useRef(0);

  const LabelVilaMobile5 = useRef(0);
  const inputVilaMobile5 = useRef(0);
  const items_dropdown = [
    "تهران",
    "مشهد",
    "یزد",
    "بندرعباس",
    "قم",
    "تبریز",
    "کرمان",
    "شیراز",
    "اهواز",
    "اصفهان",
  ];

  const [open, setopen] = useState(false);
  const BgVila = useRef(0);
  const DropdownVila = useRef(0);

  const OpenMenu = () => {
    BgVila.current.style.display = "inline";
    DropdownVila.current.style.display = "inline";
  };
  const CloseMenu = () => {
    BgVila.current.style.display = "none";
    DropdownVila.current.style.display = "none";
    DropdownVila2.current.style.display = "none";
    SetClassDropdownPassenger("hide-dropdown-services");
    SetClassParvazDropdown("hide-ClassParvaz");
  };

  const [Maghsad, SetMaghsad] = useState("");
  const PutItem = (e) => {
    SetMaghsad(e.target.innerText);

    BgVila.current.style.display = "none";
    DropdownVila.current.style.display = "none";

    LabelVilaMobile0.current.classList.add("labelfix");
    LabelVilaMobile1.current.classList.add("labelfix");
  };

  const DropdownVila2 = useRef(0);

  const OpenMenu2 = () => {
    BgVila.current.style.display = "inline";
    DropdownVila2.current.style.display = "inline";
  };

  const [Maghsad2, SetMaghsad2] = useState("");
  const PutItem2 = (e) => {
    SetMaghsad2(e.target.innerText);

    BgVila.current.style.display = "none";
    DropdownVila2.current.style.display = "none";

    LabelVilaMobile4.current.classList.add("labelfix");
    LabelVilaMobile2.current.classList.add("labelfix");
  };
  const CloseMenu2 = () => {
    BgVila.current.style.display = "none";
    DropdownVila2.current.style.display = "none";
  };
  function switchvalue() {
    if (
      inputVilaMobile1.current.value.length >= 1 &&
      inputVilaMobile2.current.value.length >= 1
    ) {
      let x = inputVilaMobile1.current.value;
      let y = inputVilaMobile2.current.value;
      inputVilaMobile1.current.value = y;
      inputVilaMobile2.current.value = x;
    }
  }
  const checkkhodro = useRef(0);

  const [input, setinput] = useState(false);
  const [people, setpeople] = useState(1);

  const NumberHorofi = ["یک", "دو", "سه", "چهار", "پنج"];
  const inputstart4 = useRef(0);
  const Labelstart4 = useRef(0);
  const Increment = () => {
    document.querySelector(".BtnDecrementmobile").classList.remove("disabled");

    if (people >= 4) {
      document.querySelector(".BtnIncrementmobile").classList.add("disabled");
    }
    if (people < 5) {
      setpeople((people) => people + 1);
    }
  };
  const Decrement = () => {
    document.querySelector(".BtnIncrementmobile").classList.remove("disabled");

    if (people <= 2) {
      document.querySelector(".BtnDecrementmobile").classList.add("disabled");
    }
    if (people > 1) {
      setpeople((people) => people - 1);
    }
  };

  const [ChoseServices, SetChoseServices] = useState("یک طرفه");

  const inputpassenger = useRef(0);
  const [NumberPassenger, SetNumberPassenger] = useState(1);

  const [AdultPassenger, SetAdultPassenger] = useState(1);
  const [KidPassenger, SetKidPassenger] = useState(0);
  const [ChildrPassenger, SetChildrPassenger] = useState(0);

  function incrementNumber() {
    if (NumberPassenger < 9) {
      SetNumberPassenger((prev) => prev + 1);

      SetAdultPassenger((prev) => prev + 1);

      if (AdultPassenger >= 1) {
        document
          .querySelectorAll(".btndecrementmobile")[0]
          .classList.remove("disabled");
      }
    }
    inputpassenger.current.value = NumberPassenger;
  }
  function decrementNumber() {
    if (NumberPassenger > 1 && AdultPassenger > 1) {
      SetNumberPassenger((prev) => prev - 1);

      SetAdultPassenger((prev) => prev - 1);

      if (AdultPassenger <= 1) {
        document
          .querySelectorAll(".btndecrementmobile")[0]
          .classList.add("disabled");
      }
    }
    inputpassenger.current.value = NumberPassenger;
  }

  function incrementNumber2() {
    if (NumberPassenger < 9) {
      SetNumberPassenger((prev) => prev + 1);

      SetKidPassenger((prev) => prev + 1);

      if (KidPassenger >= 0) {
        document
          .querySelectorAll(".btndecrementmobile")[1]
          .classList.remove("disabled");
      }
    }
    inputpassenger.current.value = NumberPassenger;
  }
  function decrementNumber2() {
    if (NumberPassenger >= 1 && KidPassenger > 0) {
      SetNumberPassenger((prev) => prev - 1);

      SetKidPassenger((prev) => prev - 1);

      if (KidPassenger <= 1) {
        document
          .querySelectorAll(".btndecrementmobile")[1]
          .classList.add("disabled");
      }
    }

    inputpassenger.current.value = NumberPassenger;
  }

  function incrementNumber3() {
    if (NumberPassenger < 9) {
      SetNumberPassenger((prev) => prev + 1);
      SetChildrPassenger((prev) => prev + 1);

      if (ChildrPassenger >= 0) {
        document
          .querySelectorAll(".btndecrementmobile")[2]
          .classList.remove("disabled");
      }
    }
    inputpassenger.current.value = NumberPassenger;
  }
  function decrementNumber3() {
    if (NumberPassenger >= 1 && ChildrPassenger > 0) {
      SetNumberPassenger((prev) => prev - 1);

      SetChildrPassenger((prev) => prev - 1);

      if (ChildrPassenger <= 1) {
        document
          .querySelectorAll(".btndecrementmobile")[2]
          .classList.add("disabled");
      }
    }
    inputpassenger.current.value = NumberPassenger;
  }

  const [ClassDropdownPassenger, SetClassDropdownPassenger] = useState(
    "hide-dropdown-services"
  );
  function ShowDropdownPassengers() {
    SetClassDropdownPassenger("show-dropdown-services");
    BgVila.current.style.display = "inline";
  }
  function HideDropdownPassengers() {
    SetClassDropdownPassenger("hide-dropdown-services");
    BgVila.current.style.display = "none";
  }

  const [ActiveChoseBtn, SetActiveChoseBtn] = useState("OutSide");

  const [ClassParvazDropdown, SetClassParvazDropdown] =
    useState("hide-ClassParvaz");

  const ClassParvaz = [
    { name: "اکونومی", id: "1" },
    { name: "پرمیوم اکونومی", id: "2" },
    { name: "بیزینس", id: "3" },
    { name: "پرمیوم بیزینس", id: "4" },
    { name: "فرست", id: "5" },
    { name: "پرمیوم فرست", id: "6" },
  ];

  const ShowClassParvaz = () => {
    SetClassParvazDropdown("show-ClassParvaz");
    BgVila.current.style.display = "inline";
  };

  const [ValueClassParvaz, SetValueClassParvaz] = useState("اکونومی");

  const HideClassParvaz = () => {
    SetClassParvazDropdown("hide-ClassParvaz");
    BgVila.current.style.display = "none";
  };
  return (
    <div className="vila-mobile airlaneoutside-mobile">
      <div className="bg-vila-mobile" ref={BgVila} onClick={CloseMenu}></div>
      <div className="dropdown-services-mobile" ref={DropdownVila}>
        <div className="head-dropdown-services-mobile" onClick={CloseMenu}>
          <ArrowRight />
          <p>انتخاب مبدا</p>
        </div>
        <div className="item-services-mobile">
          <Location />
          <SearchInput
            label="انتخاب مبدا"
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
      <div className="dropdown-services-mobile" ref={DropdownVila2}>
        <div className="head-dropdown-services-mobile" onClick={CloseMenu2}>
          <ArrowRight />
          <p>انتخاب مقصد</p>
        </div>
        <div className="item-services-mobile">
          <Location />
          <SearchInput
            label="انخاب مقصد"
            refinput={inputVilaMobile1}
            refLabel={LabelVilaMobile4}
            valueInput={Maghsad2}
          />
        </div>
        <DropStartLocation
          classdropdown="body-dropdown-services-mobile"
          itemsDropdown={items_dropdown}
          handleclick={PutItem2}
        />
      </div>
      <div className={"dropup-services-mobile " + ClassDropdownPassenger}>
        <h5> مسافران </h5>
        <div className="item-services-mobile ">
          <DropdownNumber
            classbtn={"btndecrementmobile"}
            classdropdown={"chose-number-train-mobile"}
            ValueAdult={AdultPassenger}
            ValueChild={ChildrPassenger}
            ValueKid={KidPassenger}
            clickbtnincrement={incrementNumber}
            clickbtndecrement={decrementNumber}
            clickbtnincrement2={incrementNumber2}
            clickbtndecrement2={decrementNumber2}
            clickbtnincrement3={incrementNumber3}
            clickbtndecrement3={decrementNumber3}
          />
        </div>

        <button onClick={HideDropdownPassengers}>تایید</button>
      </div>
      <div className={"dropup-services-mobile " + ClassParvazDropdown}>
        <div className="header-dropup-services">
          <h5> کلاس پروازی </h5>
          <div onClick={HideClassParvaz}>
            <Close />
          </div>
        </div>
        <div className="radio-dropup-service-mobile">
          {ClassParvaz.map((item) => (
            <div
              onClick={() => {
                SetValueClassParvaz(item.name);
              }}
            >
              <input
                type="radio"
                name="radio-dropupClassParvaz"
                id={"radio-dropupClassParvaz" + item.id}
              />
              <div className="btn-radio">
                <span></span>
              </div>
              <label htmlFor={"radio-dropupClassParvaz" + item.id}>
                {item.name}
              </label>
            </div>
          ))}
        </div>
        <button onClick={HideClassParvaz}>تایید</button>
      </div>
      <div className="header-vila-mobile">
        <p>پرواز</p>
        <Link to='/'>

        <ArrowRight />
        </Link>
      </div>

      <div className="chose-parvaz">
        <div
          className={
            ActiveChoseBtn === "InSide"
              ? "item-chose-parvaz active-parvaz"
              : "item-chose-parvaz "
          }
        >
          پرواز داخلی
        </div>

        <div
          className={
            ActiveChoseBtn === "OutSide"
              ? "item-chose-parvaz active-parvaz"
              : "item-chose-parvaz "
          }
        >
          پرواز خارجی
        </div>
      </div>

      <div className="header-services-mobile mt-10">
        <div
          className={ChoseServices === "یک طرفه" && "active-nav"}
          onClick={() => {
            SetChoseServices("یک طرفه");
          }}
        >
          یک طرفه
        </div>
        <div
          className={ChoseServices === "رفت و برگشت" && "active-nav"}
          onClick={() => {
            SetChoseServices("رفت و برگشت");
          }}
        >
          رفت و برگشت
        </div>
        <div
          className={ChoseServices === "چند مسیره" && "active-nav"}
          onClick={() => {
            SetChoseServices("چند مسیره");
          }}
        >
          چند مسیره
        </div>
      </div>

      <div className="services-mobile mt-10">
        {ChoseServices === "چند مسیره" ? (
          <div className="container-colapse">
            <div className="item-services-mobile-train">
              <Location />
              <SearchInput
                label="مبدا (شهر، فرودگاه)"
                refinput={inputVilaMobile1}
                refLabel={LabelVilaMobile1}
                valueInput={Maghsad}
                handleclick={OpenMenu}
              />
            </div>

            <div className="item-services-mobile-train">
              <Location />
              <SearchInput
                label="مقصد (شهر، فرودگاه)"
                refinput={inputVilaMobile2}
                refLabel={LabelVilaMobile2}
                valueInput={Maghsad2}
                handleclick={OpenMenu2}
              />
            </div>
          </div>
        ) : (
          <div className="containder-item-services-mobile">
            <>
              <div className="item-services-mobile-train">
                <Location />
                <SearchInput
                  label="مبدا (شهر، فرودگاه)"
                  refinput={inputVilaMobile1}
                  refLabel={LabelVilaMobile1}
                  valueInput={Maghsad}
                  handleclick={OpenMenu}
                />
              </div>
              <div className="switch-options-services" onClick={switchvalue}>
                <Switch />
              </div>
              <div className="item-services-mobile-train">
                <Location />
                <SearchInput
                  label="مقصد (شهر، فرودگاه)"
                  refinput={inputVilaMobile2}
                  refLabel={LabelVilaMobile2}
                  valueInput={Maghsad2}
                  handleclick={OpenMenu2}
                />
              </div>
            </>
          </div>
        )}

        {ChoseServices === "یک طرفه" && (
          <div className="item-services-mobile">
            <Date />
            <SearchInput
              label="تاریخ رفت"
              refinput={inputVilaMobile3}
              refLabel={LabelVilaMobile3}
            />
          </div>
        )}
        {ChoseServices === "رفت و برگشت" && (
          <div className="item-services-mobile">
            <Date />

            <SearchInput
              label="تاریخ رفت"
              refinput={inputVilaMobile3}
              refLabel={LabelVilaMobile3}
            />
            <SearchInput
              label="تاریخ برگشت"
              refinput={inputVilaMobile5}
              refLabel={LabelVilaMobile5}
            />
          </div>
        )}
        {ChoseServices === "چند مسیره" && (
          <div className="item-services-mobile">
            <Date />

            <SearchInput
              label="تاریخ رفت"
              refinput={inputVilaMobile3}
              refLabel={LabelVilaMobile3}
            />
          </div>
        )}

        {ChoseServices === "چند مسیره" ? <div className="add-travel"><Plus />افزودن مسیر</div> : <></>}
        <div className="item-services-mobile">
          {input ? (
            <>
              <SearchInput
                label="تعداد خودرو"
                valueInput={NumberHorofi[people - 1]}
                classlabel="labelfix"
                refinput={inputstart4}
                refLabel={Labelstart4}
              />
              <div className="chose-number">
                <div onClick={Increment} className="BtnIncrementmobile">
                  <Add />
                </div>
                <span>{people}</span>
                <div
                  onClick={Decrement}
                  className="BtnDecrementmobile disabled"
                >
                  <Remove />
                </div>
              </div>
            </>
          ) : (
            <SearchInput
              label="مسافران"
              valueInput={NumberPassenger + " مسافر"}
              classlabel="labelfix"
              refinput={inputpassenger}
              handleclick={ShowDropdownPassengers}
            />
          )}
        </div>
        <div className="footer-services-mobile">
          <div
            className="btn-dropdown-services-mobile"
            onClick={ShowClassParvaz}
          >
            <p> کلاس پروازی:{ValueClassParvaz}</p>
            <ToggleDownIcon />
          </div>
        </div>
        <div className="btn-services-mobile">
          <ButtonSearch text="جستجو" />
        </div>
      </div>
      <div className="main">
        <Questions ItemYourQuestion={content_item_your_question_AirlanInside} />
        <AirplanOutSideContent />
      </div>

      <Footer
        conditional={true}
        IdMore="more7"
        IdMoreDesktop="moreairplalinsidemobile"
      />
    </div>
  );
};
export default AirplanOutSideMobile;
