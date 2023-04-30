import React from 'react'

const OtherService = () => {


    const other = [
        { id: 1, image: <img src="https://cdn.alibaba.ir/h2/mobile/assets/images/insurance-icon-bb51c425.svg" alt="Alibaba https://cdn.alibaba.ir/h2/mobile/assets/images/insurance-icon-bb51c425.svg" class="is-responsive is-animated" width="40" height="40" data-v-6fa1507f=""></img>, title: "بیمه مسافرتی" },
        { id: 1, image: <img src="https://cdn.alibaba.ir/h2/mobile/assets/images/visa-icon-d8507c8e.svg" alt="Alibaba https://cdn.alibaba.ir/h2/mobile/assets/images/visa-icon-d8507c8e.svg" class="is-responsive is-animated" width="40" height="40" data-v-6fa1507f=""></img>, title: "ویزای سفر" },
        { id: 1, image: <img src="https://cdn.alibaba.ir/h2/mobile/assets/images/gtour-icon-5e641f1b.svg" alt="Alibaba https://cdn.alibaba.ir/h2/mobile/assets/images/gtour-icon-5e641f1b.svg" class="is-responsive is-animated" width="40" height="40" data-v-6fa1507f=""></img>, title: "تور گروهی" }
    ]


    return (
        <div className='OtherService'>
            <div className='title'>
                {/* title */}
                <h6>سایر خدمات علی بابا</h6>
            </div>
            <div className='items'>
                {/* item */}
                {
                    other.map(
                        item =>
                            <div className='item'>
                                <div className='bgColor'>
                                    <div className='itemImage'>
                                        {item.image}
                                    </div>
                                </div>
                                <div className='itemTitle'>
                                    <h5>
                                        {item.title}
                                    </h5>
                                </div>
                            </div>
                    )
                }
            </div>
        </div>
    )
}

export default OtherService