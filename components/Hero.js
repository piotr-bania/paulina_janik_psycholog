import React from 'react'
import Image from 'next/image'

const Hero = () => {
return (
<div>
    <section id='section_a'>

        <div className='background_blur'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className="container">

            <div className="hero_text">
                <h1 className='text_left'>Gdy <i>slucham</i></h1>
                <h1 className='text_left'>co mowisz</h1>
                <h1 className='text_right'><i>slysze</i> kim jestes</h1>
            </div>

            <div className="hero_subtext">
                <p>W swojej pracy towarzyszę osobom takim jak Ty. Wspieram i pomagam zrozumieć wewnętrzne potrzeby,
                    pokonać
                    trudności oraz odnaleźć drogę do poradzenia sobie z nimi.</p>
            </div>

            <div className="hero_button">
                <button>Umow sie na wizyte</button>
            </div>

            <div className="paulina" style={{borderRadius: '250px 0 0 0', overflow: 'hidden'}}>
                <Image src="/paulina.jpg"
                width={493.2}
                height={704.9}
                layout="fixed"
                alt="Picture of the author" />
            </div>

        </div>

        {/* <h1>Test text.</h1>
        <h1>Test text.</h1>
        <h1>Test text.</h1>
        <h1>Test text.</h1>
        <h1>Test text.</h1>
        <h1>Test text.</h1> */}

    </section>
</div>
)
}

export default Hero