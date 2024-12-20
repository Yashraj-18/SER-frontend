import React from 'react';
import { Button } from './ui/Button';

const NavigationBar = ({ navigate, isAuthenticated, handleLogout }) => (
    <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <button
                onClick={() => navigate('landing')}
                className="text-xl font-bold text-blue-600"
            >
                EmotionSense AI
            </button>
            {isAuthenticated && (
                <div className="space-x-4">
                    <button onClick={() => navigate('record')} className="text-gray-600 hover:text-blue-600">
                        Record
                    </button>
                    <button onClick={() => navigate('dashboard')} className="text-gray-600 hover:text-blue-600">
                        Dashboard
                    </button>
                    <Button variant="outline" onClick={handleLogout}>Logout</Button>
                </div>
            )}
        </div>
    </nav>
);

export default NavigationBar;
