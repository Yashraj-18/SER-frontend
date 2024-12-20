import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Alert, AlertDescription } from '../components/ui/Alert';
import { Mic, PauseCircle } from 'lucide-react';

const RecordingPage = ({ navigate }) => {
    const [isRecording, setIsRecording] = useState(false);

    const handleToggleRecording = () => {
        if (!isRecording) {
            setIsRecording(true);
        } else {
            setIsRecording(false);
            navigate('results');
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-16 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Voice Recording</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <div className="mb-8">
                        <Button
                            size="lg"
                            onClick={handleToggleRecording}
                            className={`rounded-full p-8 ${isRecording ? 'bg-red-500 hover:bg-red-600' : ''}`}
                        >
                            {isRecording ? (
                                <PauseCircle className="w-12 h-12" />
                            ) : (
                                <Mic className="w-12 h-12" />
                            )}
                        </Button>
                        <p className="mt-4 text-lg">
                            {isRecording ? 'Stop Recording' : 'Start Recording'}
                        </p>
                    </div>
                    {isRecording && (
                        <Alert>
                            <AlertDescription>
                                Recording in progress... Click the button to stop and analyze.
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default RecordingPage;
