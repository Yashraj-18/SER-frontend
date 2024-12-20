import React from 'react';

export const Alert = ({ children, className }) => (
    <div className={`bg-yellow-50 border-l-4 border-yellow-400 p-4 ${className}`}>
        {children}
    </div>
);

export const AlertDescription = ({ children, className }) => (
    <p className={`text-yellow-700 ${className}`}>{children}</p>
);
