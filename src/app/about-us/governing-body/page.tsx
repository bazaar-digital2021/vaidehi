
import ChairpersonMessagePage from "@/components/governing-body/Chairperson";
import SecretaryMessagePage from "@/components/governing-body/Secretary";

import TreasurerMessagePage from "@/components/governing-body/Treasurer";

export default async function page() {
    return (
        <div className="container mx-auto px-4 py-12">
            <ChairpersonMessagePage />
            <SecretaryMessagePage />
            <TreasurerMessagePage />

        </div>
    )
}
