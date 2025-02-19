import React from 'react';
import { BsGithub, BsLinkedin  } from "react-icons/bs";

function header(props) {
    return (
        <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0"> 
        <div className="flex justify-between py-3 items-center">
            <div className="text-gradient font-secondary" 
            data-aos="fade-right" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0">
                <a href="/">
                    <h1 className="text-[20px] leading-none">JAVIER FARRAN</h1>
                </a>
            </div>
            <div className="flex items-center space-x-3" 
            data-aos="fade-left" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0"
            >  
                <a href="/">    
                <BsGithub/>
                </a>
                <a href="/">    
                <BsLinkedin/>
                </a>
            </div>
        </div>
    </div>
    );
}

export default header;
