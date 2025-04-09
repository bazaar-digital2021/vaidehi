import React from "react";
import Image from "next/image";

export default function SecretaryMessagePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Secretary's Message</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg">
                        <Image src="/governing/seceretary.jpeg" alt="Secretary" fill className="object-cover" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-xl">Rakesh Kumar Singh</h3>
                        <p className="text-gray-600">Secretary , Vaidehi Institute of Nursing & Higher Education</p>
                    </div>
                </div>

                <div className="md:w-2/3 prose max-w-none">
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
                </div>
            </div>
        </div>
    );
} 