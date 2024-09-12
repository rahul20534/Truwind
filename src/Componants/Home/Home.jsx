import React from 'react'
import Logo from '../../Image/Newlogo.jpg';
import Arrow from '../../Icon/pointerarrow.jpg';
import image1 from '../../Image/img.jpg';
import image2 from '../../Image/img1.jpg';
import image3 from '../../Image/img3.jpg';
import image4 from '../../Image/img4.jpg';
import image5 from '../../Image/img5.jpg';
import image6 from '../../Image/img6.jpg';
import image7 from '../../Image/img7.jpg';
import image8 from '../../Image/img8.jpg';
import image9 from '../../Image/img9.jpg';

import './Home.css';

function Home() {
    return (
        <>
            { /*This is the maine full home page div with classname is "Homecontainer"*/}
            <div className='Homecontainer'>

                { /* This is "navbar div with classname navbar" */}
                <nav className='navbar'>
                    <ul className='navbaroption'>
                        <li>About</li>
                        <li>Community</li>
                        <li>Events</li>
                        <li>Contact</li>
                    </ul>

                    <div className='logoimg'>
                        <img src={Logo} alt="This is logo" />

                    </div>

                    <div className='subsbtn'>
                        <button>Subscribe</button>
                    </div>
                </nav>

                {/* This is the end of navbar section */}
                { /* =======================================================================*/}


                {/* THis is second section after navbar*/}

                <div className='knowmore-section'>
                    <div className='main-text'>
                        <h1>Learn The Way Of</h1>
                        <h1>Conscience <span>Education.</span></h1>
                    </div>

                    <div className='para'>
                        <p>This is a sample text that describes about this website. Lorem Ipsum is the </p>
                        <p>way of giving sample texts. Lorem Ipsum is the text.</p>
                    </div>

                    <div className='btn'>
                        <button>KNOW MORE <img src={Arrow} alt="arrow" /></button>
                        
                    </div>
                </div>

                {/* This is the end of second section*/}
                { /* =======================================================================*/}

                {/* THis is  photo sliding section*/}

                <div className='photo'>
                    <img className='img1' src={image1} />
                    <img className='img2' src={image2} />
                    <img className='img3' src={image3} />
                    <img className='img4' src={image4} />
                    <img className='img5' src={image5} />
                    <img className='img6' src={image6} />

                </div>




            </div>

        </>
    )
}

export default Home
