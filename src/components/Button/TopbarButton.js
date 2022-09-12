import { Icon } from "components/Icon/icon";

function TopbarButton({ svg }) {
    return (
        <button className="hover:bg-topbarIconHover rounded-md ml-4">
            <div className="w-[2rem] h-[1.85rem] p-1">
                <Icon name={svg} />
            </div>
        </button>
    );
}

export default TopbarButton;