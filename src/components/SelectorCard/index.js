function SelectorCard() {
    return (
        <div className="grid grid-cols-5">
            <div className="border-2 border-transparent rounded-xl p-1">
                <div className="text-white bg-selectorCardBg hover:bg-selectorCardBgHover rounded-lg">
                    <a className="no-underline">
                        <div className="h-11 flex items-center justify-between">
                            <div className="h-full flex items-center px-4 ml-2">
                                <p className="text-xl font-bold">Games</p>
                            </div>
                            <div className="mr-4">
                                <img className="max-w-full align-top" src="https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SelectorCard;