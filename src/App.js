import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const App = () => {
    const [isAuth, setAuth] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setAuth={setAuth} />} />
                <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
