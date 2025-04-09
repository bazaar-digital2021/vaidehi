import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SecretaryMessagePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Secretary's Message
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
                        <Image src="/governing/seceretary.jpeg" alt="Secretary" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-semibold text-xl">Rakesh Kumar Singh</h3>
                        <p className="text-gray-600">Secretary , Vaidehi Institute of Nursing & Higher Education</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="md:w-2/3 prose max-w-none"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="lead text-lg font-medium mb-4">
                        Dear Students, Parents, and Esteemed Colleagues,
                    </p>

                    <p>
                        As the Secretary of Vaidehi Institute of Nursing & Higher Education, I am honored to be part of an
                        institution committed to excellence in nursing education. My role involves coordinating institutional
                        activities and ensuring effective implementation of policies that uphold our academic standards.
                    </p>

                    <p>
                        Our institution strives to provide a nurturing environment where students can develop into competent
                        healthcare professionals. We focus on building a strong foundation of knowledge, skills, and ethical
                        values that are essential for a successful career in nursing. Our administrative framework is designed
                        to support this educational mission and enhance the overall learning experience.
                    </p>

                    <p>
                        Communication and collaboration are vital aspects of our institutional philosophy. We maintain open
                        channels of communication among students, faculty, and administration to ensure that everyone's voice
                        is heard and concerns are addressed promptly. This collaborative approach helps us continuously improve
                        our programs and services.
                    </p>

                    <p>
                        We are committed to maintaining regulatory compliance and upholding the highest standards of
                        governance. Our administrative procedures are designed to be transparent, fair, and efficient,
                        ensuring smooth functioning of the institution and timely resolution of administrative matters.
                    </p>

                    <p>
                        As we navigate the evolving landscape of healthcare education, we remain adaptable and forward-thinking.
                        We continuously evaluate and update our administrative processes to better serve our students and
                        support our faculty in delivering quality education.
                    </p>

                    <p className="font-medium">
                        I welcome you to Vaidehi Institute and assure you of our unwavering commitment to excellence
                        in nursing education. Together, we will continue to build an institution that produces nursing
                        professionals who make significant contributions to healthcare and society.
                    </p>
                </motion.div>
            </div>
        </div>
    );
} 