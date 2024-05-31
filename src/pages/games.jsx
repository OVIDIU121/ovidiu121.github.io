import React, { useEffect } from "react";
import { Helmet , HelmetProvider} from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/games.css";


import GamesList from "../components/games/GamesList"; // Assuming you have a GamesList component

const GamesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "games");

    return (
        <React.Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>{`Games | ${INFO.main.title}`}</title>
                    <meta name="description" content={currentSEO.description} />
                    <meta
                        name="keywords"
                        content={currentSEO.keywords.join(", ")}
                    />
                </Helmet>
            </HelmetProvider>

            <div className="page-content">
                <NavBar active="games" />
                <div className="content-wrapper">
                    <div className="games-logo-container">
                        <div className="games-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="games-container">
                        <div className="title games-title">
                            Games Developed with Unity
                        </div>

                        <div className="subtitle games-subtitle">
                            Check out these games developed with Unity.
                        </div>

                        <br />

                        <div className="games-list">
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
