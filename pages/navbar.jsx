import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import styles from "../styles/Navbar.module.css"


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    {/* //* navbar brand */}

                    <a className={`navbar-brand ${styles.brand}`} href="#">IsH</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.linkparent}`}>
                            <Link href='/about' passHref>
                                <li className={`nav-item ${styles.home}`}>
                                    About Us
                                </li>
                            </Link>

                            <Link href='/about' passHref>
                                <li className={`nav-item ${styles.home}`}>
                                    About Us
                                </li>
                            </Link>

                            <Link href='/about' passHref>
                                <li className={`nav-item ${styles.home}`}>
                                    About Us
                                </li>
                            </Link>



                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar