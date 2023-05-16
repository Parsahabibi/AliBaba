import React from "react";
import Footer from "../Footer/Footer";
import {
  Icon1Bashgah,
  Icon2Bashgah,
  Icon3Bashgah,
  Icon4Bashgah,
  Icon5Bashgah,
  Icon6Bashgah,
  ToggleDownIcon,
} from "../icons/Icons";
import QuestionItem from "../Yourquestion/QuestionItem";

const MoshtarianMobile = () => {
  const content_item_your_question = [
    {
      id: "item1-questions-moshtarian",
      title: `باشگاه همسفران علی‌بابا چیست؟`,
      description: `اینجا جایگاهی ویژه برای همسفران خاص علی‌باباست؛ اعضای این باشگاه متناسب با امتیازهایشان در یکی از اتاق‌های آبی، نقره‌ای و طلایی قرار می‌گیرند و خدمات متنوع دریافت می‌کنند.`,
    },
    {
      id: "item2-questions-moshtarian",
      title: `منظور از اتاق در باشگاه همسفران چیست و چطور می‌توانم وارد این اتاق‌ها بشوم؟`,
      description: `باشگاه همسفران علی‌بابا سه اتاق دارد: آبی، نقره‌ای و طلایی.<br>به محض اینکه برای اولین بار در علی‌بابا ثبت‌نام می‌کنید و اطلاعات حساب کاربری‌تان را تکمیل می‌کنید، به‌صورت خودکار وارد اتاق آبی می‌شوید. هر چقدر بیشتر همسفر شوید و فعالیت‌های مرتبط با سفر را دنبال کنید، امتیازهای بیشتری کسب می‌کنید و درِ اتاق‌های دیگر به روی شما باز می‌شود تا به خدمات بیشتر و متنوع‌تر دسترسی پیدا کنید.`,
    },
    {
      id: "item3-questions-moshtarian",
      title: `در باشگاه همسفران چطور امتیازم را بیشتر کنم؟`,
      description: `معیار ورود به هر اتاق (آبی، نقره‌ای و طلایی) میزان امتیاز است. امتیاز شما با خرید محصولات، تکمیل اطلاعات حساب کاربری، پیشنهاد علی‌بابا به دیگران و... بیشتر و بیشتر می‌شود.`,
    },
    {
      id: "item4-questions-moshtarian",
      title: `اتاق‌های مختلف باشگاه همسفران چه امکاناتی دارند؟`,
      description: `هر اتاق امکانات متفاوتی دارد؛ اما به‌طور خلاصه می‌توان گفت که در این اتاق‌ها امکان رزرو سفر با تخفیف، دسترسی به امکانات ویژه پشتیبانی مثل جلوافتادن در صف تماس، امکان مشاوره خصوصی، تشریفات CIP، بیمه مسافرتی رایگان و... برای اعضای اتاق درنظر گرفته شده است. همچنین امکان مشارکت در فعالیت‌های خیرخواهانه هم فراهم است.`,
    },
    {
      id: "item5-questions-moshtarian",
      title: `چطور امکانات هر اتاق را فعال کنم؟`,
      description: `امکانات هر اتاق با ورود شما به اتاق به‌صورت خودکار فعال می‌شود و به صورت دوره‌ای از طریق پیامک و یا ایمیل به شما اطلاع‌رسانی خواهد شد.`,
    },
    {
      id: "item6-questions-moshtarian",
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

  return (
    <div className="bashgah-moshtarian-mobile">
      <div className="header-bashgah-mobile">
        <img src="./assets/image/Footer/AlibabaIcon.png" alt="" />
      </div>
      <div className="body-bashgah-mobile">
        <div className="title-body-bashgah-mobile">
          <h1>باشگاه همسفران علی‌بابا </h1>
          <p>همراه همسفران علی‌بابا در هر سفر</p>
        </div>
        <div className="content-bashgah-mobile">
          <p>
            اینجا باشگاه همسفران علی‌باباست؛ جایگاهی ویژه برای شما که همسفر خاص
            ما هستید.
            <br />
            یک دورهمی خودمانی برای کسانی که علی‌بابا را به عنوان همسفر خود
            انتخاب کرده‌اند. اعضای این باشگاه متناسب با امتیازهایشان در یکی از
            اتاق‌های آبی، نقره‌ای و طلایی دور هم جمع می‌شوند و به خدمات متنوعی
            دسترسی پیدا می‌کنند.
          </p>
          <img
            className="mt-24 mb-48"
            src="./assets/image/bashgahMoshtarian/loyalty-mobile-1.png"
            alt=""
          />
          <h2 className="align-center mtb-16">
            امکانات اتاق‌های باشگاه همسفران
          </h2>
          <p className="align-center mb-24">
            باشگاه همسفران علی‌بابا سه اتاق خواهد داشت: اتاق آبی، نقره‌ای و
            طلایی.
          </p>
          <p className="align-center mb-16">
            به محض اینکه برای اولین بار در علی‌بابا ثبت‌نام و اطلاعات حساب
            کاربری‌تان را تکمیل کنید، به‌صورت خودکار وارد اتاق آبی خواهید شد. هر
            چقدر بیشتر با علی‌بابا همسفر شوید و فعالیت‌های مرتبط با سفر را دنبال
            کنید، امتیازهای بیشتری کسب خواهید کرد و درِ اتاق‌های دیگر به روی شما
            باز می‌شود تا به خدمات بیشتر و متنوع‌تر دسترسی پیدا کنید.
          </p>
          <div className="emkanat mb-32">
            <div className="item-emkanat">
              <input type="checkbox" id="inp1" />

              <label htmlFor="inp1">
                <div className="head-item-emkanat">
                  <p>امکانات اتاق طلایی</p>
                  <span>
                    <ToggleDownIcon />
                  </span>
                </div>
              </label>
              <div className="body-item-emkanat">
                <div className="matn-body-item-emkanat">
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/support-1.png"
                        alt=""
                      />
                      <h3>پشتیبانی اختصاصی فقط برای شماست!</h3>
                    </div>
                    <p>
                      عبور از کل صف تماس، امکان ثبت استرداد فقط با یک تماس تلفنی
                      و دریافت مشاوره اختصاصی VIP
                    </p>
                  </div>
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/diamond.png"
                        alt=""
                      />
                      <h3>با کیفیت استثنایی سفر می‌کنید(به زودی)</h3>
                    </div>
                    <p>
                      ارتقاء کلاس پروازها و ستاره هتل‌ها، تشریفات CIP و VIP،
                      تفریحات رایگان در حین سفر و بیمه مسافرتی رایگان
                    </p>
                  </div>
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/loan.png"
                        alt=""
                      />
                      <h3>بی‌محدودیت، سفرهای به‌صرفه می‌روید</h3>
                    </div>
                    <p>تخفیف‌های شگفتانه روی همه محصولات بدون سقف و محدودیت</p>
                  </div>
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/revival-of-nature.png"
                        alt=""
                      />
                      <h3>همسفر ماندگار روزگار می‌شوید</h3>
                    </div>
                    <p>
                      اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار
                      و پروژه‌های احیای محیط زیست
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-emkanat">
              <input type="checkbox" id="inp2" />

              <label htmlFor="inp2">
                <div className="head-item-emkanat">
                  <p>امکانات اتاق نقره‌ای</p>
                  <span>
                    <ToggleDownIcon />
                  </span>
                </div>
              </label>
              <div className="body-item-emkanat">
                <div className="matn-body-item-emkanat">
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/crossing-the-queue.png"
                        alt=""
                      />
                      <h3>جلوتر از بقیه می‌ایستید</h3>
                    </div>
                    <p>
                      عبور از نصف صف تماس و امکان ثبت استرداد فقط با یک تماس
                      تلفنی
                    </p>
                  </div>

                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/loan.png"
                        alt=""
                      />
                      <h3>بیشتر و به‌صرفه‌تر سفر می‌کنید</h3>
                    </div>
                    <p>تخفیف‌های شگفتانه روی همه محصولات تا سقف ۱۰ درصد</p>
                  </div>

                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/revival-of-nature.png"
                        alt=""
                      />
                      <h3>همسفر ماندگار روزگار می‌شوید</h3>
                    </div>
                    <p>
                      اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار
                      و پروژه‌های احیای محیط زیست
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-emkanat">
              <input type="checkbox" id="inp3" />
              <label htmlFor="inp3">
                <div className="head-item-emkanat">
                  <p>امکانات اتاق آبی</p>
                  <span>
                    <ToggleDownIcon />
                  </span>
                </div>
              </label>

              <div className="body-item-emkanat">
                <div className="matn-body-item-emkanat">
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/crossing-the-queue.png"
                        alt=""
                      />
                      <h3>در لحظات مهم در اولویت هستید</h3>
                    </div>
                    <p>
                      اولویت در صف تماس و پاسخگویی آنلاین در صورت نزدیک‌بودن
                      زمان حرکت
                    </p>
                  </div>
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/loan.png"
                        alt=""
                      />
                      <h3>به‌صرفه‌تر سفر می‌کنید</h3>
                    </div>
                    <p>تخفیف‌های شگفتانه روی همه محصولات تا سقف ۵ درصد</p>
                  </div>
                  <div className="item-matn-body-item-emkanat">
                    <div>
                      <img
                        src="./assets/image/bashgahMoshtarian/revival-of-nature.png"
                        alt=""
                      />
                      <h3>همسفر ماندگار روزگار می‌شوید</h3>
                    </div>
                    <p>
                      اختصاص بخشی از سود خرید شما به سفرهای درمانی کودکان بیمار
                      و پروژه‌های احیای محیط زیست
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="align-center">چگونه امتیازهای بیشتری بگیریم؟</h2>
          <img
            src="./assets/image/bashgahMoshtarian/loyalty-2.png"
            alt=""
            className="mb-16"
          />
          <p className="align-center mb-16">
            اینکه عضو کدام اتاق باشید، به امتیاز شما بستگی دارد. شما می‌توانید
            با روش‌های زیر امتیازهایتان را بیشتر کنید و وارد اتاق‌های دیگر شوید:
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

        <section className="your-question">
          <h2>پرسش‌های پرتکرار</h2>
          <div className="main-your-question">{item_your_question}</div>
        </section>
      </div>
      <Footer IdMore="more2" />
    </div>
  );
};

export default MoshtarianMobile;
