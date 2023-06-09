import React from 'react'
import { Link } from 'react-router-dom'
import { List, Logo, Money, Poshtibani1, TravelIcon, User } from '../icons/Icons'
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader'

const ItemsDashboardAccount = ({id}) => {


    const ItemAccount = [
        { id: 1, image: <User />, title: 'حساب کاربری', link: '/Account/Profile' },
        { id: 2, image: <TravelIcon />, title: 'سفرهای من', link: "/Account/MyTrip" },
        { id: 3, image: <List />, title: 'لیست مسافران', link: "/Account/Passengers" },
        { id: 4, image: <Poshtibani1 />, title: 'درخواست پشتیبانی', link: "/Account/DesktopTicketing" },
        { id: 5, image: <Money />, title: 'موجودی و تراکنش‌ها', link: "/Account/DesktopTransactions" },
        { id: 6, image: <Logo />, title: 'باشگاه همسفران', link: "/Account/Loyalty" },
    ]



    return (

            <div className='mainComponent'>
                <div className='itemsAccountComponent'>
                    {
                        ItemAccount.map(
                            item =>
                                <div key={item.id} className='itemAccountComponent' style={item.id === id ? {backgroundColor:'#F2F9FF' , color:'#0077db'}:{}}>
                                    <Link to={item.link} className='contentItemsAccountComponent'>
                                        {item.image}
                                        <h6>
                                            {item.title}
                                        </h6>
                                    </Link>
                                    <div className='borderAccountComponent'></div>
                                </div>
                        )
                    }
                </div>
            </div>
    )
}

export default ItemsDashboardAccount