// src/pages/ChooseTopicsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ChooseTopicsPage = () => (
    <div>
        <h1>Choose Your Topics</h1>
        <p>Please select what content you would like to be tested on.</p>
        <table>
            <thead>
                <tr>
                    <th>Game Type</th>
                    <th>Join Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>All Content</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Math</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Algebra</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Advanced Math</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Problem Solving and Data Analysis</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Geometry and Trigonometry</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>All English</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Reading</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Writing</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
                <tr>
                    <td>Sentence Completion</td>
                    <td><a href="http://www.example.com">http://www.example.com</a></td>
                </tr>
            </tbody>
        </table>
        <Link to="/singleplayer">Back to Single Player</Link>
    </div>
);

export default ChooseTopicsPage;
