import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles


const SwiperSlider = ({ cardsData }) => {




    return (
            <Swiper init="false" slidesPerView={1.5} spaceBetween={20} className="swiper" navigation={true} modules={[Navigation]} >
                {
                    cardsData.map(
                        item =>
                            <SwiperSlide className="swiper-slide">
                                <div className="image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="text">
                                    <p>{item.title}</p>
                                    <h5>{item.des}</h5>
                                </div>
                            </SwiperSlide>
                    )
                }
            </Swiper>
    );
};

export default SwiperSlider;





// import { useEffect, useRef } from "react";
// import { register } from "swiper/element/bundle";
// register();

// const MySwiper = ({ cardsData }) => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const swiperContainer = swiperRef.current;
//     const params = {
//       navigation: true,
//       pagination: true,
//       // These are new...
//       injectStyles: [
//         `
//           .swiper-button-next,
//           .swiper-button-prev {
//             background-color: white;
//             padding: 8px 16px;
//             border-radius: 100%;
//             border: 2px solid black;
//             color: red;
//           }
//           .swiper-pagination-bullet{
//             width: 40px;
//             height: 40px;
//             background-color: red;
//           }
//       `,
//       ],
//     };

//     Object.assign(swiperContainer, params);
//     swiperContainer.initialize();
//   }, []);

//   return (
//     <swiper-container ref={swiperRef} init="false"> 
//                 {
//                     cardsData.map(
//                         item =>
//                             <swiper-slide className="swiper-slide">
//                                 <div className="image">
//                                     <img src={item.image} alt="" />
//                                 </div>
//                                 <div className="text">
//                                     <p>{item.title}</p>
//                                     <h5>{item.des}</h5>
//                                 </div>
//                             </swiper-slide>
//                     )
//                 }
//     </swiper-container>
//   );
// };

// export default MySwiper;
