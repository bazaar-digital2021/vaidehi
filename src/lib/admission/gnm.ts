// data/eligibilityData.ts

export interface EligibilityItem {
    id: string;
    content: string;
    subItems?: string[];
}

export const gnmEligibilityData: EligibilityItem[] = [
    {
        id: "10-plus-2",
        content: "Candidate should have passed in 10+2 or equivalent examination with any subjects."
    },
    {
        id: "foreign-nationals",
        content: "Foreign nationals (including Nepali, Bangladeshi, Bhutani, and Tibetan refugee) are eligible for admission."
    },
    {
        id: "gnm-qualification",
        content: "For admission to Diploma Nursing (GNM) program, candidates should have qualified 12th standard obtained by association of Indian University/Institution/Council or equivalent."
    },
    {
        id: "documents-required",
        content: "Original documents with photo copies in two sets to be produced at the time of admission",
        subItems: [
            "10th std. marks card (for proof of date of birth)",
            "10 + 2 marks card / PUC marks card",
            "Transfer Certificate from the Institution last attended",
            "Conduct Certificate from the Institution last attended",
            "Migration Certificate",
            "Photographs – 6 (4 passport size and 2 stamp size)"
        ]
    }
];
