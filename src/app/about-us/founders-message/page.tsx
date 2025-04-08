import React from "react";
import Image from "next/image";

export default function FoundersMessagePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Founder's Message</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg">
                        {/* Replace with founder's image */}
                        <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                            <span className="text-gray-500">Founder's Image</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-xl">Founder's Name</h3>
                        <p className="text-gray-600">Founder, Vaidehi Institute</p>
                    </div>
                </div>

                <div className="md:w-2/3 prose max-w-none">
                    <p className="lead text-lg font-medium mb-4">
                        It gives me immense pleasure to welcome you to Vaidehi Institute of Nursing & Higher Education.
                    </p>

                    <p>
                        Our institute was established with a vision to create a center of excellence for nursing education.
                        We strive to produce competent, compassionate, and committed nursing professionals who can serve
                        society with dedication and make a positive impact on healthcare delivery.
                    </p>

                    <p>
                        At Vaidehi Institute, we believe in holistic development of our students through a combination
                        of rigorous academic curriculum, practical training, and value-based education. Our state-of-the-art
                        infrastructure, experienced faculty, and strong industry connections ensure that our graduates
                        are well-equipped to face the challenges of the healthcare sector.
                    </p>

                    <p>
                        As you embark on your journey with us, I encourage you to make the most of the opportunities
                        provided here and develop into healthcare professionals who will contribute significantly
                        to the advancement of nursing practice and healthcare delivery in our country.
                    </p>

                    <p className="font-medium">
                        I wish you all success in your educational endeavors and future career.
                    </p>
                </div>
            </div>
        </div>
    );
} 