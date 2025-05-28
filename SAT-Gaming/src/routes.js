// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GameOptionsPage from './pages/GameOptionsPage';
import SinglePlayerPage from './pages/SinglePlayerPage';
import MultiPlayerPage from './pages/MultiPlayerPage';
import ChooseTopicsPage from './pages/ChooseTopicsPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/options" element={<GameOptionsPage />} />
            <Route path="/singleplayer" element={<SinglePlayerPage />} />
            <Route path="/multiplayer" element={<MultiPlayerPage />} />
            <Route path="/choose-topics" element={<ChooseTopicsPage />} />
        </Routes>
    </Router>
);
export default AppRoutes;
