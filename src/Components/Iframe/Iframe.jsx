import React from 'react'
import '../Iframe/Iframe.css'
import Titles from '../Parts/Titles/Titles'

export default function Iframe() {
    return (
        <div className='container Iframe-main'>
            <Titles label="Trailers & Extras" />
            <h4>Marvel Rivals | Map Reveal | YGGSGARD - ‘WORLD TREE & KINGDOM OF GODS’</h4>
            <p>After the Timestream Entanglement, Asgard fused with Yggdrasill, the World Tree that connects all Ten Realms. Now Loki, the God of Mischief, uses his tricks to seize control and build his new kingdom: Yggsgard in Marvel Rivals!</p>
            <div className="iframe-sec1">
                <iframe width={"900px"} height={"475px"} name='trailers' src='https://www.youtube.com/embed/ZD94OIELqNA?si=aKwIizeAgb0zMdkX'>

                </iframe>
            </div>
            <div className="iframe-sec2">
                <div className="iframe-videos">
                    <div className="trailer-card">
                        <a href="https://www.youtube.com/embed/73_1biulkYk?si=ZmTlpj3MzlN-qmw5" target='trailers'><img src="https://i.ytimg.com/vi/Idh8n5XuYIA/maxresdefault.jpg" alt="" /></a>
                        <p>deadpool and wolverine</p>

                    </div>
                    <div className="trailer-card">
                        <a href="https://www.youtube.com/embed/eOrNdBpGMv8?si=8FPMPMfwS6LSNMuQ" target='trailers'><img src="https://i.ytimg.com/vi/cFv2xPvQfJ4/maxresdefault.jpg" alt="" /></a>
                        <p>avengers</p>

                    </div>
                    <div className="trailer-card">
                        <a href="https://www.youtube.com/embed/tmeOjFno6Do?si=JHFUGSUs8YEADNAf" target='trailers'><img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D27801687E91EC2B9DAA49E927B2E908174809679FA9C251F37837D64376EBC/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp" alt="" /></a>
                        <p>avengers: age of ultron</p>

                    </div>
                    <div className="trailer-card">
                        <a href="https://www.youtube.com/embed/QwievZ1Tx-8?si=CYiENw5n5NiAnmib" target='trailers'><img src="https://i.ytimg.com/vi/QwievZ1Tx-8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB1ODAx2groenXMkIwOMO_apoVvoA" alt="" /></a>
                        <p>avengers: infinity war</p>

                    </div>
                    <div className="trailer-card">
                        <a href="https://www.youtube.com/embed/QwievZ1Tx-8?si=CYiENw5n5NiAnmib" target='trailers'><img src="https://i.ytimg.com/vi/hA6hldpSTF8/maxresdefault.jpg" alt="" /></a>
                        <p>avengers: Endgame</p>

                    </div>
                    <div className="trailer-card">
                        <a href="https://www.youtube.com/embed/JfVOs4VSpmA?si=4s24eUiuYhco_G3q" target='trailers'><img src="https://i.ytimg.com/vi/JfVOs4VSpmA/maxresdefault.jpg" alt="" /></a>
                        <p>spiderman: no way home </p>

                    </div>




                </div>
            </div>
        </div>
    )
}
