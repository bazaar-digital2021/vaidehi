import React from "react";

export default function ManagementPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Management</h1>
            <div className="prose max-w-none">
                <p>
                    Vaidehi Institute of Nursing & Higher Education is managed by a dedicated team
                    of professionals committed to providing quality education in nursing and healthcare.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Management Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Add management details here */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-medium mb-2">Board of Directors</h3>
                            <p className="text-gray-700">
                                The Board of Directors oversees the strategic direction of the institution,
                                ensuring that it fulfills its mission and vision.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-medium mb-2">Academic Council</h3>
                            <p className="text-gray-700">
                                The Academic Council is responsible for maintaining academic standards
                                and curriculum development to meet the evolving needs of the healthcare industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 