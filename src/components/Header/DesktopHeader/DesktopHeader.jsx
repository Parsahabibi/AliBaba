import React, { useState, useEffect, useRef } from 'react'
import { AlibabaIR, LogoOfAlibaba, Arrow, QuestionSign, BuyIcon, Enter, Tick, Point, Money, RightArrow, Poshtibani, LogOut } from '../../icons/Icons'
import { Link } from "react-router-dom"
import Dropdown from '../../DropDown/DropDown'
const DesktopHeader = () => {

    const [login, setLogin] = useState(true)


    const [open, setOpen] = useState(false)

    const [opens, setOpens] = useState(false)

    const [more, setMore] = useState(false)


    const [openLogin, setOpenLogin] = useState(false)

    // const handleOpen = () => {
    //     setOpen(!open)
    // }


    const Ticket = [
        { id: 1, title: 'پرواز داخلی', link: "" },
        { id: 1, title: 'پرواز خارجی', link: "" },
        { id: 1, title: 'قطار', link: "" },
        { id: 1, title: 'اتوبوس', link: "" },
    ]

    const rest = [
        { id: 1, title: "هتل", link: "" },
        { id: 2, title: "ویلا و اقامتگاه", link: "" },
    ]


    const More = [
        { id: 1, title: "علی بابا پلاس", link: "" },
        { id: 1, title: "مجله علی بابا", link: "" },
        { id: 1, title: "بیمه مسافرتی", link: "" }
    ]

    const LoginItems = [
        { id: 1, image: <Enter />, title: " اطلاعات حساب کاربری" , link:"" },
        { id: 2, image: <Poshtibani />, title: " درخواست پشتیبانی" , link:"" },
        { id: 3, image: <LogOut />, title: " خروج از حساب کاربری" , link:"" },
    ]



    const dropdownRef = useRef();
    const dropdownRef1 = useRef();
    const dropdownRef2 = useRef();
    const dropdownRefLogin = useRef();


    const handleToggle = () => {
        setOpen(!open);
    };

    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
                setOpens(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef1]);







    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
                setMore(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef2]);




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
        <div className='DesktopHeader'>
            <div className='right'>
                {/* right */}
                <Link to={"/"}>
                    <div className='logo'>

                        <div className='logoOfAlibaba'>
                            <LogoOfAlibaba />
                        </div>
                        <div className='AlibabaIr'>
                            <AlibabaIR />
                            <span> خرید بلیط، هتل، تور </span>
                        </div>

                    </div>
                </Link>
                <div className='items '>
                    <div className='item' ref={dropdownRef}>
                        <button onClick={handleToggle} >
                            <p>بلیط</p>
                            <Arrow className="Arrow" />
                            {
                                open === true ?
                                    <div className='dropDowns'>
                                        {
                                            Ticket.map(
                                                item =>
                                                    <div className='dropDown' key={item.id}>
                                                        <Link className='link' to={item.link}>
                                                            <h6>
                                                                {item.title}
                                                            </h6>
                                                        </Link>
                                                        <div className='borderBottom'></div>
                                                    </div>
                                            )
                                        }
                                    </div>
                                    :
                                    <></>
                            }
                        </button>
                        {/* <Dropdown options={Ticket} label={'parsa'} onSelect={(option) => setSelectedOption(option)} /> */}
                        <div className='line'></div>
                    </div>
                    <div className='item' ref={dropdownRef1}>
                        <button onClick={() => { setOpens(!opens) }}>
                            <p>اقامت</p>
                            <Arrow className="Arrow" />
                            {
                                opens === true ?
                                    <div className='dropDowns'>
                                        {
                                            rest.map(
                                                item =>
                                                    <div className='dropDown' key={item.id}>
                                                        <Link className='link' to={item.link}>
                                                            <h6>
                                                                {item.title}
                                                            </h6>
                                                        </Link>
                                                        <div className='borderBottom'></div>
                                                    </div>
                                            )
                                        }
                                    </div>
                                    :
                                    <></>
                            }
                        </button>
                        <div className='line'></div>
                    </div>
                    <div className='item'>
                        <Link to={""}>
                            <button>
                                <p>تور</p>
                            </button></Link>
                        <div className='line'></div>
                    </div>
                    <div className='item' ref={dropdownRef2}>
                        <button onClick={() => { setMore(!more) }}>
                            <p>بیشتر</p>
                            <Arrow className="Arrow" />
                            {
                                more === true ?
                                    <div className='dropDowns'>
                                        {
                                            More.map(
                                                item =>
                                                    <div className='dropDown' key={item.id}>
                                                        <Link className='link' to={item.link}>
                                                            <h6>
                                                                {item.title}
                                                            </h6>
                                                        </Link>
                                                        <div className='borderBottom'></div>
                                                    </div>
                                            )
                                        }
                                    </div>
                                    :
                                    <></>
                            }
                        </button>
                        <div className='line'></div>
                    </div>
                </div>
            </div>
            <div className='left'>
                {/* left */}
                <div className='items'>
                    <div className='item'>
                        <Link to={""}>
                            <button>
                                <QuestionSign />
                                <p> مرکز پشتیبانی آنلاین </p>
                            </button>
                        </Link>
                    </div>
                    <div className='item'>
                        <Link to={""}>
                            <button>
                                <BuyIcon />
                                <p>سفرهای من</p>
                            </button>
                        </Link>
                    </div>
                    {
                        login === false ?
                            <div className='item'>
                                <button>
                                    <Enter />
                                    <p> ورود یا ثبت‌نام </p>
                                </button>
                            </div>
                            :
                            <div className='login' ref={dropdownRefLogin}>
                                <button onClick={() => { setOpenLogin(!openLogin) }}>
                                    <div className='user'>
                                        <Tick className='tick' />
                                        <Enter />
                                    </div>
                                    <p>09197401839</p>
                                    <Arrow />
                                    <div className='subMenuLogin'>
                                        {
                                            openLogin === true ?
                                                <div className='subMenu'>
                                                    <div className='information'>
                                                        <div className='number'>
                                                            <p>09197401839</p>
                                                        </div>
                                                        <div className='point'>
                                                            <Point />
                                                            <h5>0 امتیاز</h5>
                                                        </div>
                                                        <div className='money'>
                                                            <div className='rightMoney'>
                                                                <Money />
                                                                <h5>0 ریال</h5>
                                                            </div>
                                                            <div className='buttonOfMoney'>
                                                                <Link to={''}>
                                                                    <button>
                                                                        افزایش
                                                                        <RightArrow />
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='others'>
                                                        {
                                                            LoginItems.map(
                                                                item =>
                                                                    <div className='itemsOthers' key={item.id}>
                                                                        <Link to={item.link}>
                                                                            <div className='itemOthers'>
                                                                                {item.image}
                                                                                {item.title}
                                                                            </div>
                                                                        </Link>
                                                                        <div className='borderBottomItem'></div>
                                                                    </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader
















/////////////////////////////////////////




// import { useState, useEffect, useRef } from 'react';
// // import './Dropdown.scss';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener('click', handleClickOutside);

//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, [dropdownRef]);






//   return (
//     <div className="dropdown" ref={dropdownRef}>
//       <button className="dropdown__toggle" onClick={handleToggle}>
//         Select an option
//       </button>
//       {isOpen && (
//         <ul className="dropdown__menu">
//           <li className="dropdown__item">Option 1</li>
//           <li className="dropdown__item">Option 2</li>
//           <li className="dropdown__item">Option 3</li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;