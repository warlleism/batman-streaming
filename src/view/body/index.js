import React, { useEffect, useState } from "react";
import Movies from "./data-img";
import Slide from "../image-slide";

import "./style.scss"

const Body = () => {

    const [x, setX] = useState(0)


    const Left = () => {
        x === 0 ? setX(-72) : setX(x + 12)
    }

    const Rigth = () => {
        x === -72 ? setX(0) : setX(x - 12)
    }

    function showY() {
        const cards = document.getElementById("slide-movies")
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY)
            const comboCards = window.scrollY
            const trasitionCardsTop = comboCards > 190 ? cards.style.transform = "translateY(0px)" : cards.style.transform = "translateY(200px)"
            return trasitionCardsTop
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        showY()
    }, [])

    return (
        <div style={{ background: "black" }}>
            {console.log(x)}
            <div className="slide-movies" id="slide-movies">
                <div className="cards-content" id="cards-content">
                    <div className="block-left">
                        <span className="material-icons left" id="right" onClick={Rigth}>
                            chevron_right
                        </span>
                    </div>
                    <div className="combo-cards" id="combo-cards" style={{ transform: `translateX(${x}%)` }}>
                        {Movies.map((e) => {
                            return (
                                <div key={e.id} className="card">
                                    <img src={e.src}></img>
                                    <h4>{e.name}</h4>
                                </div>
                            );
                        })}
                    </div>
                    <div className="block-right">
                        <span className="material-icons right" id="left" onClick={Left}>
                            chevron_left
                        </span>
                    </div>
                </div>
            </div>
            {<Slide />}
        </div>
    )
}

export default Body;