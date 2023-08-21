import React from 'react'

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
    </>
  )
}
