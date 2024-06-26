import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <React.Fragment>
            <div className={`nav-container ${visible ? "visible" : "hidden"}`}>
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li
                                className={
                                    active === "home"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className={
                                    active === "about"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/about">About</Link>
                            </li>
                            <li
                                className={
                                    active === "projects"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li
                                className={
                                    active === "games"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/games">Games</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <span
                                    className={
                                        active === "algorithms"
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Algorithms
                                </span>
                                <div className="dropdown-content">
                                    <Link to="/selectionsort">Selection Sort</Link>
                                    <Link to="/bubblesort">Bubble Sort</Link>
                                    <Link to="/mergesort">Merge Sort</Link>
                                    <Link to="/quicksort">Quick Sort</Link>
                                </div>
                            </li>
                            <li
                                className={
                                    active === "contact"
                                        ? "nav-item active"
                                        : "nav-item"
                                }
                            >
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
