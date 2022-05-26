import React, { useEffect } from "react";
import Movies from "../../data-img";


import "./style.scss"

const Body = () => {

    function scrollY() {
        document.getElementById("right").addEventListener("click", () => {
            document.getElementById("combo-cards").style.transform = "translateX(-33%)"
        })
    }
    function scrollX() {
        document.getElementById("left").addEventListener("click", () => {
            document.getElementById("combo-cards").style.transform = "translateX(0%)"
        })
    }

    useEffect(() => {
        scrollX()
        scrollY()
    })

    function getMovies() {
        return Movies.map((e) => {
            return (
                <div key={e.id} className="card">
                    <img src={e.src}></img>
                    <h4>{e.name}</h4>
                </div>
            );
        });
    }


    return (
        <>
            <div className="body-content">
                <div className="combo-cards" id="combo-cards">
                    {getMovies()}
                </div>
                <span className="material-icons left" id="right" onClick={() => scrollX()}>
                    chevron_right
                </span>
                <span className="material-icons right" id="left" onClick={() => scrollY()}>
                    chevron_left
                </span>
                <div className="block-left">
                </div>
                <div className="block-right">
                </div>
            </div>
        </>
    )
}

export default Body;