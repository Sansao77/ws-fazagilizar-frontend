import { IonCard, IonCardTitle, IonImg } from "@ionic/react";
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import './bundle.scss'
import { bundleData } from "../../../../../shared/mock/bundle";

SwiperCore.use([Pagination, Autoplay])

const Bundle: React.FC = () =>{
    return (
        <div className="container">
            <Swiper
            breakpoints={{
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3,
                },
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            autoplay={true}
            pagination={{ 
                clickable: true,
                el: '.swiper-custom-pagination'
            }}
            >
                {bundleData.map(x => (
                    <SwiperSlide key={x.title}>
                        <IonCard>
                            <IonImg src={x.img} alt={x.title}></IonImg>
                        </IonCard>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-custom-pagination"></div>
        </div>
    )
}

export default Bundle;