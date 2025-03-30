"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollTextProps {
    children: React.ReactNode;
    threshold: number;
    progress: number;
}

export function ScrollText({ children, threshold, progress }: ScrollTextProps) {
    const isVisible = progress >= threshold;

    return (
        <div
            className={cn(
                "transition-all duration-1000 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            )}
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                {children}
            </h2>
        </div>
    );
}