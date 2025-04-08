"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { CourseProps, courses } from "@/lib/courses"



export function CoursesSection() {
    return (
        <section className=" relative overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute  inset-0 top-0 left-0 h-full w-full -z-10">
                <Image
                    src='/college-1.png'
                    alt='college'
                    fill

                    className="object-contain "
                />

            </div>
            <div className="absolute inset-0 bg-primary/90 -z-10"></div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 -z-10">
                <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M10 0H0V10" fill="none" stroke="white" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pattern)"></rect>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center py-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">OUR COURSES</h2>
                    <div className="h-1 w-40 bg-white mx-auto"></div>
                </motion.div>

                {/* Course cards */}
                <div className="grid pb-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={course.title}
                            course={course}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CourseCard({ course, index }: { course: CourseProps; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Course image */}
            <div className="relative h-48 overflow-hidden">
                <motion.div
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                >
                    <Image
                        src={course.image}
                        alt={course.title}
                        className="object-cover"
                        fill
                    />
                </motion.div>
            </div>

            {/* Course details */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>

                <div className="text-gray-600 mt-auto space-y-1">
                    <p>Intake: {course.intake}</p>
                    <p>Duration: {course.duration}</p>
                </div>

                <motion.div
                    animate={{
                        y: isHovered ? 0 : 5,
                        opacity: isHovered ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                >
                    <Link
                        href={course.href}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Read More
                        <motion.span
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
} 