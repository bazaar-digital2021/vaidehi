import React from "react";
import Image from "next/image";

export default function PrincipalMessagePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Principal's Message</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <div className="relative aspect-[3/4] w-full mb-4 rounded-lg overflow-hidden shadow-lg">
                        {/* Replace with principal's image */}
                        <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                            <span className="text-gray-500">Principal's Image</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-xl">Principal's Name</h3>
                        <p className="text-gray-600">Principal, Vaidehi Institute</p>
                    </div>
                </div>

                <div className="md:w-2/3 prose max-w-none">
                    <p className="lead text-lg font-medium mb-4">
                        Dear Students and Parents,
                    </p>

                    <p>
                        Welcome to Vaidehi Institute of Nursing & Higher Education. As the Principal, it is my privilege
                        to lead this institution that is dedicated to nurturing competent and compassionate nursing professionals.
                    </p>

                    <p>
                        Nursing is a noble profession that demands not only technical skills but also empathy, dedication, and
                        a strong ethical foundation. At Vaidehi Institute, we strive to inculcate these qualities in our students
                        through a well-rounded educational approach that combines classroom learning, laboratory practice,
                        and extensive clinical exposure.
                    </p>

                    <p>
                        Our faculty members are experienced educators and practitioners who are committed to providing
                        quality education and mentorship. They ensure that our students receive personalized attention
                        and guidance throughout their academic journey.
                    </p>

                    <p>
                        We have created a conducive learning environment with modern facilities, well-equipped laboratories,
                        and a comprehensive library. Our strong partnerships with leading healthcare institutions provide
                        our students with valuable clinical experience and excellent placement opportunities.
                    </p>

                    <p>
                        I encourage our students to make the most of these resources and opportunities to develop
                        into skilled professionals who will make significant contributions to the healthcare sector.
                    </p>

                    <p className="font-medium">
                        I wish all our students a fulfilling and successful academic experience at Vaidehi Institute.
                    </p>
                </div>
            </div>
        </div>
    );
} 