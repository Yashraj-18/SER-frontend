import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const ResultsPage = () => {
    const emotionResults = {
        primaryEmotion: 'Satisfied',
        confidence: 85,
        emotionBreakdown: {
            happy: 65,
            neutral: 20,
            frustrated: 10,
            angry: 5,
        },
        duration: '2:34',
        timestamp: new Date().toLocaleString(),
    };

    return (
        <div className="max-w-4xl mx-auto mt-16 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Emotion Analysis Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Primary Emotion</h3>
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                {emotionResults.primaryEmotion}
                            </div>
                            <div className="text-gray-600">
                                Confidence: {emotionResults.confidence}%
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Emotion Breakdown</h3>
                            <div className="space-y-2">
                                {Object.entries(emotionResults.emotionBreakdown).map(([emotion, value]) => (
                                    <div key={emotion} className="flex items-center">
                                        <div className="w-24 capitalize">{emotion}</div>
                                        <div className="flex-1">
                                            <div className="bg-gray-200 h-4 rounded-full">
                                                <div
                                                    className="bg-blue-600 h-4 rounded-full"
                                                    style={{ width: `${value}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-12 text-right">{value}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button onClick={() => window.print()}>Export Report</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResultsPage;
