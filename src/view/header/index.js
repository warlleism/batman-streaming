import React from "react";
import Cloud from "../../img/cloud.png"
import "./style.scss"

const Header = () => {
    return (
        <>
            <div className="header-content">
                <ul className="login-content">
                    <li><a href="#">Entrar</a></li>
                    <li className="new-batFriend"><a href="#">Assine Agora</a></li>
                </ul>
                <div className="title">
                    <h1>BATMAN</h1>
                </div>
                <div class="cloud">
                    <img src={Cloud} alt="" class="img_cloud" />
                </div>
                <div className="black-content">

                </div>
            </div>
        </>
    )
}

export default Header;