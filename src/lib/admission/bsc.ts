// data/eligibilityData.ts
export interface EligibilityItem {
    id: string;
    content: string;
    subItems?: string[];
}

export const eligibilityData: EligibilityItem[] = [
    {
        id: "criteria-general",
        content: "Candidates must have obtained a minimum of not less than 50% marks in Physics, Chemistry, Biology, and English taken together in the qualifying examination. With respect to candidates belonging to the Scheduled Castes and Scheduled Tribes or other backward classes, the marks obtained in Physics, Chemistry, Biology, and English taken together in the qualifying examination should not be less than 40% instead of 50% as mentioned above."
    },
    {
        id: "10-plus-2",
        content: "Pass in 10+2 or equivalent examination"
    },
    {
        id: "marks-pcb",
        content: "50% marks in Physics, Chemistry, Biology(PCB)"
    },
    {
        id: "marks-reserved",
        content: "40% marks for reserved category in PCB"
    },
    {
        id: "age",
        content: "Age – 17 years as on August 31 of the year of admission"
    },
    {
        id: "merit",
        content: "Admission based on merit of previous qualifying examination"
    },
    {
        id: "nri-foreign",
        content: "Admission of NRIs and foreign nationals is based on the qualifying marks in their core subjects",
        subItems: [
            "Original documents with photo copies in two sets to be produced at the time of admission",
            "10 th std. marks card/( for proof of date of birth)",
            "10 + 2 marks card/ PUC marks card",
            "Transfer Certificate from the Institution last attended",
            "Conduct Certificates from the Institution last attended",
            "Medical Fitness certificate",
            "Migration Certificates",
            "Selected non Karnataka candidates should obtain Eligibility Certificates from the RGUHS",
            "Photographs – 4 ( 2 passport size and 2 stamp size )",
            "Embassy Certificate (NRI students)"
        ]
    }
];


