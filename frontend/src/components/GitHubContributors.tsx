// components/GitHubContributors.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface Contributor {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    contributions: number;
}

export default function GitHubContributors() {
    const [contributors, setContributors] = useState<Contributor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 5; // Number of contributors to show at once

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const response = await fetch(
                    'https://api.github.com/repos/Mahaveer1013/Hunger_bridge/contributors'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch contributors');
                }
                const data = await response.json();
                setContributors(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchContributors();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev + slidesToShow >= contributors.length ? 0 : prev + slidesToShow
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev - slidesToShow < 0 ?
                Math.max(0, contributors.length - slidesToShow) :
                prev - slidesToShow
        );
    };

    if (loading) {
        return (
            <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500 py-8">Error: {error}</div>;
    }

    if (contributors.length === 0) {
        return <div className="text-center text-gray-500 py-8">No contributors found</div>;
    }

    return (
        <div className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                    Our Amazing Contributors
                </h2>
                <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">
                    These wonderful people have helped make Hunger Bridge better through their contributions.
                </p>

                {/* Slider Controls */}
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        aria-label="Previous contributors"
                    >
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>

                    <div className="relative w-full mx-4 overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
                        >
                            {contributors.map((contributor) => (
                                <div
                                    key={contributor.id}
                                    className="flex-shrink-0 px-2"
                                    style={{ width: `${100 / slidesToShow}%` }}
                                >
                                    <a
                                        href={contributor.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center hover:scale-105 transition-transform"
                                    >
                                        <div className="relative w-20 h-20 mb-3">
                                            <Image
                                                src={contributor.avatar_url}
                                                alt={contributor.login}
                                                fill
                                                className="rounded-full border-2 border-blue-200 object-cover"
                                                sizes="80px"
                                            />
                                        </div>
                                        <h3 className="font-medium text-blue-800 text-center">
                                            {contributor.login}
                                        </h3>
                                        <p className="text-sm text-blue-500">
                                            {contributor.contributions} {contributor.contributions === 1 ? 'contribution' : 'contributions'}
                                        </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                        aria-label="Next contributors"
                    >
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Contribution Guidelines */}
                <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                        Want to join our contributors?
                    </h3>
                    <p className="text-blue-700 mb-6 text-center max-w-2xl mx-auto">
                        We welcome all contributions to make Hunger Bridge better! Here's how you can get involved:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                            <div className="text-blue-600 font-bold mb-2">1. Report Issues</div>
                            <p className="text-blue-700">
                                Found a bug or have a feature request? Open an issue on GitHub to let us know.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                            <div className="text-blue-600 font-bold mb-2">2. Code Contributions</div>
                            <p className="text-blue-700">
                                Fork the repository, make your changes, and submit a pull request.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                            <div className="text-blue-600 font-bold mb-2">3. Documentation</div>
                            <p className="text-blue-700">
                                Help improve our docs, tutorials, or translate content.
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href="https://github.com/Mahaveer1013/Hunger_bridge/blob/main/CONTRIBUTING.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Read Full Contribution Guidelines
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Mahaveer1013/Hunger_bridge/graphs/contributors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                    >
                        View All Contributors on GitHub
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>
            </div>
        </div>
    );
}
