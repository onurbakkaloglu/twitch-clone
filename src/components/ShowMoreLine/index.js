function ShowMoreLine() {

    return (
        <div className="flex text-center pt-4 mx-4 mb-8 -mt-2">
            <div className="grow relative">
                <div className="border-t border-contentBorderColor w-full absolute -z-[-1] top-1/2"></div>
            </div>
            <div className="grow-0 px-4"><button className="bg-transparent text-showMore text-sm">Show more</button></div>
            <div className="grow relative">
                <div className="border-t border-contentBorderColor w-full absolute -z-[-1] top-1/2"></div>
            </div>
        </div>
    )
}

export default ShowMoreLine;