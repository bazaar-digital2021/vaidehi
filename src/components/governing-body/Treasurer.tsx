import React from "react";
import Image from "next/image";

export default function TreasurerMessagePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Treasurer's Message</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg">
                        <Image src="/governing/treasurer.jpeg" alt="Treasurer" fill className="object-cover" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-xl">Suchitra Suman</h3>
                        <p className="text-gray-600">Treasurer , Vaidehi Institute of Nursing & Higher Education</p>
                    </div>
                </div>

                <div className="md:w-2/3 prose max-w-none">
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
                </div>
            </div>
        </div>
    );
} 