import { IonCard, IonCardTitle, IonImg } from "@ionic/react";
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import './bundle.scss'

SwiperCore.use([Pagination, Autoplay])

const Bundle: React.FC = () =>{
    return (
        <div className="container">
            <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay={true}
            pagination={{ 
                clickable: true,
                el: '.swiper-custom-pagination'
            }}
            >
                <SwiperSlide>
                    <IonCard color="primary">
                        <IonImg src="/img-teste.png" alt="teste" />
                        <IonCardTitle>Slide 1</IonCardTitle>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard color="medium">
                        <IonImg src="/img-teste.png" alt="teste" />
                        <IonCardTitle>Slide 2</IonCardTitle>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard color="secondary">
                        <IonImg src="/img-teste.png" alt="teste" />
                        <IonCardTitle>Slide 3</IonCardTitle>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard color="tertiary">
                        <IonImg src="/img-teste.png" alt="teste" />
                        <IonCardTitle>Slide 4</IonCardTitle>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard color="success">
                        <IonImg src="/img-teste.png" alt="teste" />
                        <IonCardTitle>Slide 5</IonCardTitle>
                    </IonCard>
                </SwiperSlide>

                <SwiperSlide>
                    <IonCard color="warning">
                        <IonImg src="/img-teste.png" alt="teste" />
                        <IonCardTitle>Slide 6</IonCardTitle>
                    </IonCard>
                </SwiperSlide>
            </Swiper>

            <div className="swiper-custom-pagination"></div>
        </div>
    )
}

export default Bundle;