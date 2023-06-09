import React from 'react'
import { HomeIcon, PlusIcon, TravelIcon, UserIcon } from '../icons/Icons'
import { Link } from 'react-router-dom'

const MobileFooter = ({id}) => {
    return (
        <div>
            <section className='footer-mobile'>
                <div>
                    <Link to={"/"}>
                        <input type="radio" id='homeradio' name='radio' />
                        <label htmlFor="homeradio">
                            <div style={id === 1 ? {color:'#0077DB'}:{color:'black'}}>
                                <HomeIcon />
                                <h5>خانه</h5>
                            </div>
                        </label>
                    </Link>
                </div>
                <div>
                    <input type="radio" id='plusradio' name='radio' />
                    <label htmlFor="plusradio">
                        <div>
                            <PlusIcon />
                            <h5>پلاس</h5>
                        </div>
                    </label>
                </div>

                <div>
                    <input type="radio" id='travelradio' name='radio' />
                    <label htmlFor="travelradio">
                        <div>
                            <TravelIcon />
                            <h5>سفر های من</h5>
                        </div>ّ
                    </label>
                </div>

                <div>
                    <input type="radio" id='userradio' name='radio' checked />
                    <label htmlFor="userradio">
                        <Link style={id === 4 ? {color:'#0077DB' ,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }:{color:'black' ,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} to={"/Account"}>
                            <UserIcon />
                            <h5>حساب کاربری</h5>
                        </Link>
                    </label>
                </div>
            </section>
        </div>
    )
}

export default MobileFooter