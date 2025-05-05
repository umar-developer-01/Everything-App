const RightSidebar = () => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="relative mt-2">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-80 p-2 pl-8 rounded-full bg-black text-white border border-gray-500 outline-none text-sm placeholder:text-white" 
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

            <div className="flex flex-col gap-2">
                <div className="w-80 h-36 border border-gray-500 rounded-[13px] flex flex-col">
                    <p className="text-white text-lg font-bold mt-3 pl-2">Subscribe to Premium</p>
                    <p className="text-sm text-white mt-2 pl-2">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <button className="text-white text-sm font-thin px-16 py-1 rounded-full w-12 bg-twitter flex justify-center items-center mt-2 ml-2">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar;