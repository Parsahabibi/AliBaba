import React, { useEffect, useState, useSyncExternalStore } from "react";
import DesktopHeader from "../components/Header/DesktopHeader/DesktopHeader";
// import { useLocation, useParams } from 'react-router-dom'
import axios from "axios";
import Loading from "../components/Loading/Loading";
import CheckBox from "../components/CheckBox/CheckBox";

const FlightPage = () => {




    const [open, setOpen] = useState(false);
    const [openOne, setOpenOne] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);

    const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));


    function persianToCalendars(year, month, day, op = {}) {
        const formatOut = (gD) =>
            "toCal" in op
                ? ((op.calendar = op.toCal),
                    new Intl.DateTimeFormat(op.locale ?? "en", op).format(gD))
                : gD,
            dFormat = new Intl.DateTimeFormat("en-u-ca-persian", {
                dateStyle: "short",
                timeZone: "UTC",
            });
        let gD = new Date(Date.UTC(2000, month, day));
        gD = new Date(gD.setUTCDate(gD.getUTCDate() + 226867));
        const gY = gD.getUTCFullYear() - 2000 + year;
        gD = new Date(
            (gY < 0 ? "-" : "+") +
            ("00000" + Math.abs(gY)).slice(-6) +
            "-" +
            ("0" + (gD.getUTCMonth() + 1)).slice(-2) +
            "-" +
            ("0" + gD.getUTCDate()).slice(-2)
        );
        let [pM, pD, pY] = [...dFormat.format(gD).split("/")],
            i = 0;
        gD = new Date(
            gD.setUTCDate(
                gD.getUTCDate() +
                ~~(
                    year * 365.25 +
                    month * 30.44 +
                    day -
                    (pY.split(" ")[0] * 365.25 + pM * 30.44 + pD * 1)
                ) -
                2
            )
        );
        while (i < 4) {
            [pM, pD, pY] = [...dFormat.format(gD).split("/")];
            if (pD == day && pM == month && pY.split(" ")[0] == year)
                return formatOut(gD);
            gD = new Date(gD.setUTCDate(gD.getUTCDate() + 1));
            i++;
        }
        throw new Error("Invalid Persian Date!");
    }

    const inner = [
        "تهران",
        "شیراز",
        "اهواز",
        "مشهد",
        "بندر عباس",
        "اصفهان",
        "تبریز",
        "کیش",
    ];
    const foreing = [
        "Iran",
        "Usa",
        "Canada",
        "Germany",
        "France",
        "Spain",
        "Japan",
        "Italy",
    ];

    // const data = [
    //     {id:1 , title:'' , },
    //     {id:1 , title:'' , },
    //     {id:1 , title:'' , },
    //     {id:1 , title:'' , },
    // ]

    const searchQuery = new URLSearchParams(window.location.search);

    const count = Math.floor(Math.random() * 10);

    const city = searchQuery.get("trip1");

    const citySeconde = searchQuery.get("trip2");

    const passengers = searchQuery.get("pasenger");

    const [loading, setLoading] = useState(true);
    // console.log(city, 'saman')

    const [country, setCountry] = useState([]);

    const [countrySecond, setCountrySecond] = useState([]);

    const index = inner.indexOf(city);

    const indexSecond = inner.indexOf(citySeconde);

    const go = searchQuery.get("goDate");

    const dateMonth = go.split("/");

    const GoDay = dateMonth[2];
    const GoEnDay = Number(p2e(GoDay));

    const GoMonth = dateMonth[1];

    const GoEnMonth = Number(p2e(GoMonth));

    const orgDateGo = persianToCalendars(1400, GoEnMonth, GoEnDay, {
        toCal: "persian",
        dateStyle: "full",
        locale: "fa",
    });

    const arrayGo = orgDateGo.split(",");

    const arrayGoSecond = arrayGo?.[0].split(" ");

    const back = searchQuery.get("backDate");

    const data = back.split("/");

    const day = data[2];
    const enDay = Number(p2e(day));

    const month = data[1];

    const enMonth = Number(p2e(month));

    const orgDate = persianToCalendars(1400, enMonth, enDay, {
        toCal: "persian",
        dateStyle: "full",
        locale: "fa",
    });

    const array = orgDate.split(",");

    const arraySecond = array?.[0].split(" ");

    const handleGetData = async () => {
        setLoading(true);
        try {
            const data = await axios.get(
                `https://restcountries.com/v3.1/name/${foreing[index]}`
            );
            const dataSecond = await axios(
                `https://restcountries.com/v3.1/name/${foreing[indexSecond]}`
            );
            setCountry(data.data[0].name.common);
            setCountrySecond(dataSecond.data[0].name.common);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        handleGetData();
    }, []);

    useEffect(() => {
        //loader
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        <div className="FlightPages">
            <div
                className="headerFlightPage"
                style={
                    loading === true
                        ? { position: "fixed", zIndex: "10", width: "100%" }
                        : {}
                }
            >
                <DesktopHeader />
            </div>
            {loading ? (
                <Loading
                    type={"spinningBubbles"}
                    color={"#000"}
                    first={city}
                    second={citySeconde}
                />
            ) : (
                <div className="FlightPage">
                    <div className="ButtonHeader">
                        <div className="TripInformation">
                            <svg
                                viewBox="0 0 24 24"
                                width="1.5rem"
                                height="1.5rem"
                                fill="currentColor"
                                class="shrink-0 text-grays-500 ml-2 -rotate-90"
                                data-v-3191057b=""
                            >
                                <path d="M14.444 22.125H9.556c-.56 0-1.092-.26-1.421-.695a1.622 1.622 0 0 1-.277-1.429 1.731 1.731 0 0 1 1.074-1.148l1.218-.451-.166-3.722-6.046 2.233a.662.662 0 0 1-.076.022c-.551.143-1.06.06-1.433-.23-.357-.278-.554-.72-.554-1.243 0-.983.523-1.851 1.365-2.32l2-1.114v-.668c0-.93.788-1.687 1.757-1.687.666-.024 1.16.04 1.434.187.097.051.194.127.29.228l1.03-.575-.207-4.505c-.031-.842.024-1.788.674-2.462.429-.445 1.028-.671 1.782-.671.778 0 1.39.225 1.817.67.704.73.663 1.811.64 2.457l-.209 4.511 1.031.574c.096-.1.191-.175.287-.227.277-.148.771-.213 1.463-.186.944 0 1.732.756 1.732 1.686v.668l2 1.115c.841.469 1.364 1.336 1.364 2.263 0 .58-.197 1.021-.553 1.299-.372.29-.882.373-1.434.23a.67.67 0 0 1-.076-.022l-6.045-2.232-.167 3.721 1.218.451c.527.194.928.624 1.075 1.148a1.625 1.625 0 0 1-.277 1.43 1.79 1.79 0 0 1-1.422.694Z"></path>
                            </svg>
                            <p>
                                بلیط هواپیما از {country} به {countrySecond}
                            </p>
                        </div>
                        <div className="Calendar">
                            <svg
                                viewBox="0 0 24 24"
                                width="1.5rem"
                                height="1.5rem"
                                fill="currentColor"
                                class="text-grays-500 mx-2"
                                data-v-3191057b=""
                            >
                                <path d="M15.75 3a.75.75 0 0 1 .75.75v.75h2.25c1.196 0 2.178.939 2.246 2.118L21 6.75v12a2.253 2.253 0 0 1-2.118 2.246L18.75 21H5.25a2.253 2.253 0 0 1-2.246-2.118L3 18.75v-12c0-1.196.939-2.178 2.118-2.246L5.25 4.5H7.5v-.75a.75.75 0 1 1 1.5 0v.75h6v-.75a.75.75 0 0 1 .75-.75Zm-3 12a.75.75 0 0 0-.745.662L12 15.75v.75a.75.75 0 0 0 1.495.088l.005-.088v-.75a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L9 15.75v.75a.75.75 0 0 0 1.495.088l.005-.088v-.75a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L6 15.75v.75a.75.75 0 0 0 1.495.088L7.5 16.5v-.75a.75.75 0 0 0-.75-.75Zm9-3.75a.75.75 0 0 0-.745.662L15 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L12 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L9 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm-3 0a.75.75 0 0 0-.745.662L6 12v.75a.75.75 0 0 0 1.495.088l.005-.088V12a.75.75 0 0 0-.75-.75Zm12-5.25H16.5v.75a.75.75 0 1 1-1.5 0V6H9v.75a.75.75 0 1 1-1.5 0V6H5.25a.75.75 0 0 0-.745.663L4.5 6.75v1.5h15v-1.5a.75.75 0 0 0-.75-.75Z"></path>
                            </svg>
                            <p>
                                رفت: {arrayGoSecond[2]} {arrayGoSecond[1]}
                            </p>
                            <div className="divider"></div>
                            <p>
                                برگشت: {arraySecond[2]} {arraySecond[1]}
                            </p>
                        </div>
                        <div className="passengers">
                            <p style={{ color: "#959EA6" }}>{passengers}</p>
                        </div>
                        <div className="manufacturing">
                            <svg
                                viewBox="0 0 24 24"
                                width="1.25rem"
                                height="1.25rem"
                                fill="currentColor"
                                data-v-3191057b=""
                            >
                                <path
                                    d="M14.25 3A6.758 6.758 0 0 1 21 9.75a6.758 6.758 0 0 1-6.75 6.75 6.713 6.713 0 0 1-3.933-1.267l-5.445 5.445a1.095 1.095 0 0 1-1.55 0 1.098 1.098 0 0 1 0-1.551l5.444-5.445A6.713 6.713 0 0 1 7.5 9.75 6.758 6.758 0 0 1 14.25 3Zm-.005 2.259A4.5 4.5 0 0 0 9.75 9.754a4.5 4.5 0 0 0 4.495 4.496 4.5 4.5 0 0 0 4.496-4.495 4.5 4.5 0 0 0-4.496-4.496Z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="bodyFlightPage">
                        <div className="itemsFlightPage">
                            <div className="ResultFlightPage">
                                <h5>نتایچ: {count}</h5>
                            </div>
                            <div className="divider"></div>
                            <div className="Drop">
                                <div onClick={() => { setOpenTwo(!openTwo) }} className="itemFlightPage">
                                    <h6>ساعت حرکت</h6>
                                    <div className="arrow">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            class="block"
                                        >
                                            <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                {
                                    openTwo === true ?
                                        <div className="item">
                                            <div style={{ paddingBottom: "10px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }} className="clock">
                                                <h6 style={{ color: "#6C7680" }}>20:30</h6>
                                                <h6 style={{ color: "#6C7680" }}>7:30</h6>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }} className="progress">
                                                <div style={{ width: '15px', height: '15px', backgroundColor: '#F8FAFB', border: '1px solid #E2E6E9', borderRadius: '50%' }} className="leftCircle"></div>
                                                <div style={{ width: '100%', height: '8px', backgroundColor: '#0077DB' }} className="bar"></div>
                                                <div style={{ width: '15px', height: '15px', backgroundColor: '#F8FAFB', border: '1px solid #E2E6E9', borderRadius: '50%' }} className="rightCircle"></div>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                            <div className="divider"></div>
                            <div className="Drop">
                                <div onClick={() => { setOpenOne(!openOne) }} className="itemFlightPage">
                                    <h6>نوع بلیط</h6>
                                    <div className="arrow">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            class="block"
                                        >
                                            <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                {
                                    openOne === true ?
                                        <div className="item">
                                            <CheckBox label={'سیستمی'} />
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                            <div className="divider"></div>
                            <div className="Drop">
                                <div
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                    className="itemFlightPage">
                                    <h6>شرکت های هواپیمایی</h6>
                                    <div className="arrow">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            class="block"
                                        >
                                            <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                {open === true ?
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: "10px" }} className="item">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                                            <CheckBox label={'قشم ایر'} />
                                            <span>از 11,360,000</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                                            <CheckBox label={'ماهان'} />
                                            <span> از 11,300,000</span>
                                        </div>


                                    </div>
                                    :
                                    <></>}
                            </div>
                            <div className="divider"></div>
                            <div className="Drop">
                                <div onClick={() => { setOpenThree(!openThree) }} className="itemFlightPage">
                                    <h6>موارد دیگر</h6>
                                    <div className="arrow">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            class="block"
                                        >
                                            <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                {
                                    openThree === true ?
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="item">
                                            <CheckBox label={'نمایش بلیط های تکراری'} />
                                            <CheckBox label={'نمایش بلیط های موجود'} />
                                        </div>
                                        : <></>
                                }
                            </div>
                        </div>
                        <div className="ListTicket">
                            <div className="Swiper"></div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingBottom: '16px' }} className="des">
                                <p style={{ fontWeight: 700, color: '#4B5259' }}>بلیط رفت:</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="top">
                                    <svg viewBox="0 0 24 24" width="16px" height="16px" fill="currentColor" class="ml-2 mt-1 md:mt-0 align-middle"><path d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5ZM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 6a.75.75 0 0 1 .745.663l.005.087v7.5a.75.75 0 0 1-1.495.087l-.005-.087v-7.5A.75.75 0 0 1 12 9Zm0-3a.75.75 0 0 1 .745.663l.005.087v.75a.75.75 0 0 1-1.495.087L11.25 7.5v-.75A.75.75 0 0 1 12 6Z"></path></svg>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <h5> بلیط رفت خود را برای </h5>
                                        <h5 style={{ fontWeight: 700 }}>{arrayGoSecond[2]} {arrayGoSecond[1]}</h5>
                                        <h5> انتخاب نمایید، در مرحله بعدی می‌توانید بلیط برگشت خود را انتخاب کنید.</h5>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="button">
                                    <svg viewBox="0 0 24 24" width="16px" height="16px" fill="currentColor" class="ml-2 mt-1 md:mt-0 align-middle" ><path d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5ZM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 6a.75.75 0 0 1 .745.663l.005.087v7.5a.75.75 0 0 1-1.495.087l-.005-.087v-7.5A.75.75 0 0 1 12 9Zm0-3a.75.75 0 0 1 .745.663l.005.087v.75a.75.75 0 0 1-1.495.087L11.25 7.5v-.75A.75.75 0 0 1 12 6Z"></path></svg>
                                    <h5> قیمت ها برای یک بزرگسال محاسبه شده است. </h5>
                                </div>
                            </div>
                            <div className='CardsFlightPageInside'>
                                <div className='cardFlightPage'>
                                    <div className='logoFlightPageInside'>
                                        <img src={require('../assets/image/HomeImage/logo.png')} alt="" />
                                        <span>سپهران</span>
                                    </div>
                                    <div className='informationFlightPage'>
                                        <div className="info">
                                            <div className='des'>
                                                <h5>سیستمی</h5>
                                                <h5>اکونومی</h5>
                                                <h5>Boeing</h5>
                                            </div>
                                            <div className='trip'>
                                                <div className='right'>
                                                    <h4>{country}</h4>
                                                    <h3>11:55</h3>
                                                </div>
                                                <div className='icon'>
                                                    <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor" data-v-3edce143=""><path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z" fill-rule="evenodd"></path></svg>
                                                    <div className='border'></div>
                                                    <div className='circle'></div>
                                                </div>
                                                <div className='left'>
                                                    <h4>{countrySecond}</h4>
                                                    <h3>13:55</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <h5> اطلاعات پرواز</h5>
                                            <h5> قوانین استرداد</h5>
                                        </div>
                                    </div>
                                    <div style={{ width: '1px', height: '135px', backgroundColor: '#E2E6E9', padding: '0px' }} className='divider'></div>
                                    <div className='buttonFlightPage'>
                                        <div className="price">
                                            <h3>11,360,000</h3>
                                            <span>ریال</span>
                                        </div>
                                        <button>انتخاب پرواز</button>
                                    </div>
                                </div>

                                <div className='cardFlightPage'>
                                    <div className='logoFlightPageInside'>
                                        <img src={require('../assets/image/HomeImage/logo.png')} alt="" />
                                        <span>سپهران</span>
                                    </div>
                                    <div className='informationFlightPage'>
                                        <div className="info">
                                            <div className='des'>
                                                <h5>سیستمی</h5>
                                                <h5>اکونومی</h5>
                                                <h5>Boeing</h5>
                                            </div>
                                            <div className='trip'>
                                                <div className='right'>
                                                    <h4>{country}</h4>
                                                    <h3>11:55</h3>
                                                </div>
                                                <div className='icon'>
                                                    <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor" data-v-3edce143=""><path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z" fill-rule="evenodd"></path></svg>
                                                    <div className='border'></div>
                                                    <div className='circle'></div>
                                                </div>
                                                <div className='left'>
                                                    <h4>{countrySecond}</h4>
                                                    <h3>13:55</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <h5> اطلاعات پرواز</h5>
                                            <h5> قوانین استرداد</h5>
                                        </div>
                                    </div>
                                    <div style={{ width: '1px', height: '135px', backgroundColor: '#E2E6E9', padding: '0px' }} className='divider'></div>
                                    <div className='buttonFlightPage'>
                                        <div className="price">
                                            <h3>11,360,000</h3>
                                            <span>ریال</span>
                                        </div>
                                        <button>انتخاب پرواز</button>
                                    </div>
                                </div>

                                <div className='cardFlightPage'>
                                    <div className='logoFlightPageInside'>
                                        <img src={require('../assets/image/HomeImage/gheshm.png')} alt="" />
                                        <span>قشم ایر</span>
                                    </div>
                                    <div className='informationFlightPage'>
                                        <div className="info">
                                            <div className='des'>
                                                <h5>سیستمی</h5>
                                                <h5>اکونومی</h5>
                                                <h5> Fokker 100</h5>
                                            </div>
                                            <div className='trip'>
                                                <div className='right'>
                                                    <h4>{country}</h4>
                                                    <h3>10:20</h3>
                                                </div>
                                                <div className='icon'>
                                                    <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor" data-v-3edce143=""><path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z" fill-rule="evenodd"></path></svg>
                                                    <div className='border'></div>
                                                    <div className='circle'></div>
                                                </div>
                                                <div className='left'>
                                                    <h4>{countrySecond}</h4>
                                                    <h3>22:30</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <h5> اطلاعات پرواز</h5>
                                            <h5> قوانین استرداد</h5>
                                        </div>
                                    </div>
                                    <div style={{ width: '1px', height: '135px', backgroundColor: '#E2E6E9', padding: '0px' }} className='divider'></div>
                                    <div className='buttonFlightPage'>
                                        <div className="price">
                                            <h3>15,360,000</h3>
                                            <span>ریال</span>
                                        </div>
                                        <button>انتخاب پرواز</button>
                                        <h5>9صندلی باقی مانده</h5>
                                    </div>
                                </div>

                                <div className='cardFlightPage'>
                                    <div className='logoFlightPageInside'>
                                        <img src={require('../assets/image/HomeImage/mahan.png')} alt="" />
                                        <span>سپهران</span>
                                    </div>
                                    <div className='informationFlightPage'>
                                        <div className="info">
                                            <div className='des'>
                                                <h5>سیستمی</h5>
                                                <h5>اکونومی</h5>
                                                <h5>Boeing</h5>
                                            </div>
                                            <div className='trip'>
                                                <div className='right'>
                                                    <h4>{country}</h4>
                                                    <h3>17:30</h3>
                                                </div>
                                                <div className='icon'>
                                                    <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor" data-v-3edce143=""><path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z" fill-rule="evenodd"></path></svg>
                                                    <div className='border'></div>
                                                    <div className='circle'></div>
                                                </div>
                                                <div className='left'>
                                                    <h4>{countrySecond}</h4>
                                                    <h3>21:05</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="more">
                                            <h5> اطلاعات پرواز</h5>
                                            <h5> قوانین استرداد</h5>
                                        </div>
                                    </div>
                                    <div style={{ width: '1px', height: '135px', backgroundColor: '#E2E6E9', padding: '0px' }} className='divider'></div>
                                    <div className='buttonFlightPage'>
                                        <div className="price">
                                            <h3>27,360,000</h3>
                                            <span>ریال</span>
                                        </div>
                                        <button>انتخاب پرواز</button>
                                        <h5>4صندلی باقی مانده</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default FlightPage;
