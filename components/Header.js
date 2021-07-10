import Link from 'next/link'
import { Component } from 'react'
import styles from '../styles/Header.module.scss'

export default class Header extends Component {
    render () {
        return (
            <div className={styles.header}>
                <Link href="/" passHref={ true }>
                    <svg
                        viewBox="0 0 222 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.logo}
                    >
                        <g clipPath="url(#clip0)">
                            <path d="M49.1667 4.16666C37.2319 4.16666 25.786 8.90771 17.3469 17.3469C8.90773 25.786 4.16667 37.2319 4.16667 49.1667C4.16667 61.1014 8.90773 72.5473 17.3469 80.9865C25.786 89.4256 37.2319 94.1667 49.1667 94.1667C61.1014 94.1667 72.5473 89.4256 80.9865 80.9865C89.4256 72.5473 94.1667 61.1014 94.1667 49.1667C94.1667 37.2319 89.4256 25.786 80.9865 17.3469C72.5473 8.90771 61.1014 4.16666 49.1667 4.16666V4.16666ZM66.4667 63.9167C66.4667 71.2667 62.4667 80.4167 46.1667 87.4167C47.6667 66.5667 33.5667 68.9667 30.1667 62.4167C30.4763 59.7069 31.463 57.1187 33.0359 54.8905C34.6087 52.6623 36.7171 50.8659 39.1667 49.6667C31.4075 48.3358 24.1713 44.8735 18.2667 39.6667C18.5167 42.0167 19.6617 44.1867 21.4667 45.7167C17.5562 44.2427 14.1775 41.6302 11.7667 38.2167C14.1505 30.3487 18.9183 23.4148 25.4116 18.3724C31.9048 13.33 39.8034 10.4279 48.0167 10.0667C43.8167 16.9667 40.5167 30.7167 48.0167 37.9167C40.3167 39.1667 35.4667 29.1667 31.2167 33.1167C25.5667 38.4167 32.8667 45.6667 48.3167 48.5167C64.7667 51.4667 66.6167 56.4167 66.4667 63.9167ZM73.1667 43.9167C71.5667 38.3667 76.2667 32.7667 81.6167 28.2167C84.9578 33.0328 87.0847 38.5854 87.816 44.4012C88.5474 50.2169 87.8614 56.1233 85.8167 61.6167C81.9667 52.1667 74.9667 50.0167 73.1667 43.7667V43.9167Z" fill="#008000"/>
                            <path d="M161.297 54.3516H138.797V69.5859H165.203V79H127.078V22.125H165.125V31.6172H138.797V45.1719H161.297V54.3516ZM198.289 79H187V35.4844L173.523 39.6641V30.4844L197.078 22.0469H198.289V79Z" fill="#008000"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                            <rect width="222" height="100" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </Link>
                <div className={ styles.link }>

                </div>
            </div>
        )
    }
}