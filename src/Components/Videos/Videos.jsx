import React from 'react'
import '../Videos/Videos.css'
import Titles from '../Parts/Titles/Titles'
import Hyperbox from '../Parts/Hyperbox/Hyperbox'

export default function Videos() {
    return (
        <div className='container video-main'>
            <Titles label="The Latest" />
            <div className='row video-main2'>
                <div className="col-md-8 video-box">
                    <div className='video-cards'>
                        <div className="video-cardsRapper">
                            <div className='video-tumbnail'>
                                <img src="https://cdn.marvel.com/content/1x/marvel_zombies_dawn_of_decay_1_cover_card.jpg" alt="" />
                            </div>
                            <div className='video-header'>
                                <p>Comics</p>
                                <h6>Groot Unleashes a Zombie Apocalypse in 'Marvel Zombies: Dawn of Decay</h6>
                                <p>4 HOURS AGO</p>

                            </div>
                        </div>
                        <div className="video-cardsRapper">
                            <div className='video-tumbnail'>
                                <img src="https://cdn.marvel.com/content/1x/venom_war_horse_variant_cover_clayton_crain_card.jpg" alt="" />
                            </div>
                            <div className='video-header'>
                                <p>Comics</p>
                                <h6>Venom Horse Rides to Battle in New 'Venom War' Variant Covers & Bonus Story</h6>
                                <p>1 day ago</p>

                            </div>
                        </div>
                        <div className="video-cardsRapper">
                            <div className='video-tumbnail'>
                                <img src="https://cdn.marvel.com/content/1x/weapon_x-men_1_variant_card.jpg" alt="" />
                            </div>
                            <div className='video-header'>
                                <p>Comics</p>
                                <h6>Wolverine Variants from Across the Multiverse</h6>
                                <p>7 day ago</p>

                            </div>
                        </div>
                        <div className="video-cardsRapper">
                            <div className='video-tumbnail'>
                                <img src="https://cdn.marvel.com/content/1x/deadpool_corps_2010_12_cover_card.png" alt="" />
                            </div>
                            <div className='video-header'>
                                <p>Comics</p>
                                <h6>Deadpool Variants from Across the Multiverse</h6>
                                <p>1 day ago</p>

                            </div>
                        </div>


                    </div>

                </div>
                <hr />
                <div className="col-md-4 hypeBox-main">
                    <div className="hypeBox-main1">
                        <h1>The Hype Box</h1>
                        <p>Can’t-miss news and updates from across the Marvel Universe!</p>
                       
                    <Hyperbox
                        imgScr="https://cdn.marvel.com/content/1x/sdcc_hall_h_recap.jpg"
                        title="Live Events"
                        Description="SDCC 2024: All the News from Marvel Studios’ Hall H Panel"
                    />
                    <hr />
                    <Hyperbox
                        imgScr="https://cdn.marvel.com/content/1x/sdcc-2024-biggest-marvel-news-recap-article-card.jpg"
                        title="Live Events"
                        Description="The Biggest Marvel News from San Diego Comic-Con 2024"
                    />
                    <hr />
                    <Hyperbox
                        imgScr="https://cdn.marvel.com/content/1x/deadpoolwolverinepremiere.jpg"
                        title="Movies"
                        Description="‘Deadpool & Wolverine’ Makes Its Worldwide Premiere in New York City"
                    />
                    <hr />
                    <Hyperbox
                        imgScr="https://cdn.marvel.com/content/1x/blood_hunt_5_cover_card.jpg"
                        title="Comics"
                        Description="July 31's New Marvel Comics: The Full List"
                    />
                    <hr />
                    <Hyperbox
                        imgScr="https://cdn.marvel.com/content/1x/magneto_0.jpg"
                        title="Podcasts"
                        Description="See the X-Men Comics That Inspired ‘X-Men ‘97’"
                    />
                    </div>
                </div>
            </div>

        </div>
    )
}
