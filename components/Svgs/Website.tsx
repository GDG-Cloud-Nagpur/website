export function WebsiteSVG({className}: {className?: string}) {
    return (
        <svg
            className={className}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8H15M8 12H16M9 8H7C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16H9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
