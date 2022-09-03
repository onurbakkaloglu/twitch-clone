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

const Icon = ({ name, size = 24}) => {
    const Icons = {
        collapse: Collapse,
        logo: Logo
    }

    const Component = Icons[name];

    return <Component size={size} />
}

export {
    Icon
}