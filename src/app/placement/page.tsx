import Image from "next/image";

export default function PlacementPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="w-full relative h-[300px] md:h-[500px] mb-8">
                <Image
                    src='/images/bsc.jpeg'
                    alt='placement'
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>
            <h1 className="text-4xl font-bold mb-6">Placement</h1>
            <div className="space-y-6">
                <p className="text-lg">
                    Vaidehi Institute of Nursing Sciences and Research has an outstanding placement record. Our students are highly sought after by top healthcare institutions across the country and internationally.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Placement Process</h2>
                    <div className="space-y-4">
                        <p>
                            Our dedicated placement cell works tirelessly to ensure that our students get the best opportunities in the healthcare industry. The placement process typically includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Pre-placement training and workshops</li>
                            <li>Resume building sessions</li>
                            <li>Mock interviews</li>
                            <li>Interaction with industry professionals</li>
                            <li>Campus interviews and placement drives</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Recruiters</h2>
                    <p className="mb-4">
                        We are proud to be associated with some of the leading healthcare providers who regularly recruit our students:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="p-4 border rounded-md text-center">Apollo Hospitals</div>
                        <div className="p-4 border rounded-md text-center">Fortis Healthcare</div>
                        <div className="p-4 border rounded-md text-center">Manipal Hospitals</div>
                        <div className="p-4 border rounded-md text-center">Narayana Health</div>
                        <div className="p-4 border rounded-md text-center">Columbia Asia</div>
                        <div className="p-4 border rounded-md text-center">AIIMS</div>
                        <div className="p-4 border rounded-md text-center">Max Healthcare</div>
                        <div className="p-4 border rounded-md text-center">Medanta</div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Placement Statistics</h2>
                    <p className="mb-4">
                        Our placement record speaks for itself:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 border rounded-md text-center">
                            <div className="text-4xl font-bold text-primary mb-2">95%</div>
                            <div className="text-lg">Placement Rate</div>
                        </div>
                        <div className="p-6 border rounded-md text-center">
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-lg">Recruiting Partners</div>
                        </div>
                        <div className="p-6 border rounded-md text-center">
                            <div className="text-4xl font-bold text-primary mb-2">₹4.2L</div>
                            <div className="text-lg">Average Starting Salary</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 