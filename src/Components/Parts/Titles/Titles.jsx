import React from 'react'
import "../Titles/Title.css"

export default function Titles(props) {
    return (
        <div className='title-main'>
            <div className='title'>{props.label}</div>
            <div className='title-design'></div>
        </div>
    )
}
