import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import useViewport from "../components/UseLayoutEffect";

const WhyAlibaba = () => {
  const { width } = useViewport();

  return (
    <div className="why-alibaba">
      {width < 900 ? <></> : <Header />}

      <div className="bg-why-alibaba">
        {/* <img src="./assets/image/WhyAlibaba/new-hero-image.jpg" alt="" /> */}
        <div className="bg-dark-why-alibaba"></div>
      </div>
      <div className="main main-why-alibaba">
        <h2>چرا علی بابا</h2>
        <p>علی‌بابا یعنی کامل‌ترین و معتبرترین سامانه خرید اینترنتی بلیط</p>
        <ul class="why-alibaba">
          <li>ساده‌ترین و سریع‌ترین روش خرید بلیط به صورت شبانه‌روزی</li>{" "}
          <li>
            خرید و استرداد کاملا آنلاین بلیط پرواز داخلی، پرواز خارجی و قطار و{" "}
            <Link to="/bus">بلیط اتوبوس</Link>
          </li>{" "}
          <li>پوشش 100 درصدی همه مسیرهای هوایی و ریلی</li>{" "}
          <li>دسترسی آسان از طریق وب‍سایت، موبایل و اپلیکیشن</li>{" "}
          <li>پشتیبانی 24 ساعته در همه ایام سال توسط تیم مجرب مرکز تماس</li>{" "}
          <li>ارائه قیمت‌های رقابتی به همراه تضمین بلیط‌های چارتری</li>{" "}
          <li>جستجوی پیشرفته برای یافتن مناسب‌ترین بلیط هواپیما و قطار</li>{" "}
          <li>عقد قرارداد با شرکت‌ها، سازمان‌ها و دفاتر خدمات مسافری</li>
        </ul>
      </div>
      <Footer
        num="151463"
        IdMore="why-alibaba-desktop"
        IdMoreDesktop="why-alibaba-desktop2"
      />
    </div>
  );
};

export default WhyAlibaba;
