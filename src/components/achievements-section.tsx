"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function AchievementsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
                >
                    ACHIEVEMENTS
                </motion.h2>

                {/* Achievement Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <AchievementCard
                        title="M.Sc Nursing students had secured 100% result with first class in university examination conducted by RGUHS."
                        percentage={100}
                    />
                    <AchievementCard
                        title="B.Sc Nursing students had secured 100% result with first class and distinctions in university examination conducted by RGUHS."
                        percentage={100}
                    />
                </div>

                {/* Admission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full"
                    >
                        <div className="relative w-full rounded-lg overflow-hidden" style={{ height: "400px" }}>
                            <Image
                                src="/images/student-group.png"
                                alt="Vaidehi Institute Students"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                            ADMISSION OPEN FOR 2024
                        </h3>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                <span className="font-bold">Vaidehi Institute of Nursing Sciences and Research Centre</span> is a prestigious institution; its establishment took place in Bangalore, Karnataka in the year <span className="font-bold">2003</span>.
                            </p>
                            <p>
                                The institute offers M.Sc. (N), B.Sc. (N), Post Basic B.Sc. (N) and Diploma nursing. Vaidehi Institute of Nursing Sciences and Research Centre offer an encouraging and healthy environment for students to grow with an affordable fee.
                            </p>
                            <p>
                                It also offers a high-class infrastructure as well as gives a home-like environment to its students. Vaidehi Institute of Nursing Bangalore is one of the top 5 nursing institutes in Karnataka.
                            </p>

                            <div className="pt-4">
                                <Link
                                    href="/admission/admission-process"
                                    className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    REGISTER NOW
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

interface AchievementCardProps {
    title: string;
    percentage: number;
}

function AchievementCard({ title, percentage }: AchievementCardProps) {
    const progressRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(progressRef, { once: true, amount: 0.3 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-blue-200 rounded-lg p-6 bg-white"
        >
            <p className="text-gray-700 font-medium mb-6">{title}</p>

            <div className="relative h-10 bg-gray-200 rounded-full overflow-hidden" ref={progressRef}>
                <motion.div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full flex items-center justify-end pr-4"
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${percentage}%` : "0%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <span className="text-white font-bold">{percentage}%</span>
                </motion.div>
            </div>
        </motion.div>
    )
} 