import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {
  Icon1Bashgah,
  Icon2Bashgah,
  Icon3Bashgah,
  Icon4Bashgah,
  Icon5Bashgah,
  Icon6Bashgah,
} from "../icons/Icons";
import QuestionItem from "../Yourquestion/QuestionItem";
const MoshtarianDesktop = () => {
  const content_item_your_question = [
    {
      id: "item1-questions-moshtarian2",
      title: `باشگاه همسفران علی‌بابا چیست؟`,
      description: `اینجا جایگاهی ویژه برای همسفران خاص علی‌باباست؛ اعضای این باشگاه متناسب با امتیازهایشان در یکی از اتاق‌های آبی، نقره‌ای و طلایی قرار می‌گیرند و خدمات متنوع دریافت می‌کنند.`,
    },
    {
      id: "item2-questions-moshtarian2",
      title: `منظور از اتاق در باشگاه همسفران چیست و چطور می‌توانم وارد این اتاق‌ها بشوم؟`,
      description: `باشگاه همسفران علی‌بابا سه اتاق دارد: آبی، نقره‌ای و طلایی.<br>به محض اینکه برای اولین بار در علی‌بابا ثبت‌نام می‌کنید و اطلاعات حساب کاربری‌تان را تکمیل می‌کنید، به‌صورت خودکار وارد اتاق آبی می‌شوید. هر چقدر بیشتر همسفر شوید و فعالیت‌های مرتبط با سفر را دنبال کنید، امتیازهای بیشتری کسب می‌کنید و درِ اتاق‌های دیگر به روی شما باز می‌شود تا به خدمات بیشتر و متنوع‌تر دسترسی پیدا کنید.`,
    },
    {
      id: "item3-questions-moshtarian2",
      title: `در باشگاه همسفران چطور امتیازم را بیشتر کنم؟`,
      description: `معیار ورود به هر اتاق (آبی، نقره‌ای و طلایی) میزان امتیاز است. امتیاز شما با خرید محصولات، تکمیل اطلاعات حساب کاربری، پیشنهاد علی‌بابا به دیگران و... بیشتر و بیشتر می‌شود.`,
    },
    {
      id: "item4-questions-moshtarian2",
      title: `اتاق‌های مختلف باشگاه همسفران چه امکاناتی دارند؟`,
      description: `هر اتاق امکانات متفاوتی دارد؛ اما به‌طور خلاصه می‌توان گفت که در این اتاق‌ها امکان رزرو سفر با تخفیف، دسترسی به امکانات ویژه پشتیبانی مثل جلوافتادن در صف تماس، امکان مشاوره خصوصی، تشریفات CIP، بیمه مسافرتی رایگان و... برای اعضای اتاق درنظر گرفته شده است. همچنین امکان مشارکت در فعالیت‌های خیرخواهانه هم فراهم است.`,
    },
    {
      id: "item5-questions-moshtarian2",
      title: `چطور امکانات هر اتاق را فعال کنم؟`,
      description: `امکانات هر اتاق با ورود شما به اتاق به‌صورت خودکار فعال می‌شود و به صورت دوره‌ای از طریق پیامک و یا ایمیل به شما اطلاع‌رسانی خواهد شد.`,
    },
    {
      id: "item6-questions-moshtarian2",
      title: `چطور می‌توانم جایگاه و امتیازهایم در باشگاه همسفران را بررسی کنم؟`,
      description: `برای دیدن وضعیت امتیازهایتان به حساب کاربری خود در وب‌سایت علی‌بابا سر بزنید.`,
    },
  ];

  const item_your_question = content_item_your_question.map((item) => (
    <QuestionItem
      id={item.id}
      title={item.title}
      description={item.description}
    />
  ));

  function showEmkanat1() {
    for (let i = 0; i < 3; i++) {
      document.querySelectorAll(".child-body-emkanat")[i].classList.remove("active-item");
      document.querySelectorAll(".btn-emkanat")[i].classList.remove("active-btn");
    }
    document.querySelector(".body-emkanat-talaii").classList.add("active-item");
    document.querySelector(".btn-emkanat-talaii").classList.add("active-btn");

  }
  function showEmkanat2() {
    for (let i = 0; i < 3; i++) {
      document.querySelectorAll(".child-body-emkanat")[i].classList.remove("active-item");
      document.querySelectorAll(".btn-emkanat")[i].classList.remove("active-btn");
    }
    document.querySelector(".body-emkanat-noghrei").classList.add("active-item");
    document.querySelector(".btn-emkanat-noghrei").classList.add("active-btn");

  }
  function showEmkanat3() {
    for (let i = 0; i < 3; i++) {
      document.querySelectorAll(".child-body-emkanat")[i].classList.remove("active-item");
      document.querySelectorAll(".btn-emkanat")[i].classList.remove("active-btn");
    }
    document.querySelector(".body-emkanat-abi").classList.add("active-item");
    document.querySelector(".btn-emkanat-abi").classList.add("active-btn");

  }
  return (
    <div className="bashgah-moshtarian-desktop">
      <Header />
      <div className="center">
        <div className="content1-bashgah-moshtarian-desktop">
          <div>
            <h1>باشگاه همسفران علی‌بابا</h1>
            <span>همراه همسفران علی‌بابا در هر سفر</span>
            <p>
              اینجا باشگاه همسفران علی‌باباست؛ جایگاهی ویژه برای شما که همسفر
              خاص ما هستید.
              <br />
              یک دورهمی خودمانی برای کسانی که علی‌بابا را به عنوان همسفر خود
              انتخاب کرده‌اند. اعضای این باشگاه متناسب با امتیازهایشان در یکی از
              اتاق‌های آبی، نقره‌ای و طلایی دور هم جمع می‌شوند و به خدمات متنوعی
              دسترسی پیدا می‌کنند.
            </p>
          </div>
          <div>
            <img
              src="./assets/image/bashgahMoshtarian/loyalty-1-desktop.png"
              alt=""
            />
          </div>
        </div>
        <div className="content2-bashgah-moshtarian-desktop">
          <h2>امکانات اتاق‌های باشگاه همسفران</h2>
          <span className="mb-12">
            باشگاه همسفران علی‌بابا سه اتاق خواهد داشت: اتاق آبی، نقره‌ای و
            طلایی.
          </span>
          <p>
            به محض اینکه برای اولین بار در علی‌بابا ثبت‌نام و اطلاعات حساب
            کاربری‌تان را تکمیل کنید، به‌صورت خودکار وارد اتاق آبی خواهید شد. هر
            چقدر بیشتر با علی‌بابا همسفر شوید و فعالیت‌های مرتبط با سفر را دنبال
            کنید، امتیازهای بیشتری کسب خواهید کرد و درِ اتاق‌های دیگر به روی شما
            باز می‌شود تا به خدمات بیشتر و متنوع‌تر دسترسی پیدا کنید.
          </p>
          <div className="emkanat-desktop">
            <div className="header-emkanat-desktop">
              <div
                className="btn-emkanat btn-emkanat-talaii active-btn"
                onClick={showEmkanat1}
              >
                <span>امکانات اتاق طلایی</span>
              </div>
              <div
                className="btn-emkanat btn-emkanat-noghrei "
                onClick={showEmkanat2}
              >
                <span>امکانات اتاق نقره‌ای</span>
              </div>
              <div
                className="btn-emkanat btn-emkanat-abi "
                onClick={showEmkanat3}
              >
                <span>امکانات اتاق آبی</span>
              </div>
            </div>
            <div className="body-emkanat-desktop">
              <div className="body-emkanat-talaii child-body-emkanat active-item">
                <div className="item-emkanat-desktop">
                  <img
                    src="./assets/image/bashgahMoshtarian/support-1.png"
                    alt=""
                  />
                  <h3>پشتیبانی اختصاصی فقط برای شماست!</h3>
                  <p>
                    عبور از کل صف تماس، امکان ثبت استرداد فقط با یک تماس تلفنی و
                    دریافت مشاوره اختصاصی VIP
                  </p>
                </div>
                <div className="item-emkanat-desktop">
                  <img
                    src="./assets/image/bashgahMoshtarian/diamond.png"
                    alt=""
                  />
                  <h3>
                    با کیفیت استثنایی سفر می‌کنید<span>(به زودی)</span>
                  </h3>
                  <p>
                    ارتقاء کلاس پروازها و ستاره هتل‌ها، تشریفات CIP و VIP،
                    تفریحات رایگان در حین سفر و بیمه مسافرتی رایگان
                  </p>
                </div>
                <div className="item-emkanat-desktop">
                  <img src="./assets/image/bashgahMoshtarian/loan.png" alt="" />
                  <h3>بی‌محدودیت، سفرهای به‌صرفه می‌روید</h3>
                  <p>تخفیف‌های شگفتانه روی همه محصولات بدون سقف و محدودیت</p>
                </div>
                <div className="item-emkanat-desktop">
                  <img
                    src="./assets/image/bashgahMoshtarian/revival-of-nature.png"
                    alt=""
                  />
                  <h3>همسفر ماندگار روزگار می‌شوید</h3>
                  <p>
                    اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار و
                    پروژه‌های احیای محیط زیست
                  </p>
                </div>
              </div>
              <div className="body-emkanat-noghrei child-body-emkanat">
                <div className="item-emkanat-desktop">
                  <img
                    src="./assets/image/bashgahMoshtarian/crossing-the-queue.png"
                    alt=""
                  />
                  <h3>جلوتر از بقیه می‌ایستید</h3>
                  <p>
                    عبور از نصف صف تماس و امکان ثبت استرداد فقط با یک تماس تلفنی
                  </p>
                </div>
                <div className="item-emkanat-desktop">
                  <img src="./assets/image/bashgahMoshtarian/loan.png" alt="" />
                  <h3>بیشتر و به‌صرفه‌تر سفر می‌کنید</h3>
                  <p>تخفیف‌های شگفتانه روی همه محصولات تا سقف ۱۰ درصد</p>
                </div>
                <div className="item-emkanat-desktop">
                  <img
                    src="./assets/image/bashgahMoshtarian/revival-of-nature.png"
                    alt=""
                  />
                  <h3>همسفر ماندگار روزگار می‌شوید</h3>
                  <p>
                    اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار و
                    پروژه‌های احیای محیط زیست
                  </p>
                </div>
              </div>
              <div className="body-emkanat-abi child-body-emkanat">
                <div className="item-emkanat-desktop">
                  <img
                    src="./assets/image/bashgahMoshtarian/crossing-the-queue.png"
                    alt=""
                  />
                  <h3>در لحظات مهم در اولویت هستید</h3>
                  <p>
                    اولویت در صف تماس و پاسخگویی آنلاین در صورت نزدیک‌بودن زمان
                    حرکت
                  </p>
                </div>
                <div className="item-emkanat-desktop">
                  <img src="./assets/image/bashgahMoshtarian/loan.png" alt="" />
                  <h3>به‌صرفه‌تر سفر می‌کنید</h3>
                  <p>تخفیف‌های شگفتانه روی همه محصولات تا سقف ۵ درصد</p>
                </div>
                <div className="item-emkanat-desktop">
                  <img
                    src="./assets/image/bashgahMoshtarian/revival-of-nature.png"
                    alt=""
                  />
                  <h3>همسفر ماندگار روزگار می‌شوید</h3>
                  <p>
                    اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار و
                    پروژه‌های احیای محیط زیست
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content3-bashgah-moshtarian-desktop">
          <div>
            <img
              src="./assets/image/bashgahMoshtarian/loyalty-2-desktop.png"
              alt=""
            />
          </div>
          <div>
            <h2>چگونه امتیازهای بیشتری بگیریم؟</h2>
            <p>
              اینکه عضو کدام اتاق باشید، به امتیاز شما بستگی دارد. شما می‌توانید
              با روش‌های زیر امتیازهایتان را بیشتر کنید و وارد اتاق‌های دیگر
              شوید:
            </p>
            <div className="ul-bashgah-moshtarian">
              <ul>
                <li>
                  <span>
                    <Icon1Bashgah />
                  </span>
                  خرید محصولات مختلف از وب‌سایت و اپلیکیشن
                </li>
                <li>
                  <span>
                    <Icon2Bashgah />
                  </span>
                  ثبت‌نام و تکمیل اطلاعات حساب کاربری
                </li>
                <li>
                  <span>
                    <Icon3Bashgah />
                  </span>
                  معرفی و پیشنهاد علی‌بابا به دیگران
                </li>
                <li>
                  <span>
                    <Icon4Bashgah />
                  </span>
                  ثبت تجربیات سفر در علی‌بابا پلاس (به‌زودی)
                </li>
                <li>
                  <span>
                    <Icon5Bashgah />
                  </span>
                  ثبت نظر و امتیاز به محصولات هتل و تور (به‌زودی)
                </li>
                <li>
                  <span>
                    <Icon6Bashgah />
                  </span>
                  شرکت در نظرسنجی‌های علی‌بابا (به‌زودی)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="your-question">
          <h2>پرسش‌های پرتکرار</h2>
          <div className="main-your-question">{item_your_question}</div>
        </section>
      </div>
      <Footer IdMore="more1" IdMoreDesktop="morebashgahdesktop" />
    </div>
  );
};

export default MoshtarianDesktop;
