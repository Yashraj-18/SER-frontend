import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const LoginPage = ({ setIsAuthenticated, navigate }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuthenticated(true);
        navigate('record');
    };

    return (
        <div className="max-w-md mx-auto mt-16 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Login to EmotionSense</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                    <p className="text-center mt-4">
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('signup')}
                            className="text-blue-600 hover:underline"
                        >
                            Sign up
                        </button>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoginPage;
