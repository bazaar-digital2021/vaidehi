import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ChairpersonMessagePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Chairperson's Message
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-8">
                <motion.div
                    className="md:w-1/3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Replace with chairperson's image */}
                        <Image src="/governing/chairperson.jpeg" alt="Chairperson" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-semibold text-xl">Suchita Kumari </h3>
                        <p className="text-gray-600">Chairperson, Vaidehi Institute of Nursing & Higher Education</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="md:w-2/3 prose max-w-none"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="lead text-lg font-medium mb-4">
                        Dear Students, Parents, and Well-wishers,
                    </p>

                    <p>
                        As the Chairperson of Vaidehi Institute of Nursing & Higher Education, I am delighted to welcome you
                        to our institution. We have established ourselves as a center of excellence in nursing education,
                        committed to producing competent healthcare professionals who will serve the nation with dedication and expertise.
                    </p>

                    <p>
                        The healthcare sector in India is rapidly evolving, creating a growing demand for skilled nursing professionals.
                        At Vaidehi Institute, we prepare our students to meet this demand through a comprehensive curriculum that
                        combines theoretical knowledge with practical training. Our programs are designed to develop not only
                        clinical skills but also critical thinking, leadership abilities, and ethical values.
                    </p>

                    <p>
                        We have invested in state-of-the-art infrastructure, simulation laboratories, and experienced faculty to
                        ensure that our students receive the best possible education. Our strong connections with leading
                        healthcare institutions provide excellent opportunities for clinical experience and placements.
                    </p>

                    <p>
                        I am proud of what we have achieved so far and excited about our future plans to further enhance
                        the quality of nursing education at Vaidehi Institute. I invite you to join us on this journey
                        of excellence and growth.
                    </p>

                    <p className="font-medium">
                        Wishing you all the very best.
                    </p>
                </motion.div>
            </div>
        </div>
    );
} 