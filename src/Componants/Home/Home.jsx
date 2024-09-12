import React from 'react'
import Logo from '../../Image/Newlogo.jpg';
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



            </div>

        </>
    )
}

export default Home
