import React, {Fragment, useState} from "react";
import AllVideos from "./all-videos";
import Menu from "./menu";

export default function SubHeader() {
    const [buttonAllVideos, setButtonAllVideos] = useState(true);
    const [menu, setMenu] = useState(false);

    return (
        <Fragment>
            <div className="sub-header">
                <div className="sub-header__start">

                    <div className="sub-header__controls">
                        <div className="sub-header__logo">
                            <img width="246px" height="139px" src="/images/sub-header/logo.svg"/>
                        </div>

                        <div className="spacer"/>

                        <div className="sub-header__login">
                            <img width="15px" height="20px" src="/images/sub-header/door.svg"/>
                        </div>

                        <div onClick={()=>setMenu(true)} className="sub-header__menu">
                            <img  src="/images/sub-header/menu.svg"/>
                        </div>
                    </div>

                    <div className="sub-header__buttons">
                        {
                            buttonAllVideos ?
                                <div onClick={() => setButtonAllVideos(false)} className="sub-header__button-outlined">
                                    <span>Все видео</span>
                                    <img width="10px" height="6px" src="/images/arrow-down.svg"/>
                                </div>
                                :
                                <div onClick={() => setButtonAllVideos(true)} className="sub-header__button-outlined sub-header__button-outlined_active">
                                    <span>Закрыть</span>
                                    <img width="9px" height="9px" src="/images/x2.svg"/>
                                </div>
                        }
                        <div className="sub-header__button-underline">Вебинары</div>
                    </div>


                </div>


                <div className="sub-header__end">
                    <div className="sub-header__button">+7 (908) 982-54-52</div>
                    <div className="sub-header__button-underline">Личный кабинет</div>
                    <div className="sub-header__button-fill">Оформить подписку</div>
                </div>


            </div>

            {!buttonAllVideos ? <AllVideos/> : null}

            {menu ? <Menu close={()=>{setMenu(false)}}/>: null}
        </Fragment>
    )
}
