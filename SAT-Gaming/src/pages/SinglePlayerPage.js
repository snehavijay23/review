// src/pages/SinglePlayerPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const SinglePlayerPage = () => (
    <div>
        <h1>Single Player Mode</h1>
        <Link to="/choose-topics">Choose Your Topics</Link>
        <Link to="/options">Back to Options</Link>
    </div>
);

export default SinglePlayerPage;
