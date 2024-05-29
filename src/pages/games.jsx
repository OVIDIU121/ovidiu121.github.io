import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from 'react-bootstrap';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/algorithms.css";

import GamesList from "../components/games/GamesList"; // Assuming you have a GamesList component

const GamesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "games");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Games | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="games" />
                <div className="content-wrapper">
                    <div className="algorithms-logo-container">
                        <div className="algorithms-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="algorithms-container">
                        <div className="title algorithms-title">
                            Games Developed with Unity
                        </div>

                        <div className="subtitle algorithms-subtitle">
                            Check out these games developed with Unity.
                        </div>

                        <br />

                        <div className="algorithms-list">
                            <GamesList />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GamesPage;
