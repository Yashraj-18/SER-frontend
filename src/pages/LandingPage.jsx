import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { Mic, BarChart2, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';

const LandingPage = ({ isAuthenticated, navigate }) => (
    <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Transform Customer Experience with Emotion AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Understand customer emotions in real-time and enhance your call center performance
            </p>
            <Button
                className="text-lg px-8 py-6"
                onClick={() => navigate(isAuthenticated ? 'record' : 'login')}
            >
                Get Started
            </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
                icon={<Mic className="w-8 h-8 text-blue-500" />}
                title="Real-time Analysis"
                description="Process customer emotions during calls for immediate insights"
            />
            <FeatureCard
                icon={<BarChart2 className="w-8 h-8 text-blue-500" />}
                title="Detailed Analytics"
                description="Track emotional patterns and customer satisfaction trends"
            />
            <FeatureCard
                icon={<Phone className="w-8 h-8 text-blue-500" />}
                title="Call Center Integration"
                description="Seamlessly integrate with your existing call center infrastructure"
            />
        </div>
    </div>
);

export default LandingPage;
