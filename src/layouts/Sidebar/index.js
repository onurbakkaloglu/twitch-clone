import { Icon } from "components/Icon/icon";

import { generateUIID } from "utils/generateUUID";
import { numberToViewer } from "utils/numberToViewer";

function Sidebar() {

    const users = [
        {
            id: generateUIID,
            username: 'wtcN',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png',
            category: 'Sadece Sohbet',
            viewers: 7700,
            isOnline: true
        },
        {
            id: generateUIID(),
            username: 'wtcN',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png',
            category: 'Sadece Sohbet',
            viewers: 7700,
            isOnline: true
        },
        {
            id: generateUIID(),
            username: 'wtcN',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png',
            category: 'Sadece Sohbet',
            viewers: 7700,
            isOnline: true
        },
        {
            id: generateUIID(),
            username: 'wtcN',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png',
            category: 'Sadece Sohbet',
            viewers: 7700,
            isOnline: true
        },
        {
            id: generateUIID(),
            username: 'wtcN',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png',
            category: 'Sadece Sohbet',
            viewers: 7700,
            isOnline: true
        },
        {
            id: generateUIID(),
            username: 'wtcN',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/28b40271-8bb1-4a27-9ad7-8e9a55e06180-profile_image-70x70.png',
            category: 'Sadece Sohbet',
            viewers: 7700,
            isOnline: true
        }
    ]

    return (
        <aside className="w-60 flex flex-shrink-0 flex-col bg-sidebar pl-2 pt-2">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm">RECOMMENDED CHANNELS</h2>
                <Icon name={'collapse'} />
            </div>

            {
                users.map(user => (
                    <div key={user.id}>
                        <a href="#" className="flex items-center hover:bg-channelHover py-1">
                            <div className="w-10 h-8 relative bg-inherit">
                                <img className="w-full rounded-full" src={user.avatar} alt={user.username} />
                            </div>
                            <div className="w-full flex items-center justify-between px-2">
                                <div>
                                    <div>
                                        <p>{user.username}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs opacity-70">{user.category}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-activeStatusIndicator w-3 h-3 rounded-full inline-block relative"></div>
                                    <div className="ml-2">
                                        <span className="text-sm">{numberToViewer(user.viewers)}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }

            <div>
            <button className="no-underline text-showMore text-sm mt-3">
                <span>Show more</span>
            </button>
            </div>

        </aside>
    );
}

export default Sidebar;