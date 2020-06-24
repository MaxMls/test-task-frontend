import React, {Fragment} from "react";
import LinkButton from "./tools/LinkButton";


export default function VideoSecond() {
    return (
        <Fragment>

            <div className="video-second">
                <div className="video-second__title roboto-title">Ближайший вебинар</div>


                <div className="video-second__block">


                    <div className="video-second__video-block player">
                        <img src='/images/second-video/video2.png'/>

                        <diV className="player__overlay">
                            <div  className="video-second__name-container">
                                <div className="video-second__name">Едранов<br/>Сергей Сергеевич</div>
                                <div className="video-second__role">д.м.н., профессор</div>
                            </div>
                        </diV>
                        <div  className="player__overlay">
                            <div className="player__play-button"><img width="14px" height='15px' src="/images/video-first/play.svg"/></div>
                        </div>

                    </div>


                    <div className="video-second__info">
                        <div className="video-second__subtitle">Ближайший онлайн-вебинар</div>
                        <div className="video-second__h-title">Апикальная микрохирургия в области латерального резца</div>
                        <div className="video-second__date-container" >
                            <div ><span className="video-second__date">Дата:</span><span className="video-second__value">31 марта’20</span></div>
                            <div><span className="video-second__date">Время:</span><span className="video-second__value">17:00 (Владивосток)</span></div>

                        </div>

                        <div className="video-second__fill">Участвовать в вебинаре</div>
                        <div className="video-second__text">или получить <span className="video-second__link"> консультацию</span></div>


                    </div>
                    <div className="video-second__flag">
                        <img width="100px" height="119px" className="video-second__flag-image" src='/images/second-video/flag.svg'/>
                        <div className="video-second__flag-text">
                            <div className="video-second__flag-label">Бесплатно</div>
                            <div className="video-second__flag-number">7</div>
                            <div className="video-second__flag-label">дней</div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
