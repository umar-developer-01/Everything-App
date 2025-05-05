import Image from "next/image";
import Image4 from "@/public/gala.jpg";

const RightSidebar = () => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="relative mt-2">
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

            <div className="flex flex-col">
                <div className="w-80 h-36 border border-gray-500 rounded-[13px] flex flex-col">
                    <p className="text-white text-lg font-bold mt-3 pl-2">Subscribe to Premium</p>
                    <p className="text-sm text-white mt-2 pl-2">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <button className="text-white text-sm font-thin px-16 py-1 rounded-full w-12 bg-twitter flex justify-center items-center mt-2 ml-2">Subscribe</button>
                </div>
                <div className="w-80 h-[430px] border border-gray-500 rounded-[13px] flex flex-col py-2 px-4 text-white mt-6">
                    <div className="text-xl font-bold">Whats's happening</div>
                    <div className="flex gap-3 mt-4">
                        <Image src={Image4} alt="Image4" className="w-20 h-20 rounded-md object-cover" />
                        <div className="flex flex-col mt-[1px]">
                            <div className="text-[15px]">Met Gala 2025: Fashion's Biggest Night Lights Up NYC</div>
                            <div className="text-gray-500 text-[12px]">LIVE</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <TrendingTopic />
                        <TrendingTopic />
                        <TrendingTopic />
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


const TrendingTopic = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col">
                <div className="text-gray-500 text-[12px]">Trending Topic</div>
                <div className="text-white text-md">Lanchire</div>
                <div className="text-gray-500 text-[12px]">43K posts</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>


        </div>
    )
}
