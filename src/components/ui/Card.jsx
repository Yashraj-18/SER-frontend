import React from 'react';

export const Card = ({ children, className }) => (
    <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
    <div className="border-b px-4 py-2">{children}</div>
);

export const CardTitle = ({ children, className }) => (
    <h2 className={`font-semibold text-lg ${className}`}>{children}</h2>
);

export const CardContent = ({ children, className }) => (
    <div className={`px-4 py-2 ${className}`}>{children}</div>
);
