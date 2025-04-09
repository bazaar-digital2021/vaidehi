
import Eligibility from "@/components/Eligibility";
import { eligibilityData } from "@/lib/admission/bsc";
import { gnmEligibilityData } from "@/lib/admission/gnm";


export default async function page({ params }: { params: Promise<{ course: string }> }) {
    const { course } = await params;
    return (
        course === "basic-bsc-nursing" ? <Eligibility imageSrc="/images/bsc.jpeg" imageAlt="GNM" eligibilityData={eligibilityData} /> : <Eligibility imageSrc="/images/gnm.jpeg" imageAlt="BSC" eligibilityData={gnmEligibilityData} />
    )
}