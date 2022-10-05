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
            <div className='navbarLeft col-3 d-flex flex-column justify-content-between py-3 px-0' style={{ "backgroundColor": "rgb(7 71 166)", "color": "white","justifyContent":"center","gap":"289px","width":"64px" }}>
            <div className='upper-icons d-flex flex-column align-items-center pe-0'>
                <div className={`jiralogo-icon ${styles.icon}`} >
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
                    {/* <BsSearch  /> */}
                    <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="20px" height="20px" data-icon="search" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                </div>
                <div className={`create-icon ${styles.icon}`}>
                    {/* <FiPlus /> */}
                    <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="20px" height="20px" data-icon="plus" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg>
                </div>
                </div>
                <div className='lower-icons d-flex flex-column align-items-center pe-0'>
                <div className={`profile-image ${styles.icon}`} >
                    <Image src={profileimg} alt="profile-image" style={{ "borderRadius": "50%" }} />
                </div>

                <div className={`search-icon ${styles.icon}`}>
                    {/* <FaRegQuestionCircle /> */}
                    <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="20px" height="20px" data-icon="question-circle" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"></path></svg>
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbarleft