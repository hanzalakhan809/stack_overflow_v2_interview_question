
import { ShoppingBagIcon,DocumentTextIcon,UserIcon,BookmarkIcon,MegaphoneIcon,CircleStackIcon,InboxStackIcon,TagIcon } from '@heroicons/react/24/outline'


export default function SideMenu() {

    return (
        <>
            <section className="w-[320px] h-auto cursor-pointer md:flex flex-col gap-8 hidden border-r-2">
            {/* <section className=" h-screen cursor-pointer md:flex flex-col gap-8 hidden border-r-2"> */}
                <div className="flex flex-col items-start gap-6 text-slate-400 pl-7 text-sm mt-12 font-semibold">

                    <div className="flex  gap-2">
                        <p className="text-xl m-auto">?</p>
                        <p className="m-auto">QUESTIONS</p>
                    </div>
                    <div className="flex  gap-2">
                    <ShoppingBagIcon className='w-5'/>

                        <p>JOBS</p>
                    </div>
                    <div className="flex  gap-2">
                    <DocumentTextIcon className='w-5'/>

                        <p>DOCUMENTATION</p>
                    </div>
                    <div className="flex  gap-2">
                    <TagIcon className='w-5'/>

                        <p>TAGS</p>
                    </div>
                    <div className="flex  gap-2">
                    <UserIcon className='w-5'/>

                        <p>USERS</p>
                    </div>
                    <div className="flex  gap-2">
                    <BookmarkIcon className='w-5'/>
                        <p>BADGES</p>
                    </div>
                    <div className="flex  gap-2">
                    <MegaphoneIcon className='w-5'/>

                        <p>ASK QUESTION</p>
                    </div>
                    <div className="flex  gap-2">
                    <CircleStackIcon className='w-5'/>

                        <p>STACK EXCHANGE</p>
                    </div>
                    <div className="flex  gap-2">
                    <InboxStackIcon className='w-5'/>


                        <p>INBOX</p>
                    </div>

                </div>
            </section>
        </>
    )
}
