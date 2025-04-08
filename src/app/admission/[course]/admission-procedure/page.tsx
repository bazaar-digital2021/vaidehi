import ModernComingSoon from "@/components/coming-soon";

export default async function AdmissionProcedure({
    params,
}: {
    params: Promise<{ course: string }>
}) {
    const { course } = await params;
    return (
        <ModernComingSoon />
    )
}
