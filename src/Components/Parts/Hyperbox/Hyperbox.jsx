import React from 'react'
import "../Hyperbox/Hyperbox.css"


export default function Hyperbox(props) {
    return (

        <div className="hyperbox-main2">
            <div className="hyperbox-img">
                <img src={props.imgScr} alt="" />
            </div>
            <div className="hyperbox-text">
                <h6>{props.title}</h6>
                <p>{props.Description}</p>

            </div>

        </div>

    )
}
