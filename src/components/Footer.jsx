import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex justify-between w-full px-6 text-slate-400 border-t border-b h-16 cursor-pointer'>
                {/* LINK */}
                <div className='flex gap-3 w-[70%]'>
                    <p className='m-auto'>about us</p>
                    <p className='m-auto'>tour</p>
                    <p className='m-auto'>help</p>
                    <p className='m-auto'>blog</p>
                    <p className='m-auto'>chat</p>
                    <p className='m-auto'>data</p>
                    <p className='m-auto'>legal</p>
                    <p className='m-auto'>privacy policy</p>
                    <p className='m-auto'>work here</p>
                    <p className='m-auto'>advertising info</p>
                    <p className='m-auto'>mobile</p>
                    <p className='m-auto'>contact us</p>
                    <p className='m-auto'>feedback</p>
                </div>

                {/* ICON */}
                <div className='flex w-[10%]'>
                    <img src="/assets/twitter.png" alt="" className='w-5 m-auto' />
                    <img src="/assets/facebook.png" alt="" className='w-4 m-auto' />
                    <img src="/assets/insta.png" alt="" className='w-5 m-auto' />
                </div>
            </div>
            <footer className='grid grid-cols-6 w-full h-auto px-5 pr-10 border-b text-slate-400 py-12 cursor-pointer '>
                <div className='flex flex-col gap-2'>
                    <h1>TECHNOLOGY</h1>
                    <p>Stack Overflow</p>
                    <p>Server Fault</p>
                    <p>Super User</p>
                    <p>Web Applications</p>
                    <p>Ask Ubuntu</p>
                    <p>Webmasters</p>
                    <p>Game Development</p>
                    <p>TeX-LaTeX</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1>TECHNOLOGY</h1>
                    <p>Stack Overflow</p>
                    <p>Server Fault</p>
                    <p>Super User</p>
                    <p>Web Applications</p>
                    <p>Ask Ubuntu</p>
                    <p>Webmasters</p>
                    <p>Game Development</p>
                    <p>TeX-LaTeX</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1>TECHNOLOGY</h1>
                    <p>Stack Overflow</p>
                    <p>Server Fault</p>
                    <p>Super User</p>
                    <p>Web Applications</p>
                    <p>Ask Ubuntu</p>
                    <p>Webmasters</p>
                    <p>Game Development</p>
                    <p>TeX-LaTeX</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1>TECHNOLOGY</h1>
                    <p>Stack Overflow</p>
                    <p>Server Fault</p>
                    <p>Super User</p>
                    <p>Web Applications</p>
                    <p>Ask Ubuntu</p>
                    <p>Webmasters</p>
                    <p>Game Development</p>
                    <p>TeX-LaTeX</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1>TECHNOLOGY</h1>
                    <p>Stack Overflow</p>
                    <p>Server Fault</p>
                    <p>Super User</p>
                    <p>Web Applications</p>
                    <p>Ask Ubuntu</p>
                    <p>Webmasters</p>
                    <p>Game Development</p>
                    <p>TeX-LaTeX</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1>TECHNOLOGY</h1>
                    <p>Stack Overflow</p>
                    <p>Server Fault</p>
                    <p>Super User</p>
                    <p>Web Applications</p>
                    <p>Ask Ubuntu</p>
                    <p>Webmasters</p>
                    <p>Game Development</p>
                    <p>TeX-LaTeX</p>
                </div>
            </footer>
            <div className='w-full justify-between flex  border-t border-b h-16 text-slate-400 '>
                <p className='m-auto'> Site design/logo © 2023 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2023.8.21.43588</p>
                <p className='m-auto'>rev 2016 8.1.3852</p>
            </div>
        </>
    )
}
