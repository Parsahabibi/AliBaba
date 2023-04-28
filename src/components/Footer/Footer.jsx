import React from 'react'
import { HomeIcon, PlusIcon, TravelIcon, UserIcon, TelegramIcon, YoutubeIcon, TwitterIcon, AparatIcon, InstagramIcon, LinkedinIcon } from '../icons/Icons';
const Footer = () => {
  return (
    <footer>
      <section className='footer-mobile'>
        <div>
          <HomeIcon />
          <h5>خانه</h5>
        </div>
        <div>
          <PlusIcon />
          <h5>پلاس</h5>
        </div>
        <div>
          <TravelIcon />
          <h5>سفر های من</h5>
        </div>
        <div>
          <UserIcon />
          <h5>حساب کاربری</h5>
        </div>
      </section>
      <section className='footer-desktop'>
        <section className='top-footer-desktop'>
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
        </section>
        <section className='middle-footer-desktop'>
          <section className='top-middle-footer-desktop'>
            <section className='d-top-middle-footer-desktop d1-top-middle-footer-desktop'>
              <h4>علی‌بابا</h4>
              <a href="https://www.alibabatravels.co/about-us">درباره ما</a>
              <a href="https://www.alibabatravels.co/help-center/contact-us">تماس با ما</a>
              <a href="https://www.alibabatravels.co/why-alibaba">چرا علی‌بابا</a>
              <a href="https://www.alibabatravels.co/insurance">علی بابا پلاس</a>
              <a href="https://www.alibabatravels.co/insurance">بیمه مسافرتی</a>
              <a href="https://www.alibaba.ir/mag/?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Maghttps://www.alibaba.ir/mag?utm_source=alibaba&utm_medium=Click_CTA&utm_campaign=inbound&utm_term=category-buttons&utm_content=Alibaba-Mag">مجله علی‌بابا</a>
            </section>
            <section className='d-top-middle-footer-desktop d2-top-middle-footer-desktop'>
              <h4>خدمات مشتریان</h4>
              <a href="https://www.alibabatravels.co/help-center">مرکز پشتیبانی آنلاین</a>
              <a href="https://www.alibabatravels.co/help-center/categories/purchase-guide">راهنمای خرید</a>
              <a href="https://www.alibabatravels.co/help-center/categories/refund-guide">راهنمای استرداد</a>
              <a href="https://www.alibabatravels.co/help-center/general-policy">قوانین و مقررات</a>
              <a href="https://www.alibabatravels.co/help-center/categories/faq">پرسش و پاسخ</a>
            </section>
            <section className='d-top-middle-footer-desktop d3-top-middle-footer-desktop'>
              <h4>اطلاعات تکمیلی</h4>
              <a href="https://www.alibabatravels.co/loyalty">باشگاه همسفران</a>
              <a href="https://www.alibabatravels.co/business">فروش سازمانی</a>
              <a href="https://partner.alibaba.ir/">همکاری با آژانس‌ها</a>
              <a href="https://www.alibabatravels.co/jobs">فرصت‌های شغلی</a>
            </section>
            <section className='d-top-middle-footer-desktop d4-top-middle-footer-desktop'>
              <img src="./assets/image/Footer/AlibabaIcon.png" alt="" />
              <div className='address-alibaba'>
                <h6> تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰ </h6>
                <h6> دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1 </h6>
              </div>
              <div className='namads-alibaba'>
                <a href="https://ecunion.ir/verify/alibaba.ir?token=45162255b6952bb8af5b"><div><img src="./assets/image/Footer/namad1.png" alt="" /></div></a>
                <a href="https://logo.samandehi.ir/Verify.aspx?id=33643&p=xlaoxlaogvkaaodsxlao"><div><img src="./assets/image/Footer/namad2.png" alt="" /></div></a>
                <a href="https://trustseal.enamad.ir/?id=8607&Code=MKrh33vhkzb6UNA2VDkk"><div><img src="./assets/image/Footer/namad3.png" alt="" /></div></a>
                <a href="https://farasa.cao.ir/sysworkflow/fa/modern/3810212626028ab03488017019616799/6464336316028ab04e3c618028352200.php"><div><img src="./assets/image/Footer/namad4.png" alt="" /></div></a>
                <a href="http://www.aira.ir/"><div><img src="./assets/image/Footer/namad5.png" alt="" /></div></a>
                <a href="https://caa.gov.ir/"><div><img src="./assets/image/Footer/namad6.png" alt="" /></div></a>
              </div>
            </section>
          </section>

          <section className='bottom-middle-footer-desktop'>

          </section>
        </section>
        <section className='bottom-footer-desktop'>
          <div className='d1-bottom-footer-desktop'>
            <p> کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. <span> (نسخه 1.223.0) </span></p>
          </div>
          <div className='d2-bottom-footer-desktop'>
            <a href="https://t.me/AlibabaTravels"><TelegramIcon /></a>
            <a href="https://www.youtube.com/channel/UChN_55cq3XLPUUv7RRzlNgQ"><YoutubeIcon /></a>
            <a href="https://twitter.com/alibaba_travels"><TwitterIcon /></a>
            <a href="https://www.aparat.com/alibaba_travels"><AparatIcon /></a>
            <a href="https://instagram.com/alibaba_travels"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/company/alibaba-travels"><LinkedinIcon /></a>
          </div>
        </section>
      </section>
    </footer>
  )
}

export default Footer