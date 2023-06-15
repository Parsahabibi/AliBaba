import React from 'react'
import ReactLoading from 'react-loading';
import DesktopHeader from '../Header/DesktopHeader/DesktopHeader';
const Loading = ({ type, color , first , second }) => {
    return (
        <div className='Loading'>
            <div className='baler'></div>
            <div className='image'>
                <img src={require('../../assets/image/HomeImage/loader.png')} />
            </div>
            <div className='des'>
                <ReactLoading type={type} color={color} height={'20px'} width={'20px'} />
                <h5 style={{display:'flex' , alignItems:'center'}}>علی بابا در حال جستجوی بهترین پروازها از <h6>{first}</h6> به <h6> {second}</h6> برای شماست</h5>
            </div>
        </div>
    )
}

export default Loading