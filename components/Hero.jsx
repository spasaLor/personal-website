import '../src/styles/hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Hero({handleClick}){
    return( 
        <section id="hero-section" className='wobble'>
            <h1>Hi, I'm Lorenzo</h1>
            <p>Full-Stack Developer // Born 9 years too late to witness the '90s</p>
            <div id="start" onClick={handleClick}>Press Play to begin <FontAwesomeIcon icon={faPlay} /> </div>
        </section>
    );
}