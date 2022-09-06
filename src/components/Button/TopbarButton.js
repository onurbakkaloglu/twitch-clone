import { Icon } from "components/Icon/icon";

function TopbarButton({ svg }) {
    return (
        <button className="hover:bg-topbarIconHover rounded-md ml-4">
            <div className="w-7 h-7 p-1">
                <Icon name={svg} />
            </div>
        </button>
    );
}

export default TopbarButton;