import React from "react"
import { Bars3Icon,MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    return (
        <>
            <nav className='flex h-12 w-full justify-between items-center '>

                {/* LOGO */}
                <div className='flex p-1 justify-center items-center '>
                    <Bars3Icon className="w-6 md:hidden text-slate-500" />
                    <img src="/assets/logo-stackoverflow.svg" alt="StackOverflow"
                        className="hidden md:block m-auto mr-2 w-32 h-auto "
                    />
                </div>



                {/* INPUT */}
                <div className='flex border w-[55%] rounded-md px-2 py-1 '>
                <MagnifyingGlassIcon className="w-5 text-slate-500"/>
                    <input type="search" placeholder='Search' className='ml-1 outline-none' />

                </div>
                <div>

                    {/* HELP,TOUR & PROFILE PHOTO PARENT */}
                    <div className='flex justify-between gap-4 text-slate-400 box-border'>


                        {/* HELP */}
                        <div className='flex m-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                            </svg>
                            <p>Help</p>
                        </div>

                        {/* TOUR */}
                        <div className='flex m-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                            </svg>
                            <p>Tour</p>
                        </div>

                        {/* PROFILE PHOTO */}
                        <div className='flex p-1 justify-center items-center '>
                            <div className='m-auto mr-2 w-8 h-auto rounded-[50%] overflow-hidden ' >
                                <img src="/assets/profilePhotoJamesBond.jpg" alt="StackOverflow"
                                    className="w-full h-full bg-contain"
                                />


                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>

                    </div>
                </div>
            </nav>
            <hr />
        </>
    )
}
