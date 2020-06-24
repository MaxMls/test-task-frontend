import React from "react";

export default function Card(props) {
    return (
        <div className={`card ${props.class}`}>
            <div className='card__top'>
                <img className='card__top-image' src={props.src} alt=''/>
                <div className='card__top-label' style={{backgroundColor:props.color || '#f7f9fc'}}>{props.name}</div>
            </div>
            <div className='card__info'>
                <div>
                    <div className='card__date_container'>
                        <span className='card__date'>{props.date}</span>


                        <span className='card__time'><img width='12px' height='12px' src='/images/card/time.svg'/><span> {props.time}</span></span>
                    </div>
                    <div className='card__title'>{props.title}</div>
                    <div className='card__label'>{props.button ? 'Бесплатно на 7 дней' : 'Подписка'}</div>
                </div>
                <div className='card__button-container'>
                    {props.button ? <img width='21px' height='21px' src="images/card/watch.svg"/> : <img width='22px' height='22px' src="images/card/subscribe.svg"/>}
                    <span className={'card__button '+ (props.button ? 'card__button-watch' : 'card__button-sub')}/>
                </div>

            </div>

        </div>
    )


}
