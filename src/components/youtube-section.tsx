"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Play } from "lucide-react"

export function YouTubeSection() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [iframeLoaded, setIframeLoaded] = useState(false)
    const videoRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

    // Auto-play when section comes into view
    useEffect(() => {
        if (isInView && !isPlaying) {
            setIsPlaying(true)
        }
    }, [isInView, isPlaying])

    const handlePlayClick = () => {
        setIsPlaying(true)
    }

    return (
        <section className="relative w-full" ref={sectionRef}>
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center py-10 bg-primary text-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Our Video</h2>
                    <p className="max-w-2xl mx-auto">
                        Learn more about our institute, programs, and facilities through our video presentation.
                    </p>
                </div>
            </motion.div>

            {/* Video Container - Full Width */}
            <div className="w-full">
                <div className="relative w-full" style={{ height: "80vh" }} ref={videoRef}>
                    {!isPlaying ? (
                        <div className="absolute inset-0 bg-black">
                            {/* Video thumbnail */}
                            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg"
                                    onClick={handlePlayClick}
                                    aria-label="Play video"
                                >
                                    <Play size={44} className="ml-2" />
                                </motion.button>
                            </div>
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://i.ytimg.com/vi/Kkmx3n6jxnM/maxresdefault.jpg"
                                    alt="Vaidehi Institute Video Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-full h-full">
                            {!iframeLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black">
                                    <div className="w-14 h-14 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube-nocookie.com/embed/Kkmx3n6jxnM?autoplay=1&rel=0&modestbranding=1&showinfo=0&mute=1&loop=1&playlist=Kkmx3n6jxnM"
                                title="Vaidehi Institute Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                onLoad={() => setIframeLoaded(true)}
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
} 