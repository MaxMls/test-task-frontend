import React, {Fragment} from "react";


export default function Header() {
    return (
        <Fragment>
            <div className="header">
                <div className="header__container">


                    <div className="header__navigation-container">
                        <div className="header__button">Клиника</div>
                        <div className="header__button">Учебный центр</div>
                        <div className="header__button header__button_active">Онлайн-обучение</div>


                    </div>
                    <div className="header__media-container">
                        <div className="header__media-button">
                            <img width="53px" height='21px' src="/images/header/youtube.svg"/>
                        </div>
                        <div className="header__media-button facebook">
                            <img width="10px" height='20px' src="/images/header/facebook.svg"/>
                        </div>
                        <div className="header__media-button">
                            <img width="20px" height='20px' src="/images/header/instagram.svg"/>
                        </div>
                        <div className="header__media-button">
                            <img width="22px" height='22px' src="/images/header/search.svg"/>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
