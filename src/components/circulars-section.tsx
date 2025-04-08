"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, FileText } from "lucide-react"
import { CircularProps, circulars } from "@/lib/circulars"



export function CircularsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

    // Handle responsive visible card count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1)
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2)
            } else {
                setVisibleCount(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const maxIndex = Math.max(0, circulars.length - visibleCount)

    // Auto scroll functionality
    useEffect(() => {
        if (isPaused) return

        const startAutoScroll = () => {
            autoScrollIntervalRef.current = setInterval(() => {
                setCurrentIndex(prevIndex => {
                    if (prevIndex >= maxIndex) {
                        return 0
                    }
                    return prevIndex + 1
                })
            }, 4000) // Change slide every 4 seconds
        }

        startAutoScroll()

        return () => {
            if (autoScrollIntervalRef.current) {
                clearInterval(autoScrollIntervalRef.current)
            }
        }
    }, [maxIndex, isPaused])

    const goToNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    }

    const goToPrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    const handleMouseEnter = () => {
        setIsPaused(true)
    }

    const handleMouseLeave = () => {
        setIsPaused(false)
    }

    return (
        <section className="py-16 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center text-primary mb-12"
                >
                    Circulars
                </motion.h2>

                {/* Circulars Carousel */}
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        className={`absolute top-1/2 left-2 -translate-y-1/2 z-10 
              ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-75'} focus:outline-none`}
                        aria-label="Previous circular"
                    >
                        <ChevronLeft className="h-8 w-8 text-black" />
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={containerRef}
                        className="overflow-hidden relative w-full px-4"
                    >
                        <motion.div
                            className="flex transition-all duration-500"
                            initial={{ x: 0 }}
                            animate={{
                                x: `-${(currentIndex * 100) / visibleCount}%`
                            }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        >
                            {circulars.map((circular) => (
                                <motion.div
                                    key={circular.id}
                                    className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * circular.id }}
                                >
                                    <CircularCard circular={circular} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <button
                        onClick={goToNext}
                        disabled={currentIndex >= maxIndex}
                        className={`absolute top-1/2 right-2 -translate-y-1/2 z-10
              ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-75'} focus:outline-none`}
                        aria-label="Next circular"
                    >
                        <ChevronRight className="h-8 w-8 text-black" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function CircularCard({ circular }: { circular: CircularProps }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="border border-blue-200 rounded-lg h-full flex flex-col items-start hover:shadow-md transition-shadow duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className=" flex flex-col h-full w-full">
                <div className="w-64 h-28 relative mb-6 ">
                    <Image
                        src={circular.imageUrl}
                        alt={circular.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-8">

                    <h3 className="text-lg text-gray-700 font-medium mb-3">{circular.title}</h3>
                    <p className="text-blue-600 font-medium mb-6">{circular.type}</p>

                    <div className="mt-auto">
                        <a
                            href={circular.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium inline-flex items-center"
                        >
                            <motion.span
                                animate={{
                                    x: isHovered ? 5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center"
                            >
                                Click to know more
                                <FileText className="ml-2 h-4 w-4" />
                            </motion.span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 