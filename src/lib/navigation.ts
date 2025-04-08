export type NavItem = {
    title: string;
    href?: string;
    items?: NavItem[];
};

export type Navigation = NavItem[];

export const navigation: Navigation = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: 'About Us',
        items: [
            {
                title: "Over view",
                href: "/about-us",
            },
            {
                title: 'Governing Body',
                href: "/about-us/governing-body",
            }
        ],
    },
    {
        title: "Courses",
        items: [
            {
                title: "GNM",
                items: [
                    {
                        title: 'Course Description',
                        href: '/courses/gnm/course-description',
                    },
                    {
                        title: 'Curriculum',
                        href: '/courses/gnm/curriculum',
                    }
                ]
            },
            {
                title: "Basic B.sc Nursing",
                items: [
                    {
                        title: 'Course Description',
                        href: '/courses/basic-bsc-nursing/course-description',
                    },
                    {
                        title: 'Curriculum',
                        href: '/courses/basic-bsc-nursing/curriculum',
                    }
                ]
            },
            {
                title: "ANM",
                items: [
                    {
                        title: 'Course Description',
                        href: '/courses/anm/course-description',
                    },
                    {
                        title: 'Curriculum',
                        href: '/courses/anm/curriculum',
                    }
                ]
            }
        ]
    },
    {
        title: "Admission",
        items: [
            {
                title: 'Why to choose Vaidehi',
                href: '/admission/why-to-choose-Vaidehi'
            },
            {
                title: 'Admission Process',
                href: '/admission/admission-process'
            },
            {
                title: 'GNM',
                items: [
                    {
                        title: 'Eligibility',
                        href: '/admission/gnm/eligibility'
                    },
                    {
                        title: 'Admission Procedure',
                        href: '/admission/gnm/admission-procedure'
                    },
                    {
                        title: 'Application Form',
                        href: '/admission/gnm/application-form'
                    }
                ]
            },
            {
                title: 'Basic B.sc Nursing',
                items: [
                    {
                        title: 'Eligibility',
                        href: '/admission/basic-bsc-nursing/eligibility'
                    },
                    {
                        title: 'Admission Procedure',
                        href: '/admission/basic-bsc-nursing/admission-procedure'
                    },
                    {
                        title: 'Application Form',
                        href: '/admission/basic-bsc-nursing/application-form'
                    }
                ]
            },
            {
                title: 'ANM',
                items: [
                    {
                        title: 'Eligibility',
                        href: '/admission/anm/eligibility'
                    },
                    {
                        title: 'Admission Procedure',
                        href: '/admission/anm/admission-procedure'
                    },
                    {
                        title: 'Application Form',
                        href: '/admission/anm/application-form'
                    }
                ]
            }

        ]
    },
    {
        title: "Facilities",
        items: [
            {
                title: 'Infrastructure',
                href: '/facilities/infrastructure'
            },
            {
                title: 'Teaching and learning',
                items: [
                    {
                        title: 'Hospital',
                        href: '/facilities/teaching-and-learning/hospital'
                    },
                    {
                        title: 'Community',
                        href: '/facilities/teaching-and-learning/community'
                    },
                    {
                        title: 'Laboratories',
                        items: [
                            {
                                title: 'Fundamnetal of Nursing Lab',
                                href: '/facilities/teaching-and-learning/laboratories/fundamental-of-nursing-lab'
                            },
                            {
                                title: 'Community Health Nursing Lab',
                                href: '/facilities/teaching-and-learning/laboratories/community-health-nursing-lab'
                            },
                            {
                                title: 'Computer Lab',
                                href: '/facilities/teaching-and-learning/laboratories/computer-lab'
                            }
                        ]
                    },
                    {
                        title: 'Library',
                        items: [
                            {
                                title: 'Helinet',
                                href: '/facilities/teaching-and-learning/library/helinet'
                            },
                            {
                                title: 'Digital Library',
                                href: '/facilities/teaching-and-learning/library/digital-library'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Placement",
        href: '/placement'
    },
    {
        title: "Contact Us",
        href: "/contact-us",
    },
    {
        title: "Gallery",
        href: "/gallery",
    }
]; 