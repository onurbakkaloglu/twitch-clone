function SelectorCard({selector}) {
    return (
        <div>
            <div className="border-2 border-transparent rounded-xl p-1">
                <div className="text-white bg-selectorCardBg hover:bg-selectorCardBgHover rounded-lg">
                    <a className="no-underline">
                        <div className="h-11 flex items-center justify-between">
                            <div className="h-full flex items-center px-4 ml-2">
                                <p className="text-xl font-bold">{selector.name}</p>
                            </div>
                            <div className="mr-4">
                                <img className="max-w-full align-top" src={selector.imgSrc} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SelectorCard;