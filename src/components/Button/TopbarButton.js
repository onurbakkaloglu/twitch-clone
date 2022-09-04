function TopbarButton({svg}) {
    return (
        <button className="hover:bg-toparIconHover rounded-md ml-4">
            <div className="w-7 h-7 p-1">
                {svg}
            </div>
        </button>
    );
}

export default TopbarButton;