import React, {Fragment} from "react";
import LinkButton from "./tools/LinkButton";


export default function VideoFirst() {
    return (
        <Fragment>
            <div className="video-first">
                <div className="video-first__info-block">
                    <div className="video-first__text-container">
                        <div className="video-first__title">
                            Записи операций и вебинаров<br/> от доктора медицинских<br/>наук Едранова С.С.
                        </div>
                        <div className="video-first__description">
                            Мы собрали сотни видео о стоматологии за все годы нашей работы, и хотим поделиться с вами опытом и знаниями.
                        </div>
                    </div>

                    <div className="video-first__buttons-container">
                        <div className="video-first__button-fill">Бесплатная подписка на 7 дней!</div>
                        <LinkButton class="video-first__button-info"  label="Подробнее"/>
                    </div>

                </div>

                <div className="video-first__video-block player">
                    <img src='/images/video-first/video1.png'/>

                    <div  className="player__overlay">
                        <div className="player__play-button"><img width="14px" height='15px' src="/images/video-first/play.svg"/></div>
                    </div>

                </div>


            </div>
        </Fragment>
    )
}
