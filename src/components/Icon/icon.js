const Collapse = ({size}) => {
    return (
        <svg height={size} width={size} className="w-5 h-5 mr-3" fill="currentColor">
            <g>
                <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
            </g>
        </svg>
    )
}

const Logo = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 40 40" x="0px" y="0px" fill="currentColor">
            <g>
                <polygon points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" fill="#a970ff"></polygon>
                <polygon points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25" fill="#fff"></polygon>
                <g>
                    <path d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z" fill="#9147ff"></path>
                </g>
            </g>
        </svg>
    )
}

const More = ({size}) => {
    return (
        <svg fill="currentColor" height={size} width={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
            <g>
                <path d="M10 18a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM8 4a2 2 0 104 0 2 2 0 00-4 0z"></path>
            </g>
        </svg>
    )
}

const Prime = ({size}) => {
    return (
        <svg fill="currentColor" height={size} width={size} version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
            <g>
                <path d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path>
            </g>
        </svg>
    )
}

const Notification = ({size}) => {
    return (
        <svg fill="currentColor" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 ifdSJl">
            <g>
                <path d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 001 1h2a1 1 0 001-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0111 11H9a3.001 3.001 0 01-2.83-2H4v6h12V9z"></path>
            </g>
        </svg>
    )
}

const Whisper = ({size}) => {
    return (
        <svg fill="currentColor" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1bgeryd-1 ifdSJl">
            <g>
                <path d="M7.828 13L10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2l-3 3z"></path>
            </g>
        </svg>
    )
}




const Icon = ({ name, size = 24}) => {
    const Icons = {
        collapse: Collapse,
        logo: Logo,
        more: More,
        prime: Prime,
        notification: Notification,
        whisper: Whisper
    }

    const Component = Icons[name];

    return <Component size={size} />
}

export {
    Icon
}