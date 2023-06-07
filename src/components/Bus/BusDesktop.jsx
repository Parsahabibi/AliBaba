import React from "react";
import { Link } from "react-router-dom";
import Bgservices from "../Bgservices/Bgservices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {
  AirplaneInsideServices,
  AirplaneOutsidServices,
  BusServices,
  HotelServices,
  TourServices,
  TrainServices,
  VilaServices,
} from "../icons/Icons";
import Services from "../services/Services";
import ServicesBus from "../services/ServicesBottom/ServicesBus";
import ServicesbtnsBus from "../services/ServicesTop/ServicesBtnBus";
import Questions from "../Yourquestion/YourQuestion";
import ContentBusDesktop from "./ContentBusDesktop";

const BusDesktop = () => {
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
    { check: "active", Link: "/Bus", icon: <BusServices />, text: "اتوبوس" },
    { check: "deactive", Link: "/Thour", icon: <TourServices />, text: "تور" },
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
  const content_item_your_question_Bus = [
    {
      id: "item1-questions-bus-desktop",
      title: `آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟`,
      description: (
        <div>
          قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها
          تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد،
          باید هزینه کامل <Link to="">بلیط اتوبوس</Link> را برایش پرداخت کنید تا
          صندلی متعلق به خودتان باشد.
        </div>
      ),
    },
    {
      id: "item2-questions-bus-desktop",
      title: `نحوه رزرو بلیط اتوبوس در علی بابا چگونه است؟`,
      description: (
        <div>
          برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن علی‌بابا (بخش
          بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب
          می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با
          کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید.برای مطالعه راهنمای
          گام‌به‌گام و تصویری خرید اینترنتی بلیط اتوبوس، می‌توانید سری به
          <Link to="">اینجا</Link> بزنید.
        </div>
      ),
    },
    {
      id: "item3-questions-bus-desktop",
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
      id: "item4-questions-bus-desktop",
      title: `آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟`,
      description: (
        <div>خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد.</div>
      ),
    },
    {
      id: "item5-questions-bus-desktop",
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
      id: "item6-questions-bus-desktop",
      title: `در صورت اشتباه در خرید آنلاین بلیط اتوبوس چکار کنیم؟`,
      description: (
        <div>
          در خرید آنلاین بلیط اتوبوس اگر اشتباهات در حد ایرادات ساده نگارشی
          باشد، می‌توانید این موضوع را با تعاونی مطرح کنید. اگر هم خطا در انتخاب
          مسیر باشد، باید بلیط خودتان را استرداد کنید و بلیط بخرید. طبق قوانین،
          استرداد بلیط اتوبوس با درصدی جریمه همراه است.
        </div>
      ),
    },
    {
      id: "item7-questions-bus-desktop",
      title: `چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟`,
      description: (
        <div>
          اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک و ایمیل از علی‌بابا
          برای شما ارسال خواهد شد. در این پیامک و ایمیل شماره سفارش شما، اطلاعات
          اتوبوس و همچنین لینک دانلود بلیط وجود دارد.
        </div>
      ),
    },
    {
      id: "item8-questions-bus-desktop",
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
      id: "item9-questions-bus-desktop",
      title: `آیا امکان خرید تلفنی بلیط اتوبوس وجود دارد؟ `,
      description: (
        <div>
          خیر. شما باید برای خرید بلیط اتوبوس به وب‌سایت یا اپلیکیشن علی‌بابا
          مراجعه کنید.
        </div>
      ),
    },
    {
      id: "item10-questions-bus-desktop",
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
      id: "item11-questions-bus-desktop",
      title: `امکان حمل حیوانات خانگی در داخل اتوبوس وجود دارد؟`,
      description: (
        <div>
          طبق قوانین سازمان حمل‌ونقل امکان حمل حیوانات زنده در اتوبوس وجود
          ندارد.
        </div>
      ),
    },
    {
      id: "item12-questions-bus-desktop",
      title: `مدارک مورد نیاز برای استفاده از اتوبوس چیست؟ `,
      description: (
        <div>
          به همراه داشتن کارت شناسایی معتبر (کارت ملی یا شناسنامه) برای دریافت
          بلیط الزامی است.
        </div>
      ),
    },
    {
      id: "item13-questions-bus-desktop",
      title: `آیا برای استفاده از اتوبوس نیاز به پرینت بلیط است؟`,
      description: (
        <div>
          برای استفاده از بلیط‌ اتوبوس، چاپ بلیط در دفتر تعاونی مربوطه با ارائه
          پیامک شماره بلیط و کارت شناسایی معتبر الزامی است.
        </div>
      ),
    },
    {
      id: "item14-questions-bus-desktop",
      title: `جهت سوار شدن به اتوبوس چه مدت قبل از حرکت در ترمینال حضور داشته باشیم؟`,
      description: (
        <div>
          در صورتی که حرکت سرویس در ساعت مقرر انجام گردد مسافر می بایست حداکثر
          30 دقیقه قبل حرکت سرویس در ترمینال مبدا حضور داشته باشد.
        </div>
      ),
    },
    {
      id: "item15-questions-bus-desktop",
      title: `استرداد بلیط اتوبوس در وب‌سایت علی‌بابا چگونه است؟`,
      description: (
        <div>
          برای استرداد آنلاین بلیط اتوبوس وارد «حساب کاربری» شوید و از بخش
          «سفارشات و استردادها»، سفارش مدنظرتان را انتخاب کنید؛ بعد از انتخاب
          گزینه استرداد و تکمیل مراحل، بلیط مدنظر طبق قوانین و مقررات استرداد
          می‌شود. <br />
          در صورت قابل‌استرداد‌بودن بلیط خریداری‌شده، مبلغ استرداد به همان شماره
          حسابی واریز می‌شود که خرید با آن انجام شده است.
        </div>
      ),
    },
    {
      id: "item16-questions-bus-desktop",
      title: `میزان بار مجاز هر مسافر در سفر با اتوبوس چقدر است؟ `,
      description: (
        <div>
          طبق قوانین سازمان حمل‌ونقل میزان بار مجاز 20 کیلوگرم است. البته برخی
          از تعاونی‌ها با دریافت هزینه، امکان حمل بار تا 40 کیلوگرم را نیز ارائه
          می‌دهند. همچنین یکی دیگر از مسائلی که در این زمینه باید مد نظر قرار
          بدهید، تعاونی اتوبوس شماست.
          <br />
          معمولا تعاونی ها، علاوه بر قوانین کلی میزان بار مجاز، قوانین خاص
          خودشان را دارند که در بعضی موارد، با قوانین تعاونی های دیگر فرق
          می‌کند. برای این که از میزان بار مجازتان مطمئن شوید و در حین سفر به
          مشکل برنخورید، به تعاونی که از آن بلیط تهیه کرده‌اید زنگ زده و از
          آن‌ها سوال کنید.
          <br />
          به این موضوع هم دقت کنید که اگر میزان بار اضافه شما بیش از حد باشد،
          متصدی اتوبوس ممکن است از گذاشتن آن‌ها در اتوبوس ممانعت کند. در این نوع
          مواقع می‌توانید در این مورد صحبت کنید که هزینه میزان بار اضافه‌تان را
          پرداخت کنید تا بتوانید همه وسیله‌هایتان را با خودتان حمل کنید.
        </div>
      ),
    },
  ];

  return (
    <div className="bus-desktop">
      <Header />
      <Bgservices img="./assets/image/HomeImage/bus.jpg" />
      <div className="main">
        <Services
          ItemServices={item_services}
          TopBottomServices={<ServicesbtnsBus />}
          BottomBottomServices={<ServicesBus />}
        />
        <Questions ItemYourQuestion={content_item_your_question_Bus} />
        <ContentBusDesktop />
      </div>

      <Footer
        conditional={true}
        IdMore="morebusnmobile"
        IdMoreDesktop="morebusdesktop"
      />
    </div>
  );
};

export default BusDesktop;
