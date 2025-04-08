'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/testimonials';



export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000); // Change testimonial every 5 seconds
        }

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Student Testimonials
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear from our students about their journey at Vydehi Institute
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg p-8"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-32 h-32 relative rounded-full overflow-hidden">
                                    <Image
                                        src={testimonials[currentIndex].imageUrl}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-gray-700 text-lg italic mb-4">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        {testimonials[currentIndex].name}
                                    </h3>
                                    <p className="text-gray-600">
                                        {testimonials[currentIndex].batch},
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 