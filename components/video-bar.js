import React, {Fragment} from "react";
import LinkButton from "./tools/LinkButton";
import Card from "./tools/Card";


export default function VideoBar() {
    return (
        <Fragment>
            <div className="video-bar__outer">
                <div className="content">
                    <div className='video-bar'>

                        <div className='video-bar__title'>Более 20 направлений - смотрите из дома</div>

                        <div className='video-bar__menu'>
                            <div className='video-bar__navigation'>
                                <div className='video-bar__item video-bar__item_active'>Все направления</div>
                                <div className='video-bar__item'>Имплантация</div>
                                <div className='video-bar__item'>Ортопедия</div>
                                <div className='video-bar__item'>Протезирование</div>
                                <div className='video-bar__item'>Хирургия</div>
                                <div className='video-bar__item'>Лечение зубов</div>
                            </div>
                            <div className='video-bar__navigation'>
                                <LinkButton class="video-bar__link" label="Все видео"/>
                            </div>
                        </div>

                        <div className='video-bar__cards'>
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
                                date="16 марта ’20"
                                time="01:30:25"
                                title='Удаление ретинированного зуба'
                                src='/images/card/1.png'
                                button={false}
                                color='#039be5'
                            />

                            <Card
                                name="Протезирование"
                                date="16 марта ’20"
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
                            <div className='video-bar__button video-bar__button-all'>Все видео</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
