import React from 'react'
import { PencilIcon, HandThumbUpIcon, EyeIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

export default function Questions() {
  return (
    <>
      <div className='w-full '>
        <h1 className='mt-16 ml-8 text-slate-400 text-xl'>Questions</h1>
        <div className='flex gap-12 w-full text-slate-400 text-sm mt-12 border-b pb-4 pl-12 cursor-pointer'>
          <div className='flex px-3 pb-1 cborder rounded-xl bg-[#f88100]'>
            <p className='text-white m-auto'>interesting</p>
          </div>
          <div className='flex gap-2' >
            <p>featured </p>
            <p className='border rounded-xl px-2 text-[#f88100] text-xs m-auto '>432</p>

          </div>
          <p>hot</p>
          <p>week</p>
          <p>month</p>
        </div>
      </div>

      {/* TOP QUESTIONS WRAPPER */}
      <section className='px-12 py-8'>

        <div className='flex justify-between items-center border-b pb-4'>
          <div className='flex flex-col gap-2' >
            <h1 className='text-[#85bce4] text-base font-bold mt-6'>Front End Developer with Angular</h1>
            <div className='flex gap-3 font-medium w-full mt-3 text-sm text-slate-400'>
              <div className=' w-auto border-2 rounded-xl px-3 py-[1px] '>
                <p className='m-auto' >iOS</p>
              </div>
              <div className='w-auto  border-2 rounded-xl px-3'>
                <p>iPhone</p>
              </div>
            </div>
            <div className='flex gap-2 '>
              <div className='flex border-2 rounded-[50%] w-6 h-6 '><PencilIcon className='w-3 m-auto text-[#f88100]' /></div>
              <p className='text-sm text-slate-400'>modified 1 minute ago</p>
            </div>
          </div>



          <div className='flex gap-5  text-slate-500 text-sm justify-center items-center '>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <HandThumbUpIcon className='w-5'/>
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <ChatBubbleLeftIcon className='w-5'/>
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <EyeIcon className='w-5'/>
            </div>
          </div>

        </div>
        <div className='flex justify-between items-center border-b pb-4'>
          <div className='flex flex-col gap-2' >
            <h1 className='text-[#85bce4] text-base font-bold mt-6'>Front End Developer with Angular</h1>
            <div className='flex gap-3 font-medium w-full mt-3 text-sm text-slate-400'>
              <div className=' w-auto border-2 rounded-xl px-3 py-[1px] '>
                <p className='m-auto' >iOS</p>
              </div>
              <div className='w-auto  border-2 rounded-xl px-3'>
                <p>iPhone</p>
              </div>
            </div>
            <div className='flex gap-2 '>
              <div className='flex border-2 rounded-[50%] w-6 h-6 '><PencilIcon className='w-3 m-auto text-[#f88100]' /></div>
              <p className='text-sm text-slate-400'>modified 1 minute ago</p>
            </div>
          </div>



          <div className='flex gap-5  text-slate-500 text-sm justify-center items-center '>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <HandThumbUpIcon className='w-5'/>
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <ChatBubbleLeftIcon className='w-5'/>
            </div>
            <div className='flex gap-1 flex-col justify-center items-center'>
              <h1 className='text-base'>0</h1>
              <h1>votes</h1>
              <EyeIcon className='w-5'/>
            </div>
          </div>

        </div>

      
      </section>

      <section className='flex flex-col items-center text-slate-500'>
        <img src="/assets/lookingForMore.PNG" alt="" />
        <h1  className='text-3xl'>Looking For more?</h1>
        <div className='flex'>
      <p>Browse the</p><p className='text-[#85bce4]'>complete list of questions</p><p>{", or "}</p><p className='text-[#85bce4]'>{" popular tags."}</p><p>Helps us answer unanswered questions </p>
      </div>
      </section>
    </>
  )
}
