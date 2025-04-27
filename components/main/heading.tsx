

const Heading = () => {
    return (
        <div className="flex cursor-pointer border-b border-gray-500">
            <div className="basis-1/3 flex flex-col items-center justify-center hover:bg-gray-800 p-3 relative">
                <div>For you</div>
                <div className="bg-blue-500 w-14 h-1 absolute bottom-0 rounded-md -mb-[1px]"></div>
            </div>
            <div className="basis-1/3 flex flex-col justify-center items-center hover:bg-gray-800 p-3 relative">
                <div>Following</div>
                <div className="bg-blue-500 w-20 h-1 absolute bottom-0 rounded-md -mb-[1px]"></div>
            </div>
            <div className="basis-1/3 flex flex-col justify-center items-center hover:bg-gray-800 p-3 relative">
                <div>React</div>
                <div className="bg-blue-500 w-14 h-1 absolute bottom-0 rounded-md -mb-[1px]"></div>
            </div>
        </div>
    )
}

export default Heading;
