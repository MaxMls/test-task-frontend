import React, {Fragment} from "react";
import LinkButton from "./tools/LinkButton";
import Card from "./tools/Card";


export default function Records() {
    return (
        <Fragment>

            <div className="records">
                <div className="records__title">
                    <span className="roboto-title ">Записи вебинаров</span>
                    <LinkButton label="Все вебинары" class="button-link__offset records__link-btn" />
                </div>

                <div className="records__cards">

                    <Card
                        name="Ортопедия"
                        date="16 марта ’20"
                        time="01:30:25"
                        title='Удаление ретинированного зуба'
                        src='/images/card/1.png'
                        button={true}
                        color='#d10138'
                    />
                    <Card
                        name="имплантация"
                        date="29 февраля ’20"
                        time="00:45:01"
                        title='Удаление ретинированного зуба'
                        src='/images/card/1.png'
                        button={true}
                        color='#039be5'
                    />
                    <Card
                        name="Протезирование"
                        date="24 декабря ’19"
                        time="01:30:25"
                        title='Удаление ретинированного зуба'
                        src='/images/card/1.png'
                        button={true}
                        color='#9ca6c5'
                    />
                    <Card
                        name="Ортопедия"
                        date="16 марта ’20"
                        time="01:30:25"
                        title='Удаление ретинированного зуба'
                        src='/images/card/1.png'
                        button={true}
                        color='#d10138'
                    />

                </div>
                <div className='video-bar__button-container'>
                    <div className='video-bar__button video-bar__button-upload'>Загрузить еще</div>
                    <div className='video-bar__button video-bar__button-all records__button-all'>Все вебинары</div>
                </div>



            </div>
        </Fragment>
    )
}
