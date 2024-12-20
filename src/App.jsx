import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RecordingPage from './pages/RecordingPage';
import ResultsPage from './pages/ResultsPage';
import NavigationBar from './components/NavigationBar';

const App = () => {
    const [currentPage, setCurrentPage] = useState('landing');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = (page) => setCurrentPage(page);

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('landing');
    };

    const renderPage = () => {
        if (!isAuthenticated && ['record', 'dashboard', 'results'].includes(currentPage)) {
            return <LoginPage setIsAuthenticated={setIsAuthenticated} navigate={navigate} />;
        }

        switch (currentPage) {
            case 'login':
                return <LoginPage setIsAuthenticated={setIsAuthenticated} navigate={navigate} />;
            case 'signup':
                return <SignupPage setIsAuthenticated={setIsAuthenticated} navigate={navigate} />;
            case 'record':
                return <RecordingPage navigate={navigate} />;
            case 'results':
                return <ResultsPage />;
            default:
                return <LandingPage isAuthenticated={isAuthenticated} navigate={navigate} />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <NavigationBar
                navigate={navigate}
                isAuthenticated={isAuthenticated}
                handleLogout={handleLogout}
            />
            {renderPage()}
        </div>
    );
};

export default App;
