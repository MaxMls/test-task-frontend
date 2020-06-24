import React, {Fragment} from "react";


export default function Advantages() {
    return (
        <Fragment>
            <div className="advantages">

                <div className="advantages__block">
                    <div className="advantages__icon-container">
                        <div className="advantages__icon">
                            <img width="22px" height='20px' src="/images/advantages/diamond.svg"/>
                        </div>
                    </div>
                    <div>
                        <div className="advantages__title">Уникальные материалы</div>
                        <div className="advantages__description">Мы собрали сотни видео о стоматологии за все годы нашей работы.</div>
                    </div>
                </div>

                <div className="advantages__block">
                    <div className="advantages__icon-container">
                        <div className="advantages__icon">
                            <img width="18px" height='18px' src="/images/advantages/tooth.svg"/>
                        </div>
                    </div>
                    <div>
                        <div className="advantages__title">Всё о стоматологии</div>
                        <div className="advantages__description">Мы собрали сотни видео о стоматологии за все годы нашей работы.</div>
                    </div>
                </div>

                <div className="advantages__block">
                    <div className="advantages__icon-container">
                        <div className="advantages__icon">
                            <img width="24px" height='17px' src="/images/advantages/video.svg"/>
                        </div>
                    </div>
                    <div>
                        <div className="advantages__title">> 500 видеозаписей</div>
                        <div className="advantages__description">Мы собрали сотни видео о стоматологии за все годы нашей работы.</div>
                    </div>
                </div>

                <div className="advantages__block">
                    <div className="advantages__icon-container">
                        <div className="advantages__icon">
                            <img width="16px" height='24px' src="/images/advantages/medal.svg"/>
                        </div>
                    </div>
                    <div>
                        <div className="advantages__title">> 20 лет опыта</div>
                        <div className="advantages__description">Мы собрали сотни видео о стоматологии за все годы нашей работы.</div>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
