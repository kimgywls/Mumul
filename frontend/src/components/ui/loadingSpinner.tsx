import React from 'react';
import { LoadingSpinnerProps } from '@/types/components';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    color = 'indigo-500',
    text
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`${sizeClasses[size]} border-4 border-${color} border-t-transparent rounded-full animate-spin`}></div>
            {text && (
                <p className="mt-2 text-sm text-gray-600">{text}</p>
            )}
        </div>
    );
};

export default LoadingSpinner; 