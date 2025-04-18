'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="w-full">
            {/* Hero section with curved design */}
            <div className="relative w-full h-[400px] overflow-hidden">
                {/* Full width background image */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src='/college-pic.jpg'
                        alt='Building'
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Overlay with curved design */}
                <div className="absolute top-0 right-0 h-full w-full">
                    <div className="absolute inset-0"></div>
                    <svg
                        viewBox="0 0 500 500"
                        preserveAspectRatio="none"
                        className="h-full w-full relative z-10"
                    >
                        <path
                            d="M0,0 L0,500 L500,500 L500,0 Q250,150 0,0"
                            fill="#3b57d9"
                            opacity="0.6"
                        />
                    </svg>

                    {/* About Us text on blue background */}
                    <motion.div
                        className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white z-20"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                    </motion.div>
                </div>
            </div>

            {/* Content section */}
            <motion.div
                className="bg-primary text-white py-12 px-4 md:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
                    <div className="text-lg">
                        <p>
                            <span className="font-bold">Vaidehi Institute of Nursing & Higher Education </span> is a prestigious institution; established in the year <span className="font-bold">5th Feb 2023</span>.
                            The institute offers GNM , BSC Nursing  and ANM . Vaidehi Institute of Nursing & Higher Education offer an encouraging and healthy environment for students to grow with an affordable fee. It also offers a high-class infrastructure as well as gives a home-like environment to its students. Vaidehi Institute of Nursing & Higher Education Bihar is one of the top nursing institutes in Bihar.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Aims Section */}
            <motion.div
                className="py-16 border-b border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="md:w-1/5 mb-6 md:mb-0">
                            <motion.h2
                                className="text-4xl font-bold text-primary border-b-2 border-blue-600 inline-block"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Aims
                            </motion.h2>
                        </div>
                        <div className="md:w-4/5">
                            <p className="text-lg mb-6">Vaidehi Institute of Nursing aims at providing the:</p>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <motion.div
                                    className="flex items-start"
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="font-medium">Best Education</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-start"
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="font-medium">Experience</span>
                                </motion.div>

                                <motion.div
                                    className="flex items-start"
                                    whileInView={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="font-medium">Environment</span>
                                </motion.div>
                            </div>

                            <p className="text-lg">So that our nurses will be competent, caring, and professionals of good character.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
                className="py-16 border-b border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="md:w-1/5 mb-6 md:mb-0">
                            <motion.h2
                                className="text-4xl font-bold text-primary border-b-2 border-blue-600 inline-block"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Vision
                            </motion.h2>
                        </div>
                        <div className="md:w-4/5">
                            <motion.p
                                className="text-lg mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                To provide a world class integrated healthcare system, with a focus on patient care to the underprivileged people, by leveraging technology led by a team of committed professionals equipped with the finest medical skills.
                            </motion.p>

                            <motion.div
                                className="text-right"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <p className="font-bold">Suchita Kumar</p>
                                <p>Chairman, Vaidehi Institute of Nursing & Higher Education</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                className="py-16 border-b border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="md:w-1/5 mb-6 md:mb-0">
                            <motion.h2
                                className="text-4xl font-bold text-primary border-b-2 border-blue-600 inline-block"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Mission
                            </motion.h2>
                        </div>
                        <div className="md:w-4/5">
                            <motion.p
                                className="text-lg mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Our mission is to bring health care of international standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in education, research and healthcare for the benefit of humanity
                            </motion.p>

                            <motion.div
                                className="text-right"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <p className="font-bold">Rakesh Kumar Singh</p>
                                <p>Secretary, Vaidehi Institute of Nursing & Higher Education</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>



            {/* Quality Principles Section */}
            <motion.div
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
            >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <motion.div
                            className="flex items-start"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="font-medium">Quality Service</span>
                        </motion.div>

                        <motion.div
                            className="flex items-start"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="font-medium">Quality Teaching</span>
                        </motion.div>

                        <motion.div
                            className="flex items-start"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="font-medium">Professional Development</span>
                        </motion.div>

                        <motion.div
                            className="flex items-start"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                            <span className="font-medium">Research for a bright future through EDUCATION</span>
                        </motion.div>
                    </div>

                    {/* Navigation Tabs */}
                    <motion.div
                        className="flex flex-wrap border-b"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-t-md"
                            whileHover={{ backgroundColor: "#2563eb" }}
                        >
                            Overview
                        </motion.button>

                    </motion.div>

                    {/* Overview Content */}
                    <motion.div
                        className="mt-6 text-gray-700 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-4">
                            The Vaidehi Institute of Nursing & Higher Education is extremely fortunate to have a huge hospital on campus with a capacity of 1600 beds. The hospital and medical college are both near to the hospital. The nursing college is associated with Rajiv Gandhi University of Health Science and has been accredited by the Bihar government. The Bihar Nursing Council has granted accreditation to the nursing program.
                        </p>
                        <p>
                            The primary goal of the Vaidehi Institute of Nursing & Higher Education has always been to provide comprehensive, well-rounded nursing education and clinical skills. The institute seeks to produce nurses who are morally and academically open-minded, emotionally stable, physically fit, have a depth of knowledge and excellence, are self-directing to meet the responsibilities of creating a professional nurse equipped to provide total health care to the community.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};
