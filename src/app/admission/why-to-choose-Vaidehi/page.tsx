'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyChooseVaidehiPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerCards = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className=" py-12">
            <div className="relative w-full h-[400px] overflow-hidden">
                {/* Full width background image */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src='/why-choose.png'
                        alt='Building'
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <motion.h1
                    className="absolute top-1/2 right-12 transform -translate-y-1/2 text-4xl font-bold text-white mb-6 border-b-2 border-white pb-2 inline-block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose Vaidehi Institute
                </motion.h1>
            </div>

            <motion.div
                className="prose max-w-none container mx-auto px-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <motion.p
                    className="lead text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Vaidehi Institute of Nursing & Higher Education stands out as a premier institution for nursing education,
                    offering numerous advantages to students pursuing a career in healthcare.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
                    variants={staggerCards}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div>
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md"
                            variants={cardVariant}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-primary">Academic Excellence</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Comprehensive curriculum designed according to INC guidelines</li>
                                <li>Focus on both theoretical knowledge and practical skills</li>
                                <li>Regular updates to incorporate latest developments in healthcare</li>
                                <li>Innovative teaching methodologies for effective learning</li>
                                <li>Regular assessments and feedback for continuous improvement</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md mt-6"
                            variants={cardVariant}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-primary">Experienced Faculty</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Highly qualified and experienced nursing educators</li>
                                <li>Faculty with clinical expertise in various specialties</li>
                                <li>Low faculty-student ratio for personalized attention</li>
                                <li>Regular faculty development programs for updated teaching skills</li>
                                <li>Guest lectures by industry experts and healthcare professionals</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md mt-6"
                            variants={cardVariant}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-primary">Clinical Exposure</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Extensive clinical practice opportunities</li>
                                <li>Affiliations with reputed hospitals and healthcare centers</li>
                                <li>Exposure to diverse patient populations and healthcare settings</li>
                                <li>Supervised clinical training by experienced preceptors</li>
                                <li>Community health programs for comprehensive learning</li>
                            </ul>
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md"
                            variants={cardVariant}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-primary">Infrastructure</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Modern campus with well-equipped classrooms</li>
                                <li>Advanced nursing skill laboratories</li>
                                <li>Comprehensive library with extensive nursing resources</li>
                                <li>Computer labs with internet facilities</li>
                                <li>Comfortable hostel accommodation with all amenities</li>
                                <li>Sports and recreational facilities for balanced development</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md mt-6"
                            variants={cardVariant}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-primary">Career Support</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Dedicated placement cell for career guidance</li>
                                <li>Strong network with hospitals and healthcare institutions</li>
                                <li>Regular campus recruitment drives</li>
                                <li>Preparation for competitive examinations</li>
                                <li>Soft skills training for professional development</li>
                                <li>Alumni network for long-term career support</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md mt-6"
                            variants={cardVariant}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-primary">Holistic Development</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Focus on professional ethics and values</li>
                                <li>Cultural and extracurricular activities</li>
                                <li>Leadership development opportunities</li>
                                <li>Workshops on communication and interpersonal skills</li>
                                <li>Community service initiatives for social responsibility</li>
                                <li>Mentorship programs for personal and professional guidance</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-primary/10 p-8 rounded-lg mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Student Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="bg-white p-5 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="italic">
                                "Choosing Vaidehi Institute for my nursing education was one of the best decisions I've made.
                                The faculty's guidance and the extensive clinical exposure prepared me well for my career."
                            </p>
                            <p className="font-medium mt-3">- Recent Graduate, B.Sc. Nursing</p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-5 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="italic">
                                "The infrastructure and learning facilities at Vaidehi Institute are excellent.
                                The hands-on training in labs and hospitals gave me confidence in my clinical skills."
                            </p>
                            <p className="font-medium mt-3">- Final Year Student, GNM</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Official Recognitions & Affiliations Section */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-2xl font-semibold mb-6">Official Recognitions & Affiliations</h2>
                    <p className="mb-6">
                        Vaidehi Institute of Nursing & Higher Education is proud to be recognized and affiliated with prestigious
                        governmental bodies that ensure the quality and credibility of our educational programs. These affiliations
                        guarantee that our curriculum meets national standards and that our graduates receive globally recognized degrees.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* First PDF Document Card */}
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-primary">Vaidehi Institute Affiliation</h3>
                                <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">PDF</div>
                            </div>
                            <div className="relative h-40 w-full bg-gray-100 rounded-md overflow-hidden mb-4">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                This document contains official recognition details for Vaidehi Institute of Nursing & Higher Education,
                                showcasing our institutional certifications and compliance with regulatory standards.
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                <Link href="/pdf/vaidehi-institute.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                                    View Document
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Second PDF Document Card */}
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-primary">BUHS Affiliation</h3>
                                <div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">PDF</div>
                            </div>
                            <div className="relative h-40 w-full bg-gray-100 rounded-md overflow-hidden mb-4">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                This document details our affiliation with the Bihar University of Health Sciences (BUHS),
                                verifying that our nursing programs are accredited and meet the university's high academic standards.
                            </p>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                <Link href="/pdf/Buhs.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
                                    View Document
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
} 