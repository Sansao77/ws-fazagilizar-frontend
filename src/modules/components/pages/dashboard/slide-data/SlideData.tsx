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
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            autoplay={true}
            pagination={{ 
                clickable: true,
                el: '.swiper-custom-pagination'
            }}
            >
                {data.map((slide, index) =>(
                    <SwiperSlide>
                        <div className="container-contant">
                            <h1 className="index">{index}</h1>

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