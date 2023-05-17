import React from 'react'
import { HomeIcon, PlusIcon, TravelIcon, UserIcon } from '../icons/Icons'

const MobileFooter = () => {
    return (
        <div>
            <section className='footer-mobile'>

                <div>
                    <input type="radio" id='homeradio' name='radio' />
                    <label htmlFor="homeradio">
                        <div>
                            <HomeIcon />
                            <h5>خانه</h5>
                        </div>
                    </label>
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
                    <input type="radio" id='userradio' name='radio' />
                    <label htmlFor="userradio">
                        <div>
                            <UserIcon />
                            <h5>حساب کاربری</h5>
                        </div>
                    </label>
                </div>

            </section>
        </div>
    )
}

export default MobileFooter