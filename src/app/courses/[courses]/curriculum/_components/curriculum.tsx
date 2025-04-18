
export default function Curriculum({ courseTitle, courseDuration }: { courseTitle: string, courseDuration: number }) {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">{courseTitle} Nursing Curriculum</h1>

            <div className="prose max-w-none">
                <p className="lead text-lg">
                    The {courseTitle} Nursing program follows a comprehensive curriculum designed according to the guidelines
                    of the Indian Nursing Council. The program spans over four years and includes theoretical instruction
                    and clinical practice.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
                    <p>
                        The {courseDuration}-year program is structured to provide a progressive learning experience, starting with
                        foundational subjects and gradually moving to specialized nursing care areas.
                    </p>

                    <div className="mt-6 space-y-8">
                        <div>
                            <h3 className="text-xl font-medium mb-3">First Year</h3>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-medium mb-2">Subjects:</h4>
                                <ul className="list-disc ml-6">
                                    <li>Anatomy & Physiology</li>
                                    <li>Nutrition & Biochemistry</li>
                                    <li>Nursing Foundations</li>
                                    <li>Psychology</li>
                                    <li>Microbiology</li>
                                    <li>English</li>
                                    <li>Introduction to Computer</li>
                                </ul>

                                <h4 className="font-medium mt-4 mb-2">Clinical Practice:</h4>
                                <p>800 hours of supervised clinical practice in hospital settings, focusing on basic nursing procedures.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-3">Second Year</h3>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-medium mb-2">Subjects:</h4>
                                <ul className="list-disc ml-6">
                                    <li>Sociology</li>
                                    <li>Pharmacology, Pathology & Genetics</li>
                                    <li>Medical-Surgical Nursing (Adult including Geriatrics) - I</li>
                                    <li>Community Health Nursing - I</li>
                                    <li>Communication & Educational Technology</li>
                                </ul>

                                <h4 className="font-medium mt-4 mb-2">Clinical Practice:</h4>
                                <p>
                                    960 hours of clinical practice in medical-surgical units, community health centers,
                                    and specialized care units.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-3">Third Year</h3>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-medium mb-2">Subjects:</h4>
                                <ul className="list-disc ml-6">
                                    <li>Medical-Surgical Nursing (Adult including Geriatrics) - II</li>
                                    <li>Child Health Nursing</li>
                                    <li>Mental Health Nursing</li>
                                    <li>Nursing Research & Statistics</li>
                                </ul>

                                <h4 className="font-medium mt-4 mb-2">Clinical Practice:</h4>
                                <p>
                                    1140 hours of clinical practice in advanced medical-surgical units, pediatric wards,
                                    mental health facilities, and research projects.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-3">Fourth Year</h3>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-medium mb-2">Subjects:</h4>
                                <ul className="list-disc ml-6">
                                    <li>Midwifery & Obstetrical Nursing</li>
                                    <li>Community Health Nursing - II</li>
                                    <li>Management of Nursing Services & Education</li>
                                </ul>

                                <h4 className="font-medium mt-4 mb-2">Clinical Practice:</h4>
                                <p>
                                    1140 hours of clinical practice in maternity units, community health centers,
                                    and nursing administration.
                                </p>

                                <h4 className="font-medium mt-4 mb-2">Internship:</h4>
                                <p>
                                    After the completion of four years, students undergo internship/residency for six months.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Teaching & Learning Methods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Theoretical Instruction</h3>
                            <ul className="list-disc ml-5">
                                <li>Lectures and discussions</li>
                                <li>Demonstrations</li>
                                <li>Seminars and symposia</li>
                                <li>Problem-based learning</li>
                                <li>Case studies</li>
                                <li>Role plays</li>
                                <li>Workshops</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-medium text-lg mb-2">Clinical Learning</h3>
                            <ul className="list-disc ml-5">
                                <li>Clinical practice in various settings</li>
                                <li>Nursing care conferences</li>
                                <li>Clinical demonstrations</li>
                                <li>Supervised practice</li>
                                <li>Clinical teaching</li>
                                <li>Field visits</li>
                                <li>Skill laboratory practice</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Evaluation</h2>
                    <p>
                        The evaluation system includes internal assessment and university examinations.
                        Students must secure a minimum of 50% marks in theory and practical examinations separately
                        to successfully complete the program.
                    </p>
                </div>
            </div>
        </div>
    );

}