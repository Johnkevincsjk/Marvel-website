import React from 'react'

export default function Comics2(props) {
    return (
        <div className='comics-card-component'>
            <div className="comics-cards">
                <img className='comics-img' src={props.img} />
                <p className='card-content-one'>{props.description}</p>
                <p className='comic-year'>{props.year}</p>
            </div>
        </div>
    )
}
