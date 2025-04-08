import React from "react";
import Image from "next/image";

export default function WhyChooseVaidehiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Why Choose Vaidehi Institute</h1>

            <div className="prose max-w-none">
                <p className="lead text-lg">
                    Vaidehi Institute of Nursing & Higher Education stands out as a premier institution for nursing education,
                    offering numerous advantages to students pursuing a career in healthcare.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-primary">Academic Excellence</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Comprehensive curriculum designed according to INC guidelines</li>
                                <li>Focus on both theoretical knowledge and practical skills</li>
                                <li>Regular updates to incorporate latest developments in healthcare</li>
                                <li>Innovative teaching methodologies for effective learning</li>
                                <li>Regular assessments and feedback for continuous improvement</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="text-xl font-semibold mb-4 text-primary">Experienced Faculty</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Highly qualified and experienced nursing educators</li>
                                <li>Faculty with clinical expertise in various specialties</li>
                                <li>Low faculty-student ratio for personalized attention</li>
                                <li>Regular faculty development programs for updated teaching skills</li>
                                <li>Guest lectures by industry experts and healthcare professionals</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="text-xl font-semibold mb-4 text-primary">Clinical Exposure</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Extensive clinical practice opportunities</li>
                                <li>Affiliations with reputed hospitals and healthcare centers</li>
                                <li>Exposure to diverse patient populations and healthcare settings</li>
                                <li>Supervised clinical training by experienced preceptors</li>
                                <li>Community health programs for comprehensive learning</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4 text-primary">Infrastructure</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Modern campus with well-equipped classrooms</li>
                                <li>Advanced nursing skill laboratories</li>
                                <li>Comprehensive library with extensive nursing resources</li>
                                <li>Computer labs with internet facilities</li>
                                <li>Comfortable hostel accommodation with all amenities</li>
                                <li>Sports and recreational facilities for balanced development</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="text-xl font-semibold mb-4 text-primary">Career Support</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Dedicated placement cell for career guidance</li>
                                <li>Strong network with hospitals and healthcare institutions</li>
                                <li>Regular campus recruitment drives</li>
                                <li>Preparation for competitive examinations</li>
                                <li>Soft skills training for professional development</li>
                                <li>Alumni network for long-term career support</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="text-xl font-semibold mb-4 text-primary">Holistic Development</h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Focus on professional ethics and values</li>
                                <li>Cultural and extracurricular activities</li>
                                <li>Leadership development opportunities</li>
                                <li>Workshops on communication and interpersonal skills</li>
                                <li>Community service initiatives for social responsibility</li>
                                <li>Mentorship programs for personal and professional guidance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/10 p-8 rounded-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Student Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <p className="italic">
                                "Choosing Vaidehi Institute for my nursing education was one of the best decisions I've made.
                                The faculty's guidance and the extensive clinical exposure prepared me well for my career."
                            </p>
                            <p className="font-medium mt-3">- Recent Graduate, B.Sc. Nursing</p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <p className="italic">
                                "The infrastructure and learning facilities at Vaidehi Institute are excellent.
                                The hands-on training in labs and hospitals gave me confidence in my clinical skills."
                            </p>
                            <p className="font-medium mt-3">- Final Year Student, GNM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 