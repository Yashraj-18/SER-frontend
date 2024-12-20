import React from 'react';
import { Card, CardContent } from './ui/Card';

const FeatureCard = ({ icon, title, description }) => (
    <Card>
        <CardContent className="text-center p-6">
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

export default FeatureCard;
