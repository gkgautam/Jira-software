import React from 'react'
import Link from "next/link"
import atlas from '../public/jiraImages/atlas.svg';
import avatar from '../public/jiraImages/avatar.svg';
import LandingImg1 from '../public/jiraImages/landingimg1.jpg';
import Image from 'next/image';
function LandingPage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div className="container-fluid">
                    <Link className="navbar-brand cursor-pointer" href={'/'}>
                        <Image src={atlas} alt="atlassian logo" width={250} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" disabled style={{ cursor: "not-allowed" }} aria-current="page" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" disabled style={{ cursor: "not-allowed" }} href="#">For teams</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" disabled style={{ cursor: "not-allowed" }} href="#">Support</a>
                            </li>

                        </ul>
                        <ul className="navbar-nav d-flex gap-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button type="button" style={{ cursor: "not-allowed" }} className="btn btn-primary">Try now</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" style={{ cursor: "not-allowed" }} className="btn btn-outline-secondary">Buy Now</button>
                            </li>
                            <li className="nav-item">
                                <div className='d-flex'>
                                    <Link href={'/login'}>
                                        <button type="button" className="btn btn-primary d-flex">
                                            <Image src={avatar} alt="avatar logo" width={20} height={20} />
                                            Login</button>
                                    </Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container m-0'>
                <div className='row'>
                    <div className='col-5 ps-5 text-center align-items-center d-flex flex-column justify-content-end'>
                        <h1 className=''>Its Possible</h1>
                        <h1 className=''>with teamwork</h1>
                    </div>
                    <div className='col-7'>
                        <Image src={LandingImg1} alt="homepage image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage