import React, {Fragment, useState} from "react";


export default function Menu(params) {
    const [list, setList] = useState(true)

    return (
        <Fragment>
            <div className="menu">

                <div className="menu__top">
                    <div className="menu__search"><span>Поиск</span><img className='menu__search_icon' src="/images/header/search.svg"/></div>
                    <div className="menu__exit" onClick={()=>params.close() }><img src='\images\xred.svg'/></div>
                </div>

                <div onClick={()=>setList(!list)} className={"menu__item menu__bold "+(list ? 'menu__bold_active' : '')}><span>Все видео</span><img src='\images\arrow-down.svg'/></div>
                <div className={"menu__list " + (list ? 'menu__list_hidden' : '')}>
                    <div>Ортопедия</div>
                    <div>Протезирование</div>
                    <div>Имплантация</div>
                    <div>Лечение зубов</div>
                    <div>Лечение десен</div>
                    <div className="menu__link"><span>Посмотреть весь каталог</span><img src='\images\arrow-right-black.svg'/></div>

                </div>

                <div className="menu__item menu__bold"><span>Вебинары</span></div>
                <div className="menu__item">Информация о подписке</div>
                <div className="menu__item">Отзывы</div>
                <div className="menu__item">О центре</div>
                <div className="menu__item">Вопросы и ответы</div>
                <div className="menu__item">Контакты</div>


                <div className="menu__buttons-container">
                    <div className="menu__fill">Оформить подписку</div>
                    <div className="menu__outline">Личный кабинет</div>
                </div>

                <div className="menu__contacts-container">
                    <div className="menu__phone">+7 (908) 982-54-52</div>
                    <div className="menu__media">
                        <img className='menu__media-instagram' src="/images/header/instagram.svg"/>
                        <img className='menu__media-youtube' src="/images/header/youtube.svg"/>
                        <img className='menu__media-facebook' src="/images/header/facebook.svg"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
