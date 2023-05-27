import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, PlusIcon, TravelIcon, UserIcon, TelegramIcon, YoutubeIcon, TwitterIcon, AparatIcon, InstagramIcon, LinkedinIcon, ToggleDownIcon } from '../icons/Icons';
import TopFooter from '../TopFooter/TopFooter';
import MobileFooter from '../MobileFooter/MobileFooter';

const Footer = ({ conditional, open, IdMore, num, IdMoreDesktop }) => {
  return (
    <footer>
      {open === true ? <MobileFooter /> : <></>}

      <section className="footer-desktop">
        {/* <section className='top-footer-desktop'>
          <div className='main-d-top-footer-desktop'>
            <div className='d-top-footer-desktop'>
              <img src="assets/image/Footer/footer1.png" alt="" />
              <div>
                <h3>رتبه یک سفر</h3>
                <p>معتبرترین عرضه‌کننده محصولات گردشگری در ایران</p>
              </div>
            </div>
            <div className='d-top-footer-desktop'>
              <img src="assets/image/Footer/footer2.png" alt="" />
              <div>
                <h3>همسفر هر سفر</h3>
                <p>ارائه تمامی خدمات سفر (پرواز، قطار، اتوبوس، هتل و تور)</p>
              </div>
            </div>
            <div className='d-top-footer-desktop'>
              <img src="assets/image/Footer/footer3.png" alt="" />
              <div>
                <h3>همسفر همه لحظات سفر</h3>
                <p>پشتیبانی و همراهی ۲۴ ساعته در تمامی مراحل سفر</p>
              </div>
            </div>
          </div>
        </section> */}
        {conditional === true ? <TopFooter /> : <></>}
        <section className="middle-footer-mobile">
          <section className="top-middle-footer-mobile">
            <section className="d-top-middle-footer-mobile d1-top-middle-footer-mobile">
              <input type="checkbox" id={"check-alibaba" + num} />
              <label htmlFor={"check-alibaba" + num}>
                <div className="head-d-top-middle-footer-mobile">
                  <h4>علی‌بابا</h4>
                  <ToggleDownIcon />
                </div>
              </label>
              <div className="body-d-top-middle-footer-mobile body1-d-top-middle-footer-mobile">
                <a href="https://www.alibabatravels.co/about-us">درباره ما</a>
                <a href="https://www.alibabatravels.co/help-center/contact-us">
                  تماس با ما
                </a>
                <a href="https://www.alibabatravels.co/why-alibaba">
                  چرا علی‌بابا
                </a>
                <a href="https://www.alibabatravels.co/insurance">
                  علی بابا پلاس
                </a>
                <a href="https://www.alibabatravels.co/insurance">
                  بیمه مسافرتی
                </a>
                <a href="https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag">
                  مجله علی‌بابا
                </a>
              </div>
            </section>
            <section className="d-top-middle-footer-mobile d2-top-middle-footer-mobile">
              <input type="checkbox" id={"check-khadamat" + num} />

              <label htmlFor={"check-khadamat" + num}>
                <div className="head-d-top-middle-footer-mobile">
                  <h4>خدمات مشتریان</h4>
                  <ToggleDownIcon />
                </div>
              </label>
              <div className="body-d-top-middle-footer-mobile">
                <a href="https://www.alibabatravels.co/help-center">
                  مرکز پشتیبانی آنلاین
                </a>
                <a href="https://www.alibabatravels.co/help-center/categories/purchase-guide">
                  راهنمای خرید
                </a>
                <a href="https://www.alibabatravels.co/help-center/categories/refund-guide">
                  راهنمای استرداد
                </a>
                <a href="https://www.alibabatravels.co/help-center/general-policy">
                  قوانین و مقررات
                </a>
                <a href="https://www.alibabatravels.co/help-center/categories/faq">
                  پرسش و پاسخ
                </a>
              </div>
            </section>
            <section className="d-top-middle-footer-mobile d3-top-middle-footer-mobile">
              <input type="checkbox" id={"check-etelaat2" + num} />
              <label htmlFor={"check-etelaat2" + num}>
                <div className="head-d-top-middle-footer-mobile">
                  <h4>اطلاعات تکمیلی</h4>
                  <ToggleDownIcon />
                </div>
              </label>
              <div className="body-d-top-middle-footer-mobile">
                <a href="https://www.alibabatravels.co/loyalty">
                  باشگاه همسفران
                </a>
                <a href="https://www.alibabatravels.co/business">
                  فروش سازمانی
                </a>
                <a href="https://partner.alibaba.ir/">همکاری با آژانس‌ها</a>
                <a href="https://www.alibabatravels.co/jobs">فرصت‌های شغلی</a>
              </div>
            </section>
            <section className="locations">
              <input type="checkbox" id={IdMore} />
              <ul>
                <li>
                  <Link to="">بلیط چارتر</Link>
                </li>
                <li>
                  <Link to="">تور کیش</Link>
                </li>
                <li>
                  <Link to="">تور استانبول</Link>
                </li>
                <li>
                  <Link to="">اجاره کلبه جنگلی</Link>
                </li>
                <li>
                  <Link to="">بلیط قطار</Link>
                </li>
                <li>
                  <Link to="">خرید بلیط هواپیما خارجی</Link>
                </li>
                <li>
                  <Link to="">اطلاعات فرودگا‌هی</Link>
                </li>
                <li>
                  <Link to="">شیوه‌نامه حقوق مسافر</Link>
                </li>
                <li>
                  <Link to="">رزرو هتل</Link>
                </li>
                <li>
                  <Link to="">هتل مشهد</Link>
                </li>
                <li>
                  <Link to="">هتل مشهد</Link>
                </li>
                <li>
                  <Link to="">هتل درویشی مشهد</Link>
                </li>
                <li>
                  <Link to="">هتل شایگان کیش</Link>
                </li>
              </ul>
              <label htmlFor={IdMore}>
                <div>
                  <span></span>
                  <ToggleDownIcon />
                </div>
              </label>
            </section>

            <section className="d-top-middle-footer-mobile d4-top-middle-footer-mobile">
              <div className="tel-poshtibani">
                <h6> تلفن پشتیبانی: </h6>
                <h6>۰۲۱ - ۴۳۹۰۰۰۰۰ </h6>
              </div>
              <div className="social-media">
                <p> در شبکه های اجتماعی: </p>
                <div>
                  <a href="https://t.me/AlibabaTravels">
                    <TelegramIcon />
                  </a>
                  <a href="https://www.youtube.com/channel/UChN_55cq3XLPUUv7RRzlNgQ">
                    <YoutubeIcon />
                  </a>
                  <a href="https://twitter.com/alibaba_travels">
                    <TwitterIcon />
                  </a>
                  <a href="https://www.aparat.com/alibaba_travels">
                    <AparatIcon />
                  </a>
                  <a href="https://instagram.com/alibaba_travels">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.linkedin.com/company/alibaba-travels">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
              <img
                src="./assets/image/Footer/AlibabaIcon.png"
                alt=""
                className="logofooter"
              />
              <div className="copy">
                <p>
                  {" "}
                  کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و
                  متعلق به شرکت سفرهای علی‌بابا می‌باشد.{" "}
                  <span> (نسخه 1.223.0) </span>
                </p>
              </div>
              {/* <h6> دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1 </h6>
              <div className='namads-alibaba'>
                <a href="https://ecunion.ir/verify/alibaba.ir?token=45162255b6952bb8af5b"><div><img src="./assets/image/Footer/namad1.png" alt="" /></div></a>
                <a href="https://logo.samandehi.ir/Verify.aspx?id=33643&p=xlaoxlaogvkaaodsxlao"><div><img src="./assets/image/Footer/namad2.png" alt="" /></div></a>
                <a href="https://trustseal.enamad.ir/?id=8607&Code=MKrh33vhkzb6UNA2VDkk"><div><img src="./assets/image/Footer/namad3.png" alt="" /></div></a>
                <a href="https://farasa.cao.ir/sysworkflow/fa/modern/3810212626028ab03488017019616799/6464336316028ab04e3c618028352200.php"><div><img src="./assets/image/Footer/namad4.png" alt="" /></div></a>
                <a href="http://www.aira.ir/"><div><img src="./assets/image/Footer/namad5.png" alt="" /></div></a>
                <a href="https://caa.gov.ir/"><div><img src="./assets/image/Footer/namad6.png" alt="" /></div></a>
              </div> */}
            </section>
          </section>
        </section>
        <section className="middle-footer-desktop">
          <section className="top-middle-footer-desktop">
            <section className="d-top-middle-footer-desktop d1-top-middle-footer-desktop">
              <div className="head-d-top-middle-footer-desktop">
                <h4>علی‌بابا</h4>
              </div>

              <div className="body-d-top-middle-footer-desktop body1-d-top-middle-footer-desktop">
                <a href="https://www.alibabatravels.co/about-us">درباره ما</a>
                <a href="https://www.alibabatravels.co/help-center/contact-us">
                  تماس با ما
                </a>
                <a href="https://www.alibabatravels.co/why-alibaba">
                  چرا علی‌بابا
                </a>
                <a href="https://www.alibabatravels.co/insurance">
                  علی بابا پلاس
                </a>
                <a href="https://www.alibabatravels.co/insurance">
                  بیمه مسافرتی
                </a>
                <a href="https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag">
                  مجله علی‌بابا
                </a>
              </div>
            </section>
            <section className="d-top-middle-footer-desktop d2-top-middle-footer-desktop">
              <div className="head-d-top-middle-footer-desktop">
                <h4>خدمات مشتریان</h4>
              </div>

              <div className="body-d-top-middle-footer-desktop">
                <a href="https://www.alibabatravels.co/help-center">
                  مرکز پشتیبانی آنلاین
                </a>
                <a href="https://www.alibabatravels.co/help-center/categories/purchase-guide">
                  راهنمای خرید
                </a>
                <a href="https://www.alibabatravels.co/help-center/categories/refund-guide">
                  راهنمای استرداد
                </a>
                <a href="https://www.alibabatravels.co/help-center/general-policy">
                  قوانین و مقررات
                </a>
                <a href="https://www.alibabatravels.co/help-center/categories/faq">
                  پرسش و پاسخ
                </a>
              </div>
            </section>
            <section className="d-top-middle-footer-desktop d3-top-middle-footer-desktop">
              <div className="head-d-top-middle-footer-desktop">
                <h4>اطلاعات تکمیلی</h4>
              </div>

              <div className="body-d-top-middle-footer-desktop">
                <a href="https://www.alibabatravels.co/loyalty">
                  باشگاه همسفران
                </a>
                <a href="https://www.alibabatravels.co/business">
                  فروش سازمانی
                </a>
                <a href="https://partner.alibaba.ir/">همکاری با آژانس‌ها</a>
                <a href="https://www.alibabatravels.co/jobs">فرصت‌های شغلی</a>
              </div>
            </section>
            <section className="d-top-middle-footer-desktop d4-top-middle-footer-desktop">
              <img
                src="./assets/image/Footer/AlibabaIcon.png"
                alt=""
                className="logofooter"
              />

              <div className="main-text-footer-dekstop">
                <div className="tel-poshtibani">
                  <h6> تلفن پشتیبانی: </h6>
                  <h6>
                    <a href="tel:02143900000">۰۲۱ - ۴۳۹۰۰۰۰۰ </a>
                  </h6>
                </div>
                <h6>
                  {" "}
                  دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان
                  بیمه چهارم، بن‌بست گل‌ها، پلاک 1{" "}
                </h6>
              </div>
              <div className="namads-alibaba">
                <a href="https://ecunion.ir/verify/alibaba.ir?token=45162255b6952bb8af5b">
                  <div>
                    <img src="./assets/image/Footer/namad1.png" alt="" />
                  </div>
                </a>
                <a href="https://logo.samandehi.ir/Verify.aspx?id=33643&p=xlaoxlaogvkaaodsxlao">
                  <div>
                    <img src="./assets/image/Footer/namad2.png" alt="" />
                  </div>
                </a>
                <a href="https://trustseal.enamad.ir/?id=8607&Code=MKrh33vhkzb6UNA2VDkk">
                  <div>
                    <img src="./assets/image/Footer/namad3.png" alt="" />
                  </div>
                </a>
                <a href="https://farasa.cao.ir/sysworkflow/fa/modern/3810212626028ab03488017019616799/6464336316028ab04e3c618028352200.php">
                  <div>
                    <img src="./assets/image/Footer/namad4.png" alt="" />
                  </div>
                </a>
                <a href="http://www.aira.ir/">
                  <div>
                    <img src="./assets/image/Footer/namad5.png" alt="" />
                  </div>
                </a>
                <a href="https://caa.gov.ir/">
                  <div>
                    <img src="./assets/image/Footer/namad6.png" alt="" />
                  </div>
                </a>
              </div>
            </section>
          </section>
          <section className="bottom-footer-desktop">
            <section className="locations">
              <input type="checkbox" id={IdMoreDesktop} />
              <ul>
                <li>
                  <Link to="">بلیط چارتر</Link>
                </li>
                <li>
                  <Link to="">تور کیش</Link>
                </li>
                <li>
                  <Link to="">تور استانبول</Link>
                </li>
                <li>
                  <Link to="">اجاره کلبه جنگلی</Link>
                </li>
                <li>
                  <Link to="">بلیط قطار</Link>
                </li>
                <li>
                  <Link to="">خرید بلیط هواپیما خارجی</Link>
                </li>
                <li>
                  <Link to="">اطلاعات فرودگا‌هی</Link>
                </li>
                <li>
                  <Link to="">شیوه‌نامه حقوق مسافر</Link>
                </li>
                <li>
                  <Link to="">رزرو هتل</Link>
                </li>
                <li>
                  <Link to="">هتل مشهد</Link>
                </li>
                <li>
                  <Link to="">هتل مشهد</Link>
                </li>
                <li>
                  <Link to="">هتل درویشی مشهد</Link>
                </li>
                <li>
                  <Link to="">هتل شایگان کیش</Link>
                </li>
              </ul>
              <label htmlFor={IdMoreDesktop}>
                <div>
                  <span></span>
                  <ToggleDownIcon />
                </div>
              </label>
            </section>
          </section>
        </section>
        <section className="bottom-footer-desktop">
          <div className="d1-bottom-footer-desktop">
            <div className="copy">
              <p>
                {" "}
                کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و
                متعلق به شرکت سفرهای علی‌بابا می‌باشد.{" "}
              </p>
              <span> (نسخه 1.223.0) </span>
            </div>
          </div>
          <div className="d2-bottom-footer-desktop">
            <a href="https://t.me/AlibabaTravels">
              <TelegramIcon />
            </a>
            <a href="https://www.youtube.com/channel/UChN_55cq3XLPUUv7RRzlNgQ">
              <YoutubeIcon />
            </a>
            <a href="https://twitter.com/alibaba_travels">
              <TwitterIcon />
            </a>
            <a href="https://www.aparat.com/alibaba_travels">
              <AparatIcon />
            </a>
            <a href="https://instagram.com/alibaba_travels">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/alibaba-travels">
              <LinkedinIcon />
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer