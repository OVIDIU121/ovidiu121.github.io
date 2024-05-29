import React, { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';

const games = [
    {
        title: "Clicky Crates",
        url: "https://i.simmer.io/@OvidiuDinica/clicky-crates",
        description: "Select the desired difficulty of the game and gain points by clicking the crates. You lose points by clicking the skulls."
    },
    {
        title: "Jumping Farmer",
        url: "https://i.simmer.io/@OvidiuDinica/jumpingfarmer",
        description: "Jump over as many obstacles as possible to earn points, the game ends when you fail to jump over it!"
    },

    // Add more games here if needed
];

const GamesList = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const handleGameClick = (gameIndex) => {
        setSelectedGame(gameIndex);
    };

    return (
        <Row>
            {games.map((game, index) => (
                <Col key={index} md={12} lg={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title className="text-center">{game.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-center align-items-center">
                            {selectedGame === index ? (
                                <iframe
                                    title={game.title}
                                    src={game.url}
                                    width="100%"
                                    height="600px"
                                    frameBorder=""
                                    allow="fullscreen; accelerometer; gyroscope; vr"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={`https://via.placeholder.com/600x400?text=${game.title}`}
                                    alt={game.title}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleGameClick(index)}
                                />
                            )}
                        </Card.Footer>
                        <Card.Text className="text-center">
                            {game.description}
                        </Card.Text>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default GamesList;
