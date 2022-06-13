import React, { useEffect, useState } from "react";
import Car from "../../img/slide-images/car.png"
import Lies from "../../img/slide-images/lies.png"
import Person from "../../img/slide-images/person.png"

import './style.scss'

const Slide = () => {

    const [posicao1, setPosicao1] = useState(0)
    const [posicao2, setPosicao2] = useState(0)
    const [posicao3, setPosicao3] = useState(0)

    useEffect(() => {
        photo1Transform(0)
        photo2Transform(0)
        photo3Transform(0)
    }, [posicao1, posicao2, posicao3])

    const photo1Transform = () => {
        const photo1 = document.getElementById("photo1")
        const photo2 = document.getElementById("photo2")
        const photo3 = document.getElementById("photo3")
        photo1.style.transform = `translateX(${posicao1}%)`
        photo1.addEventListener("click", () => {
            setPosicao1(75)
            setPosicao2(100)
            setPosicao3(-230)
            photo1.style.zIndex = "999"
            photo2.style.zIndex = "0"
            photo3.style.zIndex = "0"
            photo1.style.height = "400px"
            photo1.style.maxWidth = "800px"
            photo2.style.height = "300px"
            photo3.style.height = "300px"
        })
    }

    const photo2Transform = () => {
        const photo2 = document.getElementById("photo2")
        const photo3 = document.getElementById("photo3")
        const photo1 = document.getElementById("photo1")
        photo2.style.transform = `translateX(${posicao2}%)`
        photo2.addEventListener("click", () => {
            setPosicao1(0)
            setPosicao2(0)
            setPosicao3(0)
            photo2.style.zIndex = "999"
            photo1.style.zIndex = "0"
            photo3.style.zIndex = "0"
            photo1.style.height = "300px"
            photo2.style.height = "400px"
            photo3.style.height = "300px"
            photo2.style.maxWidth = "800px"
            photo2.style.boxShadow = "#ffffff 10px 10px 100px 10px"
            photo1.style.boxShadow = "withe  10px 10px 100px 10px"
        })

    }

    const photo3Transform = () => {
        const photo3 = document.getElementById("photo3")
        const photo2 = document.getElementById("photo2")
        const photo1 = document.getElementById("photo1")
        photo3.style.transform = `translateX(${posicao3}%)`
        photo3.addEventListener("click", () => {
            setPosicao1(220)
            setPosicao2(-90)
            setPosicao3(-75)
            photo1.style.zIndex = "0"
            photo2.style.zIndex = "0"
            photo3.style.zIndex = "999"
            photo3.style.maxWidth = "800px"
            photo1.style.height = "300px"
            photo3.style.height = "400px"
            photo2.style.height = "300px"
            photo3.style.boxShadow = "#ccc278 10px 10px 100px 10px"
        })

    }

    return (
        <div className="main-content">
            <div className="batman-photo">
                <img className="img" id="photo1" src={Lies} onClick={photo1Transform} />
                <img className="img" id="photo2" src={Person} onClick={photo2Transform} />
                <img className="img" id="photo3" src={Car} onClick={photo3Transform} />
            </div>
        </div>
    )
}

export default Slide;