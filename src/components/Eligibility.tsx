import { EligibilityItem } from "@/lib/admission/bsc";
import Image from "next/image";

interface EligibilityProps {
    imageSrc: string;
    imageAlt: string;
    eligibilityData: EligibilityItem[];
}

const Eligibility: React.FC<EligibilityProps> = ({ imageSrc, imageAlt, eligibilityData }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Image Container */}
            <div className="w-full relative h-[300px] md:h-[500px] mb-8">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            {/* Eligibility Title */}
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                Eligibility
            </h1>

            {/* Eligibility Content */}
            <ul className="space-y-4 mt-6">
                {eligibilityData.map((item) => (
                    <li key={item.id} className="flex">
                        <div className="mr-2 mt-1 flex-shrink-0">•</div>
                        <div>
                            <div>{item.content}</div>

                            {item.subItems && item.subItems.length > 0 && (
                                <ul className="mt-3 ml-2 space-y-2">
                                    {item.subItems.map((subItem, index) => (
                                        <li key={`${item.id}-sub-${index}`} className="flex">
                                            <div className="mr-2 mt-1 flex-shrink-0">○</div>
                                            <div>{subItem}</div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Eligibility;