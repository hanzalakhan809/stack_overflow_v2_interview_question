import React from 'react'
import { MapPinIcon, BuildingOffice2Icon, GlobeEuropeAfricaIcon, ChevronRightIcon, BookmarkIcon } from '@heroicons/react/24/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
export default function RightSideSection() {
    return (
        <>
            <section className="w-[560px] h-auto cursor-pointer md:flex flex-col gap-8 hidden border-l-2 p-2 pl-4  text-slate-400 bg-[#fafafa]">
                {/* <section className=" h-screen cursor-pointer md:flex flex-col gap-8 hidden border-l-2"> */}
                <h1 className='font-semibold text-xl mt-8'>Looking out for...</h1>
                <div className='flex gap-3'>
                    <div className='line mt-6' >
                        <div className='flex flex-col justify-center items-center '>
                            <div className=' w-5 h-5 rounded-[50%] border-2'></div>
                            <div className='line border h-[147px] w-0'></div>
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                            <div className=' w-5 h-5 rounded-[50%] border-2'></div>
                            <div className='line border h-36 w-0'></div>
                        </div>
                        <div className='flex flex-col justify-center items-center text-[#85bce4] '>
                            {/* <div className='flex w-6 h-6 rounded-[50%] border-2  border-[#85bce4] '><CheckCircleIcon className='w-8 font-bold m-auto  '/></div> */}
                            <CheckCircleIcon className='font-bold m-auto w-[26px] h-[26px]  border-[#85bce4] ' />
                            <div className='line border h-28 w-0 '></div>
                        </div>

                    </div>
                    <div>

                        <div className='border-b pb-6'>
                            <h1 className='text-[#85bce4] text-base font-bold mt-6'>Front End Developer with Angular</h1>
                            <p className='text-base font-bold'>WalletHub</p>
                            <div className='flex gap-5 text-sm font-semibold mt-2'>

                                <div className='flex gap-1' >
                                    <MapPinIcon className='w-3' />
                                    <p>Washigtion,Dc</p>
                                </div>

                                <div className='flex gap-1' >
                                    <GlobeEuropeAfricaIcon className='w-3' />
                                    <p>Remote</p>
                                </div>

                            </div>
                            <div className='flex gap-3 font-medium w-full mt-3'>
                                <div className=' w-auto border-2 rounded-xl px-3 py-[1px] '>
                                    <p className='m-auto' >angular js</p>
                                </div>
                                <div className='w-auto  border-2 rounded-xl px-3'>
                                    <p>cordova</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-b pb-6'>
                            <h1 className='text-[#85bce4] text-base font-bold mt-6'>Senior iOS / iPhone Engineer</h1>
                            <p className='text-base font-bold'>Perk.com INC</p>
                            <div className='flex gap-5 text-sm font-semibold mt-2'>

                                <div className='flex gap-1' >
                                    <MapPinIcon className='w-3' />
                                    <p>Bengaluru,India</p>
                                </div>

                                <div className='flex gap-1' >
                                    <BuildingOffice2Icon className='w-3' />
                                    <p>In Office</p>
                                </div>

                            </div>
                            <div className='flex gap-3 font-medium w-full mt-3'>
                                <div className=' w-auto border-2 rounded-xl px-3 py-[1px] '>
                                    <p className='m-auto' >iOS</p>
                                </div>
                                <div className='w-auto  border-2 rounded-xl px-3'>
                                    <p>iPhone</p>
                                </div>
                            </div>
                        </div>
                        <div className=' pb-6'>
                            <h1 className='text-[#85bce4] text-base font-bold mt-6'>Software Engineer</h1>
                            <p className='text-base font-bold'>SpankNET Techonologies</p>
                            <p className='text-green-600 mt-1'>$25,000 - $40,000</p>
                            <div className='flex gap-5 text-sm font-semibold mt-2'>

                                <div className='flex gap-1' >
                                    <MapPinIcon className='w-3' />
                                    <p>No Location</p>
                                </div>

                                <div className='flex gap-1' >
                                    <GlobeEuropeAfricaIcon className='w-3' />
                                    <p>Remote</p>
                                </div>

                            </div>
                            <div className='flex gap-3 font-medium w-full mt-3'>
                                <div className=' w-auto border-2 rounded-xl px-3 py-[1px] '>
                                    <p className='m-auto' >iOS</p>
                                </div>
                                <div className='w-auto  border-2 rounded-xl px-3'>
                                    <p>ruby on rails</p>
                                </div>
                            </div>
                            <div className='flex gap-2 font-bold text-[#85bce4] mt-5 text-sm'  >
                                <h1>VIEW ALL JOBS  </h1>
                                <ChevronRightIcon className='w-4' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='pl-3 pr-2'>
                    <h1 className='font-semibold text-xl my-8'>Network Questions</h1>
                    {/* WRAPPER OF INNER CONTAINER   */}
                    <div className='flex flex-col text-[#85bce4] text-sm font-bold '>
                        <div className='flex gap-3 border-b py-4'>
                            <img src="../assets/chat.png" alt="" className='w-6 h-6 m-auto' />
                            <p>Where there women who were agaist giving women the right to vote?</p>
                        </div>
                  
                    <div className='flex flex-col text-[#85bce4] text-sm font-bold '>
                        <div className='flex gap-3 border-b py-4'>
                            <img src="../assets/Stack.png" alt="" className='w-6 h-6 m-auto' />
                            <p>Why does everybody type defover standard C types?</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-[#85bce4] text-sm font-bold '>
                        <div className='flex gap-3 border-b py-4'>
                            <BookmarkIcon className='w-8 h-8 m-auto text-red-600'/>
                            <p>An English word describing a pseudo-job?</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-[#85bce4] text-sm font-bold '>
                        <div className='flex gap-3 border-b py-4'>
                            <img src="../assets/cameralens.png" alt="" className='w-6 h-6 m-auto' />
                            <p>When flying on a very tight schedule,are you obligated to run to make it to the next gate on a connection?</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-[#85bce4] text-sm font-bold '>
                        <div className='flex gap-3 border-b py-4'>
                            <img src="../assets/random-doughnut.png" alt="" className='w-6 h-6 ' />
                            <p>Does 1 pixel have a standard size?</p>
                        </div>
                    </div>

                    <div className='flex gap-2 font-bold text-[#85bce4] mt-5 text-sm pl-6'  >
                                <h1>VIEW ALL JOBS  </h1>
                                <ChevronRightIcon className='w-4' />
                            </div>
                            </div>
                </div>



            </section>
        </>
    )
}
