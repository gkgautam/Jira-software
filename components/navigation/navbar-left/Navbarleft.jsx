import React from 'react'
import { BsSearch } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from 'next/image';
import profileimg from '../../../public/jiraImages/profile.jpg';
import styles from './Navbarleft.module.scss';
function Navbarleft() {
    return (
        <>
            <div className='navbarLeft col-3 row d-flex' style={{ "backgroundColor": "#003e99", "color": "white", "height": "100vh","paddingRight":"0","justifyContent":"center" }}>
                <div className={`jiralogo-icon ${styles.icon}`} width={50}>
                    <svg class="w-8 h-8 text-textLogo"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <defs>
                            <linearGradient x1="108.695%"
                                x2="12.439%"
                                y1="-14.936%"
                                y2="45.215%"
                                id="uid11-1">
                                <stop stop-color="#DEEBFF"
                                    stop-opacity="0.4"
                                    offset="0%"></stop>
                                <stop stop-color="#DEEBFF"
                                    offset="100%"></stop>
                            </linearGradient>
                            <linearGradient x1="0%"
                                x2="91.029%"
                                y1="118.55%"
                                y2="63.971%"
                                id="uid11-2">
                                <stop stop-color="#DEEBFF"
                                    stop-opacity="0.4"
                                    offset="0%"></stop>
                                <stop stop-color="#DEEBFF"
                                    offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <path d="M15.967 29.362a6.675 6.675 0 0 0 0-9.442l-8.699-8.671-3.957 3.957a1.062 1.062 0 0 0 0 1.5l12.656 12.656zm12.656-14.156L15.967 2.55l-.039.039a6.675 6.675 0 0 0 .028 9.41l8.706 8.667 3.96-3.96a1.062 1.062 0 0 0 0-1.5z"
                                fill="currentColor"></path>
                            <path d="M15.967 11.992a6.675 6.675 0 0 1-.028-9.41L6.91 11.606l4.72 4.721 4.336-4.335z"
                                fill="url(#uid11-1"></path>
                            <path d="M20.295 15.591l-4.328 4.329a6.675 6.675 0 0 1 0 9.442l9.05-9.05-4.722-4.72z"
                                fill="url(#uid11-2"></path>
                        </g>
                    </svg>
                </div>

                <div className={`search-icon ${styles.icon}`}>
                    <BsSearch  />
                </div>
                <div className={`create-icon ${styles.icon}`}>
                    <FiPlus />
                </div>
                <div className={`profile-image ${styles.icon}`} >
                    <Image src={profileimg} alt="profile-image" style={{ "borderRadius": "50%" }} />
                </div>

                <div className={`search-icon ${styles.icon}`}>
                    <FaRegQuestionCircle />
                </div>
            </div>
        </>
    )
}

export default Navbarleft