"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bell } from "lucide-react"
import { descriptions } from "@/lib/about-description"

export function Hero() {
    return (
        <section className="relative w-full">
            {/* Hero Image Container */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
                <Image
                    src="/college-pic.jpg"
                    alt="Vaidehi Institute Building"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-primary/50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md">
                            Vaidehi Institute of Nursing and Higher Education
                        </h1>
                        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
                            Shaping the future of healthcare through excellence in nursing education
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white"
                        >
                            <Link href="/admission/admission-process">
                                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Overlapping Cards Section */}
            <div className="relative z-10 container mx-auto px-4 -mt-20 md:-mt-28 lg:-mt-36 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* About Us Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-lg shadow-xl p-6 md:p-8"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">V</span>
                                </div>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold ml-4 text-primary">About Us</h2>
                        </div>
                        {descriptions.map((desc, i) =>
                            <p key={i} className="text-gray-600 mb-4">
                                {desc.description}
                            </p>
                        )}

                        <Link href="/about-us" className="flex items-center text-primary font-medium hover:underline">
                            Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </motion.div>

                    {/* Notice Board Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-white rounded-lg shadow-xl p-6 md:p-8"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                                <Bell className="h-6 w-6 text-secondary" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold ml-4 text-secondary">Notice Board</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-4 border-secondary pl-4 py-1">
                                <p className="text-sm text-gray-500">June 15, 2025</p>
                                <h3 className="font-medium">Admission Open for 2025-26 Session</h3>
                                <p className="text-sm text-gray-600">Applications are now being accepted for the new academic year.</p>
                            </div>
                            <div className="border-l-4 border-secondary pl-4 py-1">
                                <p className="text-sm text-gray-500">May 28, 2025</p>
                                <h3 className="font-medium">New Laboratory Equipment Installation</h3>
                                <p className="text-sm text-gray-600">State-of-the-art nursing simulation equipment has been installed.</p>
                            </div>
                            <div className="border-l-4 border-secondary pl-4 py-1">
                                <p className="text-sm text-gray-500">May 15, 2025</p>
                                <h3 className="font-medium">Community Health Awareness Camp</h3>
                                <p className="text-sm text-gray-600">Join us for a free health check-up camp in the neighboring community.</p>
                            </div>
                        </div>
                        <Link href="/notices" className="flex items-center text-secondary font-medium hover:underline mt-4">
                            View all notices <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 