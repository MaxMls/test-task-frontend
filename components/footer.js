import React, {Fragment, useRef, useState} from "react";


export default function Footer() {

    return (
        <Fragment>
            <div className="footer__outer">
                <div className="footer__container">
                    <div className="footer__content">


                        <div className="footer__logo">
                            <img src='\images\footer\logo.svg' alt=''/>
                        </div>

                        <div className="footer__c2 xs-hide">
                            <div className="footer__text">Стоматологические видео с операций,<br/>
                                онлайн-вебинары и лекции от доктора<br/>
                                медицинских наук Сергея Сергеевича Едранова
                            </div>

                            <div className="footer__button ">Оформить подписку</div>

                        </div>

                        <div className="spacer xs-hide"/>

                        <div className="footer__c3">
                            <div className="footer__link">Все видео</div>
                            <div className="footer__link">Вебинары</div>
                            <div className="footer__link">Личный кабинет</div>
                            <div className="footer__link"><span className='xs-hide'>Информация о подписке</span><span className='xs-show'>Подписка</span></div>
                            <div className="footer__link">Отзывы</div>
                        </div>
                        <div className="footer__c4">
                            <div className="footer__link">+7 (908) 982-54-52</div>
                            <div className="footer__link footer__link-underline">online@edranov.ru</div>
                            <div className="spacer xs-hide"/>
                            <div className="footer__media-container">
                                <div><img width={53} height={21} src='\images\footer\youtube.svg' alt=''/></div>
                                <div><img width={'14px'} height={'22px'} src='\images\footer\facebook.svg' alt=''/></div>
                                <div><img width={19} height={19} src='\images\footer\instagram.svg' alt=''/></div>
                            </div>
                            <div className="spacer xs-show"/>
                            <div className="footer__button xs-show">Оформить подписку</div>
                        </div>

                    </div>



                    <div className='footer__delimiter'/>
                    <div  className='footer__end'>
                        <div className="footer__bold xs-show">Политика конфиденциальности</div>

                        <div className='footer__copyright'>© 2006 — 2020, Клиника доктора Едранова<br/> При использовании материалов гиперссылка<br className="xs-show"/>  на edranov.ru обязательна.</div>

                        <div className='footer__end-right'>
                            <div className="footer__bold  xs-hide">Политика конфиденциальности</div>
                            <div className='footer__copyright'>Разработка сайта - <span className="underline">Digital-агентство House</span></div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
