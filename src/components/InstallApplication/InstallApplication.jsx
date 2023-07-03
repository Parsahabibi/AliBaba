import React, { useEffect, useRef, useState } from 'react'
import { Enter, LogoOfAlibaba, Tick, Arrow, Point, Money, RightArrow, Poshtibani, LogOut, Bazar, Maykat, Download, Internet, AlibabaIR } from '../icons/Icons'
import { Link } from 'react-router-dom'
import alibabaInstall from '../../assets/image/HomeImage/alibabaInstall.jpg'
import alibabaInstall1 from "../../assets/image/HomeImage/alibabaInstall2.jpg"
import alibabaInstall2 from "../../assets/image/HomeImage/alibabaInstall3.jpg"
import alibabaInstall3 from "../../assets/image/HomeImage/alibabaInstall4.jpg"
import alibabaInstall4 from "../../assets/image/HomeImage/alibabaInstall5.jpg"
import Footer from '../Footer/Footer'
import TopFooter from '../TopFooter/TopFooter'
const InstallApplication = () => {


    // const [desktop , setDesktop] = useState(false)

    const LoginItems = [
        { id: 1, image: <Enter />, title: " اطلاعات حساب کاربری", link: "/A" },
        { id: 2, image: <Poshtibani />, title: " درخواست پشتیبانی", link: "" },
        { id: 3, image: <LogOut />, title: " خروج از حساب کاربری", link: "" },
    ]


    const itemsDownload = [
        { id: 1, image: <img src='https://www.alibaba.ir/assets/images/app-markets/logo-store-bazar-cb09f55a.svg' />, title: "کافه بازار", link: "https://cafebazaar.ir/app/ir.alibaba/" },
        { id: 2, image: <img src='https://www.alibaba.ir/assets/images/app-markets/logo-store-myket-99dcd02e.svg' />, title: "مایکت", link: "https://myket.ir/app/ir.alibaba" },
        { id: 3, image: <Download />, title: "دانلود مستقیم", link: "https://www.alibaba.ir/download/android/ir.alibaba.apk" },
        { id: 4, image: <Internet />, title: "وب اپلیکیشن", link: "" },
    ]



    const Success = [
        { id: 1, image: <img src='https://www.alibaba.ir/assets/images/app/user-8c0aa1f0.svg' />, head: " بیش از ", sub: "کاربر فعال", title: "1,200,000" },
        { id: 2, image: <img src='https://www.alibaba.ir/assets/images/app/score-8d7a8acc.svg' />, head: " بیش از ", sub: "رضایت کاربران", title: "94%" },
        { id: 3, image: <img src='https://www.alibaba.ir/assets/images/app/baggage-793ec591.svg' />, head: " بیش از ", sub: "سفارش موفق محصولات گردشگری", title: "7,000,000" },
    ]


    const downloadIos = [
        { id: 1, title: "سیب اپ", image: <img src="https://www.alibaba.ir/assets/images/app-markets/logo-store-sibapp-light-ecd8b7b4.svg" /> },
        { id: 2, title: "سیبچه", image: <img src="https://www.alibaba.ir/assets/images/app-markets/logo-store-sibche-light-38891e8b.svg" /> },
        { id: 3, title: "سیب ایرانی", image: <img src="https://www.alibaba.ir/assets/images/app-markets/logo-store-sibirani-light-eca2cf75.svg" /> },
        { id: 4, title: "اناردونی", image: <img src="https://www.alibaba.ir/assets/images/app-markets/logo-store-anardooni-bbfcc1d7.svg" /> },
        { id: 5, title: "آی اپس", image: <img src="https://www.alibaba.ir/assets/images/app-markets/logo-store-iapps-bf2f1022.svg" /> },
        { id: 6, title: "وب اپلیکیشن", image: <Internet /> },
    ]



    const bodyInformation = [
        { id: 1, title: "همهٔ سفر، در یک اپلیکیشن", image: alibabaInstall, sub: "پوشش کامل پروازها، قطارها، اتوبوس‌ها، تورها، هتل‌ها و اقامتگاه‌ها" },
        { id: 2, title: "تجربه‌های ناب مسافران قبلی در علی‌بابا پلاس", image: alibabaInstall1, sub: "مشاهده هزاران تجربه دست اول از جاذبه‌های دیدنی + امکان ثبت تجربه" },
        { id: 3, title: "مشاهده به‌صرفه‌ترین زمان سفر", image: alibabaInstall2, sub: "نمایش ارزان‌ترین بلیط روزهای قبل و بعد، با تقویم قیمتی علی‌بابا" },
        { id: 4, title: "مشاهده به‌صرفه‌ترین راه‌های سفر", image: alibabaInstall3, sub: "امکان مقایسه قیمت بلیط پرواز، قطار و اتوبوس برای مقصد دلخواه" },
        { id: 5, title: "خریدی آگاهانه، سفری لذت‌بخش", image: alibabaInstall4, sub: "مشاهده اطلاعات کامل بلیط‌ها، تورها و تصاویر هتل‌ها قبل از خرید" },
    ]


    const services = [
        { id: 1, image: <img src='https://www.alibaba.ir/assets/images/app/refund-f07cb680.svg' />, title: "سفر با خیال آسوده", sub: "استرداد آنلاین و آسان" },
        { id: 2, image: <img src='https://www.alibaba.ir/assets/images/app/news-7253c0ea.svg' />, title: "دانستنی‌های سفر", sub: "پوشش داغ‌ترین اخبار و اطلاعات سفر" },
        { id: 3, image: <img src='https://www.alibaba.ir/assets/images/app/discount-8fa09242.svg' />, title: "پشتیبانی ۲۴ساعته", sub: "پاسخگویی شایسته در همه ایام سال" }
    ]


    const [openLogin, setOpenLogin] = useState(false)



    const [openIos, setOpenIos] = useState(false)


    const dropdownRefLogin = useRef();




    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefLogin.current && !dropdownRefLogin.current.contains(event.target)) {
                setOpenLogin(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRefLogin]);



    return (
      <div className="InstallApplication">
        <div className="header">
          <div className="logo">
            <Link to={'/'}><LogoOfAlibaba /></Link>
            <div className="alibabaIr">
              <AlibabaIR />
              <span> خرید بلیط، هتل، تور </span>
            </div>
          </div>
          <div className="items">
            <div className="login" ref={dropdownRefLogin}>
              <button
                onClick={() => {
                  setOpenLogin(!openLogin);
                }}
              >
                <div className="user">
                  <Tick className="tick" />
                  <Enter />
                </div>
                <p className="number">09197401839</p>
                <Arrow />
                <div className="subMenuLogin">
                  {openLogin === true ? (
                    <div className="subMenu">
                      <div className="information">
                        <div className="number">
                          <p>09197401839</p>
                        </div>
                        <div className="point">
                          <Point />
                          <h5>0 امتیاز</h5>
                        </div>
                        <div className="money">
                          <div className="rightMoney">
                            <Money />
                            <h5>0 ریال</h5>
                          </div>
                          <div className="buttonOfMoney">
                            <Link to={""}>
                              <button>
                                افزایش
                                <RightArrow />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="others">
                        {LoginItems.map((item) => (
                          <div className="itemsOthers" key={item.id}>
                            <Link to={item.link}>
                              <div className="itemOthers">
                                {item.image}
                                {item.title}
                              </div>
                            </Link>
                            <div className="borderBottomItem"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="body">
          <div className=" Top">
            <div className="ApplicationAliBaba">
              <div className="title">
                <h1> اپلیکیشن علی‌بابا </h1>
                <h6> کاربردی‌ترین اپلیکیشن سفر </h6>
              </div>
              <div className="image">
                <div className="imageMobile">
                  <img
                    src={require("../../assets/image/HomeImage/alibaba.jpg")}
                  />
                </div>
                <div className="imageDesktop">
                  <div className="rightDesktopImage">
                    <img src="https://www.alibaba.ir/assets/images/app/qr-e9f64f34.svg" />
                    <p>برای دانلود اسکن کنید</p>
                  </div>
                  <div className="or">
                    <div className="rightBorder"></div>
                    <p>یا</p>
                    <div className="leftBorder"></div>
                  </div>
                  <div className="HintInstall">
                    <Link to={"/Install"}>
                      <div className="button">
                        <button> مشاهده لینک‌های دانلود </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="itemsDownload">
                {itemsDownload.map((item) => (
                  <a className="itemDownload" href={item.link} target="_blank">
                    {item.image}
                    <p>{item.title}</p>
                  </a>
                ))}
              </div>
            </div>
            <div className="download">
              {openIos === false ? (
                <div
                  onClick={() => {
                    setOpenIos(!openIos);
                  }}
                  className="ios"
                >
                  <p>دانلود نسخه iOS</p>
                </div>
              ) : (
                <div className="ItemsDownloadIos">
                  {downloadIos.map((item) => (
                    <a className="ItemDownloadIos" href="" target="_blank">
                      {item.image}
                      <p>{item.title}</p>
                    </a>
                  ))}
                </div>
              )}
              <div className="success">
                {Success.map((item) => (
                  <div className="itemSuccess">
                    <div className="image">{item.image}</div>
                    <div className="des">
                      <h5>{item.head}</h5>
                      <h2>{item.title}</h2>
                      <h5 className="h5">{item.sub}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Bottom">
            <div className="informations">
              {bodyInformation.map((item) => (
                <div className="information" key={item.id}>
                  <div className="title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="imageInstall">
                    <img src={item.image} alt="pic" />
                  </div>
                  <div className="sub">
                    <h6>{item.sub}</h6>
                  </div>
                </div>
              ))}
            </div>
            <div className="informationsDesktop">
              {bodyInformation.map((item) => (
                <div className="informationDesktop" key={item.id}>
                  <div className="titleDesktop">
                    <h3>{item.title}</h3>
                    <p>{item.sub}</p>
                  </div>
                  <div className="imageInstallDesktop">
                    <img src={item.image} alt="pic" />
                  </div>
                </div>
              ))}
            </div>
            <div className="servicesInstall">
              {services.map((item) => (
                <div className="serviceInstall">
                  {item.image}
                  <div className="desInstall">
                    <h3>{item.title}</h3>
                    <h6>{item.sub}</h6>
                  </div>
                </div>
              ))}
            </div>
            <div className="app">
              <div className="ApplicationAliBaba">
                <div className="title">
                  <h1> اپلیکیشن علی‌بابا </h1>
                  <h6> کاربردی‌ترین اپلیکیشن سفر را به‌رایگان دانلود کنید </h6>
                </div>
                <div className="image">
                  <img
                    src={require("../../assets/image/HomeImage/alibaba.jpg")}
                  />
                </div>
              </div>
              <Link to={"/Install"}>
                <div className="button">
                  <button> مشاهده لینک‌های دانلود </button>
                </div>
              </Link>
            </div>
            <div className="AppDesktop">
              <div className="AnroidDesktop">
                <h3>دانلود نسخه اندروید</h3>
                {itemsDownload.map((item) => (
                  <Link className="ItemAnroidDesktop" to={""}>
                    {item.image}
                    <h4>{item.title}</h4>
                  </Link>
                ))}
              </div>
              <div className="IosDesktop">
                <h3>دانلود نسخه iOS</h3>
                <div className="ItemsIosDesktop">
                  <div className="ItemIosDesktop">
                    {downloadIos.map((item) => (
                      <Link className="content" to={""}>
                        {item.image}
                        <h4>{item.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          conditional={false}
          open={false}
          IdMore="moreInstallApplicationmobile"
          IdMoreDesktop="moreInstallApplicationDesktop"
        />
      </div>
    );
}

export default InstallApplication