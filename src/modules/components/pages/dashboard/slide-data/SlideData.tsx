import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from 'swiper';
import { Navigation } from "swiper/modules"
import './slide-data.scss'

SwiperCore.use([Navigation]);

interface Props{
    data: ISlides[],
}

const SlideData: React.FC<Props> = ({data}) =>{
    return (
        <div className="default-container">
            <Swiper
            breakpoints={{
                // when window width is >= 640px
                320: {
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                }
            }}
            modules={[Navigation]}
            spaceBetween={60}
            navigation
            preventInteractionOnTransition
            className="custom-swiper"
            >
                {data.map((slide, index) =>(
                    <SwiperSlide key={slide.title}>
                        <div className="container-contant">
                            <h1 className="index">{index + 1}</h1>

                            <img src='/favicon.png' alt="ionic" />

                            <div className="text-contant">
                                <span className="title">{slide.title}</span>

                                {slide.loja? (
                                    <span>Cliente {slide.loja}</span>
                                ):(
                                    <span>Cód. {slide.codigo}</span>
                                )}

                                {slide.pedidos && <span>Pedidos: {slide.pedidos}</span>}

                                <a>Ver Produto</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideData