import AdmissionProcess from "@/components/admission-process";


export default async function AdmissionProcedure({
    params,
}: {
    params: Promise<{ course: string }>
}) {
    const { course } = await params;
    return (
        <AdmissionProcess />
    )
}
