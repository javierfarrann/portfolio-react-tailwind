import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function banner(props) {
    return (
        
        <div id="home" className="section container mx-auto max-w-[1200px] px-12 items-center 
        ">
            <div className='w-full'>
                <div className='block text-center font-secondary font-black text-[30px]'>
                    Hello, I am a
                    <div>
             <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Front-end Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'UI/UX Designer',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                className='ml-3 text-secondary'
                repeat={Infinity}
                />
                    </div>
                </div>
                    <div className='max-w-[700px] text-center mx-auto mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui fugit rem, cupiditate est veritatis culpa.
                 </div>
            </div>            
        </div>
    );
}

export default banner;
