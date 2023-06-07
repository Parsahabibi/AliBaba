import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import Footer from "../Footer/Footer";
import { Add, ArrowRight, Date, Location, Remove, Switch, WarnningIcon } from "../icons/Icons";
import SearchInput from "../SearchInput/SearchInput";
import DropdownNumber from "../services/Dropdownservices/DropdownNumber";
import DropStartLocation from "../services/Dropdownservices/DropStartLocation";
import Questions from "../Yourquestion/YourQuestion";
import ContentBusMobile from "./ContentBusMobile.";

const BusMobile = () => {
   const content_item_your_question_Bus = [
     {
       id: "item1-questions-bus-mobile",
       title: `آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟`,
       description: (
         <div>
           قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها
           تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد،
           باید هزینه کامل <Link to="">بلیط اتوبوس</Link> را برایش پرداخت کنید
           تا صندلی متعلق به خودتان باشد.
         </div>
       ),
     },
     {
       id: "item2-questions-bus-mobile",
       title: `نحوه رزرو بلیط اتوبوس در علی بابا چگونه است؟`,
       description: (
         <div>
           برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن علی‌بابا (بخش
           بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب
           می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و
           با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید.برای مطالعه راهنمای
           گام‌به‌گام و تصویری خرید اینترنتی بلیط اتوبوس، می‌توانید سری به
           <Link to="">اینجا</Link> بزنید.
         </div>
       ),
     },
     {
       id: "item3-questions-bus-mobile",
       title: `استعلام بلیط اتوبوس علی‌بابا چگونه است؟`,
       description: (
         <div>
           برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن علی‌بابا
           بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل اتوبوس‌های شرکت‌های
           مختلف را ببینید.بعد از خرید، اگر بخواهید جزئیات بلیط را ببینید، وارد
           حساب کاربری‌تان شوید و روی گزینه «سفرهای من» بزنید.
         </div>
       ),
     },
     {
       id: "item4-questions-bus-mobile",
       title: `آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟`,
       description: (
         <div>خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد.</div>
       ),
     },
     {
       id: "item5-questions-bus-mobile",
       title: `آیا می‌توانم اطلاعات بلیط اتوبوس خریداری‌شده را ویرایش کنم؟`,
       description: (
         <div>
           خیر. بعد از خرید بلیط اتوبوس، امکان ویرایش اطلاعات آن وجود ندارد.
           درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات
           جدید تهیه کنید. طبیعی است که طبق قوانین، استرداد بلیط اتوبوس با درصدی
           جریمه همراه است (گاهی تا 100 درصد جریمه).
         </div>
       ),
     },
     {
       id: "item6-questions-bus-mobile",
       title: `در صورت اشتباه در خرید آنلاین بلیط اتوبوس چکار کنیم؟`,
       description: (
         <div>
           در خرید آنلاین بلیط اتوبوس اگر اشتباهات در حد ایرادات ساده نگارشی
           باشد، می‌توانید این موضوع را با تعاونی مطرح کنید. اگر هم خطا در
           انتخاب مسیر باشد، باید بلیط خودتان را استرداد کنید و بلیط بخرید. طبق
           قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است.
         </div>
       ),
     },
     {
       id: "item7-questions-bus-mobile",
       title: `چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟`,
       description: (
         <div>
           اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک و ایمیل از
           علی‌بابا برای شما ارسال خواهد شد. در این پیامک و ایمیل شماره سفارش
           شما، اطلاعات اتوبوس و همچنین لینک دانلود بلیط وجود دارد.
         </div>
       ),
     },
     {
       id: "item8-questions-bus-mobile",
       title: `در صورت خرید بلیط و سوارنشدن به اتوبوس، امکان بازگشت وجه پرداختی بلیط وجود دارد؟ `,
       description: (
         <div>
           بله. شما می‌توانید با مراجعه حضوری به تعاونی، بلیط اتوبوس خودتان را
           استرداد کنید. درصد جریمه بلیط شما در قسمت «قوانین استرداد» بلیط نوشته
           شده است.
         </div>
       ),
     },
     {
       id: "item9-questions-bus-mobile",
       title: `آیا امکان خرید تلفنی بلیط اتوبوس وجود دارد؟ `,
       description: (
         <div>
           خیر. شما باید برای خرید بلیط اتوبوس به وب‌سایت یا اپلیکیشن علی‌بابا
           مراجعه کنید.
         </div>
       ),
     },
     {
       id: "item10-questions-bus-mobile",
       title: `آیا قیمت بلیط اتوبوس در خرید اینترنتی با خرید حضوری فرق می‌کند؟`,
       description: (
         <div>
           خیر. قیمت بلیط اتوبوس در خرید اینترنتی و حضوری تفاوتی ندارد؛ اما توجه
           داشته باشید که خرید اینترنتی بلیط اتوبوس سریع‌ترین راه خرید بلیط است.
           در هر زمان از شبانه‌روز امکان دسترسی به تمام بلیط‌ها در علی بابا وجود
           دارد. علاوه بر این، در خرید اینترنتی بلیط اتوبوس در علی‌بابا، امکان
           جانمایی صندلی هم وجود دارد.
         </div>
       ),
     },
     {
       id: "item11-questions-bus-mobile",
       title: `امکان حمل حیوانات خانگی در داخل اتوبوس وجود دارد؟`,
       description: (
         <div>
           طبق قوانین سازمان حمل‌ونقل امکان حمل حیوانات زنده در اتوبوس وجود
           ندارد.
         </div>
       ),
     },
     {
       id: "item12-questions-bus-mobile",
       title: `مدارک مورد نیاز برای استفاده از اتوبوس چیست؟ `,
       description: (
         <div>
           به همراه داشتن کارت شناسایی معتبر (کارت ملی یا شناسنامه) برای دریافت
           بلیط الزامی است.
         </div>
       ),
     },
     {
       id: "item13-questions-bus-mobile",
       title: `آیا برای استفاده از اتوبوس نیاز به پرینت بلیط است؟`,
       description: (
         <div>
           برای استفاده از بلیط‌ اتوبوس، چاپ بلیط در دفتر تعاونی مربوطه با ارائه
           پیامک شماره بلیط و کارت شناسایی معتبر الزامی است.
         </div>
       ),
     },
     {
       id: "item14-questions-bus-mobile",
       title: `جهت سوار شدن به اتوبوس چه مدت قبل از حرکت در ترمینال حضور داشته باشیم؟`,
       description: (
         <div>
           در صورتی که حرکت سرویس در ساعت مقرر انجام گردد مسافر می بایست حداکثر
           30 دقیقه قبل حرکت سرویس در ترمینال مبدا حضور داشته باشد.
         </div>
       ),
     },
     {
       id: "item15-questions-bus-mobile",
       title: `استرداد بلیط اتوبوس در وب‌سایت علی‌بابا چگونه است؟`,
       description: (
         <div>
           برای استرداد آنلاین بلیط اتوبوس وارد «حساب کاربری» شوید و از بخش
           «سفارشات و استردادها»، سفارش مدنظرتان را انتخاب کنید؛ بعد از انتخاب
           گزینه استرداد و تکمیل مراحل، بلیط مدنظر طبق قوانین و مقررات استرداد
           می‌شود. <br />
           در صورت قابل‌استرداد‌بودن بلیط خریداری‌شده، مبلغ استرداد به همان
           شماره حسابی واریز می‌شود که خرید با آن انجام شده است.
         </div>
       ),
     },
     {
       id: "item16-questions-bus-mobile",
       title: `میزان بار مجاز هر مسافر در سفر با اتوبوس چقدر است؟ `,
       description: (
         <div>
           طبق قوانین سازمان حمل‌ونقل میزان بار مجاز 20 کیلوگرم است. البته برخی
           از تعاونی‌ها با دریافت هزینه، امکان حمل بار تا 40 کیلوگرم را نیز
           ارائه می‌دهند. همچنین یکی دیگر از مسائلی که در این زمینه باید مد نظر
           قرار بدهید، تعاونی اتوبوس شماست.
           <br />
           معمولا تعاونی ها، علاوه بر قوانین کلی میزان بار مجاز، قوانین خاص
           خودشان را دارند که در بعضی موارد، با قوانین تعاونی های دیگر فرق
           می‌کند. برای این که از میزان بار مجازتان مطمئن شوید و در حین سفر به
           مشکل برنخورید، به تعاونی که از آن بلیط تهیه کرده‌اید زنگ زده و از
           آن‌ها سوال کنید.
           <br />
           به این موضوع هم دقت کنید که اگر میزان بار اضافه شما بیش از حد باشد،
           متصدی اتوبوس ممکن است از گذاشتن آن‌ها در اتوبوس ممانعت کند. در این
           نوع مواقع می‌توانید در این مورد صحبت کنید که هزینه میزان بار
           اضافه‌تان را پرداخت کنید تا بتوانید همه وسیله‌هایتان را با خودتان حمل
           کنید.
         </div>
       ),
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



 
   const [ClassDropdownPassenger, SetClassDropdownPassenger] = useState(
     "hide-dropdown-services"
   );

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

      <div className="header-vila-mobile">
        <p>اتوبوس</p>
        <Link to='/'>

        <ArrowRight />
        </Link>
      </div>

      <div className="services-mobile ">
        <div className="containder-item-services-mobile">
          <div className="item-services-mobile-train">
            <Location />
            <SearchInput
              label="مبدا (شهر، پایانه)"
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
              label="مقصد (شهر، پایانه)"
              refinput={inputVilaMobile2}
              refLabel={LabelVilaMobile2}
              valueInput={Maghsad2}
              handleclick={OpenMenu2}
            />
          </div>
        </div>

        <div className="item-services-mobile">
          <Date />

          <SearchInput
            label="تاریخ حرکت"
            refinput={inputVilaMobile3}
            refLabel={LabelVilaMobile3}
          />
        </div>

        <div className="btn-services-mobile">
          <ButtonSearch text="جستجوی اتوبوس" />
        </div>
      </div>

      <div className="main">
        <Questions ItemYourQuestion={content_item_your_question_Bus} />
       <ContentBusMobile />
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

export default BusMobile;
