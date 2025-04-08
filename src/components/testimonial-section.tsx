"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { testimonials, TestimonialProps } from "@/lib/testimonials"

export function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === testimonials.length - 1) {
                    setDirection(-1);
                    return prevIndex - 1;
                }
                if (prevIndex === 0) {
                    setDirection(1);
                    return prevIndex + 1;
                }
                return prevIndex + direction;
            });
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(timer);
    }, [direction]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12"
                >
                    Students Testimonial
                </motion.h2>

                <div className="relative h-[500px] md:h-[400px] overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full"
                        >
                            <TestimonialCard testimonial={testimonials[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex-1">
                    <blockquote className="text-gray-700 text-lg italic mb-4">
                        "{testimonial.content}"
                    </blockquote>
                    <div className="text-right">
                        <cite className="not-italic">
                            <div className="font-bold text-blue-600">{testimonial.name}</div>
                            <div className="text-gray-600 text-sm">{testimonial.batch}</div>
                        </cite>
                    </div>
                </div>
            </div>
        </div>
    );
} 