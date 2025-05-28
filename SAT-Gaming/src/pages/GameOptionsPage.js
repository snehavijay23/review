// src/pages/GameOptionsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const GameOptionsPage = () => (
    <div>
        <h1>SAT Game Options</h1>
        <div>
            <Link to="/singleplayer">
                <button>Single Player</button>
            </Link>
            <Link to="/multiplayer">
                <button>Multiplayer</button>
            </Link>
        </div>
        <Link to="/">Back to Login</Link>
    </div>
);

export default GameOptionsPage;
