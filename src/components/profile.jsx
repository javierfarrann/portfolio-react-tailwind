import React from 'react';

function profile(props) {
    return (
        <div id="profile" className="section">
            <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
                <div className='font-secondary text-center font-bold mb-12'>
                    <h4 className='text-secondary mb-3 '> My Repertoire </h4>
                    <h2 
                    className='text-gradient font-primary max-w-[700px] mx-auto text-[24px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas possimus magni inventore, quidem rem unde, voluptatibus ut eos, nisi dolorum ad recusandae repellat quo debitis ea tenetur id eum.
                    </h2>
                </div>

                <div className='flex flex-col lg:flex-row items-start justify-between'>
                    <div className='text-center w-full max-w-[400px] mx-auto mb-[50px]'>
                        <div className='min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden'>
                            <img src="/images/me.png" alt="" />
                        </div>
                        <h2 className='text-gradient text-[50px] mt-[20px] '>
                             Javier Farran A. 

                        </h2>
                    </div>
                    <div className='w-full lg:pt-[50px] lg:ml-[50px]'>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg
                                overflow-hidden relative p-5 group'>
                                    <img src="/images/1.png" alt="" />
                                    <div className='absolute p-5  backdrop-blur-xl bg-purple-700 w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white '>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Javascript
                                                </h4>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur {" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg
                                overflow-hidden relative p-5 group'>
                                    <img src="/images/2.png" alt="" />
                                    <div className='absolute bg-primary p-5 backdrop-blur-xl w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 transition ease-linear group-hover:opacity-100 '>
                                        <div className='text-center w-full text-white '>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Bootstrap
                                                </h4>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg
                                overflow-hidden relative p-5 group'>
                                    <img src="/images/3.png" alt="" />
                                    <div className='absolute bg-primary p-5 backdrop-blur-xl w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 transition ease-linear group-hover:opacity-100 '>
                                        <div className='text-center w-full text-white '>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    CSS
                                                </h4>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg
                                overflow-hidden relative p-5 group'>
                                    <img src="/images/4.png" alt="" />
                                    <div className='absolute bg-primary p-5 backdrop-blur-xl w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 transition ease-linear group-hover:opacity-100 '>
                                        <div className='text-center w-full text-white '>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    HTML
                                                </h4>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default profile;
