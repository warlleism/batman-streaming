import React, { useEffect, useState } from "react";
import Movies from "../../data-img";


import "./style.scss"

const Body = () => {

    const [x, setX] = useState(28)


    const Left = () => {
        x === 0 ? setX(-100 * (Movies.length - 1)) : setX(x + 34)
    }

    const Rigth = () => {
        x === -100 * (Movies.length - 1) ? setX(0) : setX(x - 34)
    }


    useEffect(() => {
        // Rigth()
        // Left()
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
                <div className="combo-cards" id="combo-cards" style={{ transform: `translateX(${x}%)` }}>
                    {getMovies()}
                </div>
                <span className="material-icons left" id="right" onClick={Rigth}>
                    chevron_right
                </span>
                <span className="material-icons right" id="left" onClick={Left}>
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