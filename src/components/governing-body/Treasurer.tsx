import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TreasurerMessagePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Treasurer's Message
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
                        <Image src="/governing/treasurer.jpeg" alt="Treasurer" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-semibold text-xl">Suchitra Suman</h3>
                        <p className="text-gray-600">Treasurer , Vaidehi Institute of Nursing & Higher Education</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="md:w-2/3 prose max-w-none"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <p className="lead text-lg font-medium mb-4">
                        Dear Students, Parents, and Stakeholders,
                    </p>

                    <p>
                        As the Treasurer of Vaidehi Institute of Nursing & Higher Education, I am responsible for overseeing
                        the financial health and sustainability of our institution. I am committed to ensuring that our resources
                        are allocated effectively to support the educational mission of our institute.
                    </p>

                    <p>
                        Financial transparency and accountability are the cornerstones of our management philosophy. We strive
                        to maintain affordable education while investing in quality infrastructure, learning resources, and faculty
                        development. Our goal is to provide value for money and ensure that financial constraints do not hinder
                        deserving students from pursuing their nursing education.
                    </p>

                    <p>
                        We have established various scholarships and financial aid programs to support students from economically
                        disadvantaged backgrounds. We believe that talent should never go unrecognized due to financial limitations.
                    </p>

                    <p>
                        The institution's financial planning is aligned with our strategic goals of expanding facilities, enhancing
                        educational resources, and improving student services. We continuously review our financial processes to
                        optimize efficiency and ensure the long-term stability of the institution.
                    </p>

                    <p>
                        I am proud to be part of an institution that values both educational excellence and financial responsibility.
                        Our prudent financial management enables us to continuously invest in improving the quality of education and
                        student experience at Vaidehi Institute.
                    </p>

                    <p className="font-medium">
                        I look forward to contributing to the growth and development of this prestigious institution and supporting
                        our students in achieving their career aspirations.
                    </p>
                </motion.div>
            </div>
        </div>
    );
} 