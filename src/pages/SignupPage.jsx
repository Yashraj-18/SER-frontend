import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const SignupPage = ({ setIsAuthenticated, navigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSignup = (e) => {
        e.preventDefault();
        setIsAuthenticated(true);
        navigate('record');
    };

    return (
        <div className="max-w-md mx-auto mt-16 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Create Account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignup} className="space-y-4">
                        <Input
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
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
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />
                        <Button type="submit" className="w-full">Sign Up</Button>
                    </form>
                    <p className="text-center mt-4">
                        Already have an account?{' '}
                        <button
                            onClick={() => navigate('login')}
                            className="text-blue-600 hover:underline"
                        >
                            Login
                        </button>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignupPage;
