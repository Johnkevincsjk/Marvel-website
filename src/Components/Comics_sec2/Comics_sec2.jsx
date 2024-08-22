import React from 'react'
import Comics2 from '../Parts/Comics2/Comics2'
import '../Comics_sec2/Comics_sec2.css'

export default function Comics_sec2() {
    return (
        <div className='container Comics_sec2'>

            <div className=" Comics_sec2-wrap">
                <Comics2
                    img="https://cdn.marvel.com/u/prod/marvel/i/mg/1/10/66300665977de/portrait_uncanny.jpg"
                    description="Blood Hunters (2024) #1"
                    year="2024"
                />
                <Comics2
                    img="https://cdn.marvel.com/u/prod/marvel/i/mg/2/d0/6630063c006fe/portrait_uncanny.jpg"
                    description="Blood Hunt (2024) #1"
                    year="2024"
                />
                <Comics2
                    img="https://cdn.marvel.com/u/prod/marvel/i/mg/f/e0/663006451cc17/portrait_uncanny.jpg"
                    description="Doctor Strange (2023) #15"
                    year="2024"
                />
                <Comics2
                    img="https://cdn.marvel.com/u/prod/marvel/i/mg/3/00/66300652cd82b/portrait_uncanny.jpg"
                    description="Blood Hunt (2024) #1"
                    year="2024"
                />
                <Comics2
                    img="https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/66212b6b44f79/portrait_uncanny.jpg"
                    description="X-Force (2024) #1"
                    year="2024"
                />
            </div>

        </div>
    )
}
