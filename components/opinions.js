import React, {Fragment, useRef, useState} from "react";
import LinkButton from "./tools/LinkButton";
import Swiper from 'react-id-swiper';


export default function Opinions() {

    const [swiper, setSwiper] = useState(null);

    const ref = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            swiper.slidePrev();
        }
    };

    return (
        <Fragment>

            <div className="opinions__outer">

                <div className="content">


                    <div className="opinions__title">
                        <span className="roboto-title ">Отзывы</span>
                        <LinkButton label="Все отзывы" class="button-link__offset xs-hide"/>
                    </div>


                    <div className="opinions__container">
                        <Swiper
                            ref={ref}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                                dynamicBullets: true
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            spaceBetween={6}
                            renderPrevButton={() => <div className="swiper-button-prev opinions__nav-button opinions__nav-left xs-hide"><img width="6px" height="9px" src="\images\opinions\left.svg"/></div>}
                            renderNextButton={() => <div className="swiper-button-next opinions__nav-button opinions__nav-right xs-hide"><img width="6px" height="9px" src="\images\opinions\left.svg"/></div>}

                        >
                            <div className="opinions__item">
                                <div className="opinions__content">
                                    <div className="opinions__text">
                                        Спасибо Доктору Едранову за прекрасную возможность пообщаться в неформальной обстановке, что бывает,<br/>
                                        к сожалению, крайне редко... Спасибо всем дорогим коллегам за приятный вечер! С профессиональным праздником,<br/>
                                        с Днём стоматолога!<span className="opinions__quote">“</span>
                                    </div>

                                    <div className="opinions__author-block">
                                        <div className="opinions__author-container">
                                            <img className="opinions__author-avatar" src="\images\opinions\author.png"/>
                                            <div className="opinions__author-description">
                                                <div className="opinions__author-name">Владимир Рыбалко</div>
                                                <div className="opinions__author-role">Врач стоматолог общей практики</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opinions__from opinions__overlay">
                                    <div>Отзыв на <a>vl.ru</a></div>
                                </div>
                            </div>

                            <div>
                                <div className="opinions__content">
                                    <div className="opinions__text">
                                        Спасибо Доктору Едранову за прекрасную возможность пообщаться в неформальной обстановке, что бывает,<br/>
                                        к сожалению, крайне редко... Спасибо всем дорогим коллегам за приятный вечер! С профессиональным праздником,<br/>
                                        с Днём стоматолога!<span className="opinions__quote">“</span>
                                    </div>

                                    <div className="opinions__author-block">
                                        <div className="opinions__author-container">
                                            <img className="opinions__author-avatar" src="\images\opinions\author.png"/>
                                            <div className="opinions__author-description">
                                                <div className="opinions__author-name">Владимир Рыбалко</div>
                                                <div className="opinions__author-role">Врач стоматолог общей практики</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opinions__from opinions__overlay">
                                    <div>Отзыв на <a>vl.ru</a></div>
                                </div>
                            </div>
                        </Swiper>
                    </div>

                    <div className='opinions__button-container'>
                        <div className='video-bar__button video-bar__button-all'>Все отзывы</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
