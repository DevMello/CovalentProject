"use client";

import React, { useEffect, useRef } from 'react';
import { ScrollText } from './scroll-text';

export function ScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const {bottom, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate the raw progress value
            const progress = Math.max(0, Math.min(1, (bottom - windowHeight) / (height - windowHeight * 0.5)));

            // Stretch the initial part of the scroll
            // progress = progress < 0.2 ? progress / 2 : 0.1 + (progress - 0.2) * 0.8;

            setScrollProgress(progress);
        };



        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <ScrollText threshold={0.1} progress={scrollProgress}>
                            Many undergraduate students
                        </ScrollText>
                        <ScrollText threshold={0.2} progress={scrollProgress}>
                            struggle to help for their projects.
                        </ScrollText>
                        <ScrollText threshold={0.4} progress={scrollProgress}>
                            With Covalent, you can easily
                        </ScrollText>
                        <ScrollText threshold={0.5} progress={scrollProgress}>
                            find mentors and resources
                        </ScrollText>
                        <ScrollText threshold={0.6} progress={scrollProgress}>
                            to kickstart your research projects.
                        </ScrollText>
                        <ScrollText threshold={0.7} progress={scrollProgress}>
                            We make research accessible.
                        </ScrollText>

                    </div>
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"
                    style={{
                        maskImage: 'radial-gradient(circle at center, transparent, black)'
                    }}
                />
            </div>
        </section>
    );
}