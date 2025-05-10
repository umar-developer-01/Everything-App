'use client';
import { useState } from "react";
import Image from "next/image";
import Image4 from "@/public/gala.jpg";
import Popup from "@/components/sidebars/popup"

const RightSidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="relative mt-2" onClick={handleModalOpen}>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-80 p-2 pl-8 rounded-full bg-black text-white border border-gray-500 outline-none text-sm placeholder:text-white focus:ring-2 focus:ring-twitter"

                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </div>

            <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="w-full text-white flex flex-col">
                    <div className="flex justify-between px-4">
                        <div className="text-xl">
                            Recent
                        </div>
                        <div className="text-twitter">
                            Clear all
                        </div>
                    </div>
                    <OptionInPopup name={"Rock"} />
                    <OptionInPopup name={"Greenland"} />
                    <OptionInPopup name={"X"} />
                    <OptionInPopup name={"Met Gala"} />
                    <OptionInPopup name={"Virat Kohli"} />
                </div>
            </Popup>

            <div className="flex flex-col">
                <div className="w-80 h-36 border border-gray-500 rounded-[13px] flex flex-col">
                    <p className="text-white text-lg font-bold mt-3 pl-2">Subscribe to Premium</p>
                    <p className="text-sm text-white mt-2 pl-2">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <button className="text-white text-sm font-thin px-16 py-1 rounded-full w-12 bg-twitter flex justify-center items-center mt-2 ml-2">Subscribe</button>
                </div>
                <div className="w-80 h-[440px] border border-gray-500 rounded-[13px] flex flex-col py-2 px-4 text-white mt-6">
                    <div className="text-xl font-bold">Whats's happening</div>
                    <div className="flex gap-3 mt-4">
                        <Image src={Image4} alt="Image4" className="w-20 h-20 rounded-md object-cover" />
                        <div className="flex flex-col mt-[1px]">
                            <div className="text-[15px]">Met Gala 2025: Fashion's Biggest Night Lights Up NYC</div>
                            <div className="text-gray-500 text-[12px]">LIVE</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <TrendingTopic name={"Lanchire"} posts={43} />
                        <TrendingTopic name={"React"} posts={81} />
                        <TrendingTopic name={"EU"} posts={98} />
                    </div>
                    <div className="text-twitter text-md mt-5">
                        Show More
                    </div>
                </div>

            </div>



        </div>
    )
}

export default RightSidebar;


const TrendingTopic = ({ name, posts }: { name: string, posts: number }) => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-1">
                <div className="text-gray-500 text-[12px]">Trending Topic</div>
                <div className="text-white text-md">{name}</div>
                <div className="text-gray-500 text-[12px]">{posts}K posts</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>


        </div>
    )
}


const OptionInPopup = ({ name }: { name: String }) => {
    return (
        <>
            <div className="flex justify-between py-4 px-4 hover:bg-gray-800 hover:cursor-pointer">
                <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <p>{name}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 text-twitter">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>
        </>
    )
}