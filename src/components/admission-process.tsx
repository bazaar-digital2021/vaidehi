// components/AdmissionProcess.tsx
import Image from 'next/image';
import React from 'react';



const AdmissionProcess = () => {
    return (
        <div className=" mx-auto py-8">
            {/* Image Container */}
            <div className="w-full relative h-[300px] md:h-[500px] mb-8">
                <Image
                    src='/ad.png'
                    alt='Admission'
                    fill
                    className="object-cover"
                    priority
                />

                <h1 className="absolute top-1/2 left-10/12 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white mb-6 border-b-2 border-white pb-2 inline-block">
                    Admission Process
                </h1>
            </div>

            {/* Admission Process Title */}
            <div className='container mx-auto px-4 py-8'>


                {/* Admission Process Content */}
                <ul className="space-y-6 mt-6">
                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Notification of Admission:</span> The University releases an official notification announcing the commencement of the admission process for nursing courses. This notification is typically published on the university website and in leading newspapers. It includes details such as eligibility criteria, important dates, available seats, and the application procedure.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Check Eligibility Criteria:</span> Prospective applicants review the eligibility criteria specified in the admission notification. They ensure they meet the requirements, which often include completing 10+2 with Science (Physics, Chemistry, and Biology) and achieving a minimum aggregate score.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Online Application:</span> Eligible candidates visit the university website during the specified application period. They fill out the online application form with accurate personal and educational information. Additionally, they upload required documents such as mark sheets, identity proof, and passport-size photograph.
                        </div>
                    </li>



                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Result Declaration:</span> Following the entrance examination, the university evaluates the performance of candidates and declares the results. The results are published on the university website and may also be displayed on notice boards.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Merit List Publication:</span> Based on the results of the entrance examination, the university prepares a merit list ranking candidates according to their scores. The merit list is made available on the university website and notice boards.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Counselling Process:</span> Shortlisted candidates are invited to participate in the counselling process conducted by the university. During counselling sessions, candidates select their preferred nursing course based on their rank in the merit list and the availability of seats.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Document Verification:</span> Candidates must bring original documents for verification during the counselling process. These documents typically include mark sheets, certificates, identity proof, and other relevant documents.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Seat Allotment:</span> After document verification and counselling, seats are allotted to candidates based on their merit rank and course preferences. The allotment process considers both the candidate's choice and the availability of seats.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Admission Confirmation:</span> Candidates who are allotted seats confirm their admission by paying the prescribed admission fees within the specified time frame. This step secures their place in the nursing course.
                        </div>
                    </li>

                    <li className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <span className="font-bold">Commencement of Classes:</span> With admission confirmed, students commence their nursing education according to the academic calendar of the university. They attend classes, participate in practical sessions, and engage in clinical training as per the curriculum requirements.
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default AdmissionProcess;