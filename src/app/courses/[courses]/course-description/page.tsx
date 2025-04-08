import React from "react";

export default async function BasicBscNursingDescriptionPage({
    params,
}: {
    params: Promise<{ courses: string }>
}) {
    const { courses } = await params;
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">B.Sc. Nursing Course Description</h1>

            <div className="prose max-w-none">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Program Overview</h2>
                    <p>
                        The B.Sc. Nursing program is a 4-year undergraduate degree that prepares students for a career in nursing.
                        The program provides a comprehensive education in nursing theory and practice, enabling graduates to deliver
                        high-quality care in various healthcare settings.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-3">Program Objectives</h2>
                    <p>The B.Sc. Nursing program aims to:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Develop competent nursing professionals with knowledge, skills, and attitudes to provide comprehensive care</li>
                        <li>Prepare graduates to function effectively in both hospital and community settings</li>
                        <li>Develop critical thinking skills for making clinical judgments</li>
                        <li>Instill leadership qualities and management skills for effective healthcare delivery</li>
                        <li>Foster research aptitude to contribute to evidence-based nursing practice</li>
                        <li>Cultivate ethical values, professional conduct, and communication skills</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-3">Career Opportunities</h2>
                    <p>Graduates of the B.Sc. Nursing program can pursue various career paths, including:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Clinical Nursing</h3>
                            <ul className="list-disc ml-5">
                                <li>Staff Nurse in hospitals, clinics, and healthcare centers</li>
                                <li>Intensive Care Unit (ICU) Nurse</li>
                                <li>Operation Theatre Nurse</li>
                                <li>Emergency Room Nurse</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Community Health</h3>
                            <ul className="list-disc ml-5">
                                <li>Community Health Nurse</li>
                                <li>School Health Nurse</li>
                                <li>Home Health Care Provider</li>
                                <li>Public Health Officer</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Education</h3>
                            <ul className="list-disc ml-5">
                                <li>Clinical Instructor</li>
                                <li>Nurse Educator (after further education)</li>
                                <li>Healthcare Trainer</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Administration</h3>
                            <ul className="list-disc ml-5">
                                <li>Nursing Supervisor</li>
                                <li>Ward Manager</li>
                                <li>Nursing Administrator (with experience)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-3">Higher Education Opportunities</h2>
                    <p>
                        After completing B.Sc. Nursing, graduates can pursue higher education in nursing, such as:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>M.Sc. Nursing in various specializations</li>
                        <li>M.Phil. in Nursing</li>
                        <li>Ph.D. in Nursing</li>
                        <li>Post Graduate Diplomas in specialized nursing areas</li>
                    </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-3">Why Choose Vaidehi Institute for B.Sc. Nursing?</h2>
                    <ul className="list-disc ml-6">
                        <li>Experienced and qualified faculty</li>
                        <li>State-of-the-art infrastructure and learning facilities</li>
                        <li>Excellent clinical exposure through well-established hospital connections</li>
                        <li>Comprehensive academic curriculum as per INC guidelines</li>
                        <li>Focus on holistic development with extracurricular activities</li>
                        <li>Strong placement support and career guidance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 