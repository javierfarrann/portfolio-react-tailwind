import React from 'react';
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";
import { Link, Element } from 'react-scroll';

function navigation(props) {
    return (
        <div className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
            <div className='flex justify-between mx-auto bg-slate-400 text-secondary p-2 rounded-full border-secondary border-solid border-[1px] max-w-[200px] lg:flex-col'>   
                <Link className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer" 
                to="home" 
                activeClass="active" 
                offset={-100}
                smooth='true'
                spy='true'> 

                    <BiHomeAlt />

                </Link>

                <Link Link className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer" 
                to="profile" 
                activeClass="active" 
                offset={-100}
                smooth='true'
                spy='true'> 

                    <BiUser />

                </Link>

                <Link Link className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer" 
                to="portfolio" 
                activeClass="active" 
                offset={-100}
                smooth='true'
                spy='true' > 

                    <BiCodeAlt />

                </Link>

            </div>
        </div>
    );
}

export default navigation;
