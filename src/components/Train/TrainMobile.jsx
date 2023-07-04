import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import Footer from "../Footer/Footer";
import {
  Add,
  ArrowRight,
  Date,
  Location,
  PlusServices,
  Remove,
  Switch,
  WarnningIcon,
} from "../icons/Icons";
import SearchInput from "../SearchInput/SearchInput";
import DropdownNumber from "../services/Dropdownservices/DropdownNumber";
import DropStartLocation from "../services/Dropdownservices/DropStartLocation";
import Questions from "../Yourquestion/YourQuestion";
import ContentTrainMobile from "./ContentTrainMobile";
import NewSearchInput from "../NewSearchInput/NewSearchInput";

const TrainMobile = () => {


  const [able, setAble] = useState(false)



  const handleAble = () => {
    setAble(true)
  }


  const handleDisAble = () => {
    setAble(false)
  }


  const [fix, setfix] = useState('')



  const content_item_your_question_Train_mobile = [
    {
      id: "item1-questions-train-mobile",
      title: `در راه آهن و هنگام سوار شدن به قطار چه مدارکی لازم است؟`,
      description: `شما برای ورود به قطار باید این مدارک را با خود به همراه داشته باشید: پرینت بلیط و کارت شناسایی معتبر.
در صورت داشتن تخفیف جانباز یا خانواده شهدا، به همراه داشتن کارت معتبر مربوطه نیاز ضروری است.`,
    },
    {
      id: "item2-questions-train-mobile",
      title: `مقدار بار مجاز در قطار چقدر است؟`,
      description: `هر مسافر می‌تواند وسایل ضروری سفر خود را همراه ببرد به شرط آن‌كه حجم آن از ابعاد 75 سانتی متر و وزن 30 كیلوگرم تجاوز نكند. به عنوان مثال مسافر می‌تواند كیف‌دستی، بسته‌ و چمدان‌های كوچك محتوی لوازم شخصی، صندلی چرخ‌دار بیمار، كالسكه بچه و قفس كوچك پرندگان ریزجثه (حداكثر در ابعاد 40 سانتی‌متر) را به همراه داشته باشد.`,
    },
    {
      id: "item3-questions-train-mobile",
      title: `روال استرداد یا کنسلی بلیط قطار چگونه است؟`,
      description: `مسافر می‌تواند تا 60 دقیقه قبل از حرکت قطار، بلیط یا بلیط‌های خریداری‌شده را به صورت آنلاین استرداد کند.
برای استرداد بلیط قطار پس از زمان ذکرشده، مسافر باید تا قبل از حرکت قطار، و با ارایه بلیط چاپی و کارت شناسایی به صورت حضوری به یکی از مراکز فروش بلیط قطار مراجعه کند.`,
    },
    {
      id: "item4-questions-train-mobile",
      title: `قیمت بلیط برای کودک و نوزاد چگونه است؟ `,
      description: `قیمت بلیط کودک نیم‌بها و نوزاد 10 درصد مبلغ بزرگسال است.`,
    },
    {
      id: "item5-questions-train-mobile",
      title: `چه زمانی باید در ایستگاه حضور داشته باشم؟ `,
      description: `حضور در ایستگاه یک ساعت قبل از حرکت قطار الزامی است. همچنین ده دقیقه مانده به حركت، تمام درهای قطار بسته خواهد شد و بعد از بسته‌شدن درها برای جلوگیری از خطرات احتمالی، سوارشدن به قطار امكان‌پذیر نیست.`,
    },
    {
      id: "item6-questions-train-mobile",
      title: `در یک کوپه دربست چند نفر همراه اضافه می‌توان برد؟`,
      description: `مسافر می‌تواند بعد از دربست‌کردن کوپه فقط یک نفر مسافر اضافی را بدون بلیط با این شرایط به همراه خود به قطار ببرد:
حق درخواست جا خارج از همان کوپه وجود ندارد
قبض این مسافر مطابق استحقاق او توسط رئیس قطار صادر می‌شود.`,
    },
    {
      id: "item7-questions-train-mobile",
      title: `در صورت مفقودی بلیط قطار، چه باید کرد؟`,
      description: `در صورت مفقودی بلیط، مسافر می‌تواند در زمان اداری به ایستگاه‌های راه‌آهن که سیستم آنلاین فروش بلیط دارند، مراجعه کند و دوباره بلیط را دریافت کند. همچنین به شرط حضور به‌موقع (حداكثر ۴۵ دقیقه مانده به حركت) در ایستگاه‌های راه‌آهن كه سیستم فروش بلیط آنلاین دارند و در وقت اداری، بلیط المثنی طبق آیین‌نامه‌ مربوط صادر می‌شود.
بلیط مفقودی باید از طریق شبكه‌ رایانه‌ای صادر شده و استرداد نشده باشد. صدور بلیط المثنی با ۵ درصد قیمت كل بلیط، انجام می‌شود و در صورت مفقود شدن آن، بلیط‌ المثنی دیگری صادر نخواهد شد. درحال حاضر بلیط المثنی از طریق سیستم استرداد نمی‌شود. (استرداد بلیط المثنی فقط به شرط ارائه‌ بلیط اصلی و بلیط المثنی به صورت همزمان در ایستگاه‌های آنلاین و كلیه‌ نمایندگی‌های فروش و با هماهنگی مركز یكپارچه فروش بلیط قطار انجام می‌شود).`,
    },
    {
      id: "item8-questions-train-mobile",
      title: `آیا این امکان وجود دارد که مسافر در پکیج قطار با هتل فدک درخواست اقامت بیشتر در هتل داشته باشد؟ در صورت امکان، وضعیت آن به چه صورتی است؟`,
      description: `امکان اقامت بیشتر وجود دارد اما باید قبل از خرید با هتل مربوطه هماهنگ کرده باشند؛ همچنین تاریخ رفت و برگشت بلیط قطار باید بر اساس روزهایی باشد که در هتل می‌مانید. گفتنی است اقامت قطار فدک شامل شب اول و شب آخر می‌شود.`,
    },
    {
      id: "item9-questions-train-mobile",
      title: `آیا خانوم‌ها می‌توانند بلیط قطار را برای کوپه مخصوص بانوان بخرند؟`,
      description: `بله این امکان وجود دارد. خانوم‌ها می‌توانند برای آرامش و راحتی خود در طول سفر، بلیط قطار را برای کوپه مخصوص بانوان بخرند. البته کوپه مخصوص آقایان هم برای آن‌ها درنظر گرفته شده است.`,
    },
    {
      id: "item10-questions-train-mobile",
      title: `شرایط بیمه قطار چه گونه است؟`,
      description: `تمام مسافران قطار از لحظه‌ ورود به ایستگاه مبدا تا خروج از ایستگاه مقصد در برابر حوادث بیمه هستند. بیمه‌ حوادث مسافری شامل جبران هزینه‌های پزشكی و همچنین جبران نقص عضو یا فوت ناشی از حوادثی مانندآتش سوزی، تصادف، انفجار، خارج شدن قطار از ریل، مانور، سنگ‌پرانی و سایر حوادث احتمالی می‌شود.`,
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

  };

  const [Maghsad, SetMaghsad] = useState("");
  const PutItem = (e) => {
    SetMaghsad(e.target.innerText);

    BgVila.current.style.display = "none";
    DropdownVila.current.style.display = "none";

    setfix('labelfix');
    // LabelVilaMobile0.current.classList.add("labelfix");
    // LabelVilaMobile1.current.classList.add("labelfix");
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

    setfix('labelfix');
    // LabelVilaMobile4.current.classList.add("labelfix");
    // LabelVilaMobile2.current.classList.add("labelfix");
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

  const [Warnning, SetWarnning] = useState(false);
  const [WarnningWoman, SetWarnningWoman] = useState(false);

  const HandleWarnning = () => {
    SetWarnning(true);
    SetWarnningWoman(false);
  };
  const HandleHideWarnning = () => {
    SetWarnning(false);
    SetWarnningWoman(false);
  };
  const HandleWarnningWoman = () => {
    SetWarnningWoman(true);
    SetWarnning(false);
  };

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
  return (
    <div className="vila-mobile train-mobile ">
      <div className="bg-vila-mobile" ref={BgVila} onClick={CloseMenu}></div>
      <div className="dropdown-services-mobile" ref={DropdownVila}>
        <div className="head-dropdown-services-mobile" onClick={CloseMenu}>
          <ArrowRight />
          <p>انتخاب مبدا</p>
        </div>
        <div className="item-services-mobile">
          <Location />
          <NewSearchInput
          func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
            classlabel={fix}

            label="انتخاب مبدا"
            // refinput={inputVilaMobile0}
            // refLabel={LabelVilaMobile0}
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
          <NewSearchInput
          func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
                      classlabel={fix}

            label="انخاب مقصد"
            // refinput={inputVilaMobile1}
            // refLabel={LabelVilaMobile4}
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
        <div className="radio-dropup-service-mobile">
          <div>
            <input type="radio" name="radio-dropup" id="radio1-dropup" />
            <div className="btn-radio ">
              <span></span>
            </div>
            <label htmlFor="radio1-dropup" onClick={HandleHideWarnning}>
              مسافرین عادی
            </label>
          </div>
          <div>
            <input type="radio" name="radio-dropup" id="radio2-dropup" />
            <div className="btn-radio">
              <span></span>
            </div>
            <label htmlFor="radio2-dropup" onClick={HandleWarnning}>
              ویژه برادران
            </label>
          </div>
          <div>
            <input type="radio" name="radio-dropup" id="radio3-dropup" />
            <div className="btn-radio">
              <span></span>
            </div>
            <label htmlFor="radio3-dropup" onClick={HandleWarnningWoman}>
              ویژه خواهران
            </label>
          </div>
        </div>
        <div className="warnning-massage">
          {
            <div>
              {Warnning || WarnningWoman ? <WarnningIcon /> : <></>}
              {Warnning && (
                <p>
                  شما کوپه ویژه برادران را انتخاب نمودید. در صورت مغایرت جنسیت
                  شما با نوع کوپه انتخابی، بلیط شما باطل و توسط رئیس قطار جریمه
                  خواهید شد.
                </p>
              )}
              {WarnningWoman && (
                <p>
                  شما کوپه ویژه خواهران را انتخاب نمودید. در صورت مغایرت جنسیت
                  شما با نوع کوپه انتخابی، بلیط شما باطل و توسط رئیس قطار جریمه
                  خواهید شد.
                </p>
              )}
            </div>
          }
        </div>
        <button onClick={HideDropdownPassengers}>تایید</button>
      </div>
      <div className="header-vila-mobile">
        <p>قطار</p>
        <Link to='/'>

          <ArrowRight />
        </Link>
      </div>
      <div className="header-services-mobile">
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
      </div>

      <div className="services-mobile  mt-10">
        <div className="containder-item-services-mobile">
          <div className="item-services-mobile-train">
            <Location />
            <NewSearchInput
            func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
                        classlabel={fix}

              label="مبدا (شهر)"
              // refinput={inputVilaMobile1}
              // refLabel={LabelVilaMobile1}
              valueInput={Maghsad}
              handleclick={OpenMenu}
            />
          </div>
          <div className="switch-options-services" onClick={switchvalue}>
            <Switch />
          </div>
          <div className="item-services-mobile-train">
            <Location />
            <NewSearchInput
            func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
                        classlabel={fix}

              label="مقصد (شهر)"
              // refinput={inputVilaMobile2}
              // refLabel={LabelVilaMobile2}
              valueInput={Maghsad2}
              handleclick={OpenMenu2}
            />
          </div>
        </div>
        {ChoseServices === "یک طرفه" ? (
          <div className="item-services-mobile">
            <Date />
            <NewSearchInput
            func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
                        classlabel={fix}

              label="تاریخ رفت"
            // refinput={inputVilaMobile3}
            // refLabel={LabelVilaMobile3}
            />
          </div>
        ) : (
          <div className="item-services-mobile">
            <Date />

            <NewSearchInput
            func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
                        classlabel={fix}

              label="تاریخ رفت"
            // refinput={inputVilaMobile3}
            // refLabel={LabelVilaMobile3}
            />
            <NewSearchInput
            func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
                        classlabel={fix}

              label="تاریخ برگشت"
            // refinput={inputVilaMobile5}
            // refLabel={LabelVilaMobile5}
            />
          </div>
        )}

        <div className="item-services-mobile">
          {input ? (
            <>
              <NewSearchInput
              func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
                          // classlabel={fix}

                label="تعداد خودرو"
                valueInput={NumberHorofi[people - 1]}
                classlabel="labelfix"
              // refinput={inputstart4}
              // refLabel={Labelstart4}
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
            <NewSearchInput
            func={{ isable: handleAble, isntAlbe: handleDisAble }} type={'string'}
            
              label="مسافران"
              valueInput={NumberPassenger + " مسافر"}
              classlabel="labelfix"
              // refinput={inputpassenger}
              handleclick={ShowDropdownPassengers}
            />
          )}
        </div>
        <div className="footer-services-mobile">
          <div>
            <input type="checkbox" id="checkdarbast"></input>
            <label htmlFor="checkdarbast">کوپه دربست نمیخواهم</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkkhodro"
              ref={checkkhodro}
              onClick={() => {
                setinput(!input);
              }}
            ></input>
            <label htmlFor="checkkhodro">حمل خودرو</label>
          </div>
        </div>
        <div className="btn-services-mobile">
          <ButtonSearch text="جستجوی قطار" />
        </div>
      </div>

      <div className="main">
        <Questions ItemYourQuestion={content_item_your_question_Train_mobile} />
        <ContentTrainMobile />
      </div>

      <Footer
        conditional={true}
        IdMore="moretrainmobile2"
        IdMoreDesktop="moretraindesktop2"
        num="10"
      />
    </div>
  );
};

export default TrainMobile;
