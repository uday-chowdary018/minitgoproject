import Logo from "./logo";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaXTwitter, FaFacebook, FaSquareInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the button when the user scrolls down 200px from the top of the page
        function handleScroll() {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        // Attach the scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="p-3 " style={{ background: "#d9dfaf" }}></div>
            <footer className="footer">
                <div>
                    <Logo />
                </div>
                <div className="footer__content">
                    <div className="container my-5">
                        <div className="row">
                            {/* Column 1 - On larger screens, it will occupy 3 columns (col-lg-3), and on smaller screens, it will occupy 6 columns (col-md-6) */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
                                <h5 className="fs-5">Who We Are</h5>
                                <ul className="list-unstyled mb-0 text-center">
                                    <li>
                                        <Link
                                            to="/about"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/updates"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Updates
                                        </Link>
                                    </li>
                                    {/* Add more links here */}
                                </ul>
                            </div>

                            {/* Column 2 - On larger screens, it will occupy 3 columns (col-lg-3), and on smaller screens, it will occupy 6 columns (col-md-6) */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
                                <h5 className="fs-5">Follow Us</h5>
                                <ul className="list-unstyled mb-0 text-center">
                                    <li>
                                        <Link
                                            to="/instagram"
                                            className="text-black text-left text-decoration-none"
                                        >
                                          <FaSquareInstagram style={{ height: "1rem", width: "1rem" }} />  Instagram
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link
                                            to="/whatsapp"
                                            className="text-black text-left text-decoration-none"
                                        >
                                          <FaWhatsapp style= {{ height: "1rem", width: "1rem" }} />  WhatsApp
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/facebook"
                                            className="text-black text-left text-decoration-none"
                                        >
                                          <FaFacebook style={{ height: "1rem", width: "1rem" }} /> Facebook
                                        </Link>
                                    </li>
                                    {/* Add more links here */}
                                </ul>
                            </div>

                            {/* Column 3 - On larger screens, it will occupy 3 columns (col-lg-3) */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
                                <h5 className="fs-5">Connect With Us</h5>
                                <ul className="list-unstyled mb-0 text-center">
                                    <li>
                                        <Link
                                            to="/connect"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            How to Connect with Minitgo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/increase"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Increase your Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/partner"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Become a Partner
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 4 - On larger screens, it will occupy 3 columns (col-lg-3) */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
                                <h5 className="fs-5">We Help You</h5>
                                <ul className="list-unstyled mb-0 text-center">
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/returns"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Return's Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/feedback"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Feedback
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/help"
                                            className="text-black text-left text-decoration-none"
                                        >
                                            Help
                                        </Link>
                                    </li>
                                    {/* Add more links here */}
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <Link
                            to="/"
                            className="text-decoration-none text-dark fs-6"
                        >
                            Home
                        </Link>
                        <button
                            className="btn btn-light border-warning rounded-pill mx-3"
                            onClick={scrollToTop}
                        >
                            Back to top
                        </button>
                    </div>

                    {/* Copyright */}
                    <div className="text-center px-2 text-muted text-dark">
                        All rights reserved © 2023 MINITGO
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
