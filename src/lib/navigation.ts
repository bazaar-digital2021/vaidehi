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
                items: [
                    {
                        title: 'Management',
                        href: '/about-us/management',
                    },
                    {
                        title: "Founder's Message",
                        href: '/about-us/founders-message',
                    },
                    {
                        title: "Chaiperson's Message",
                        href: '/about-us/chaiperson-message',
                    },
                    {
                        title: "Principal's Message",
                        href: '/about-us/principal-message',
                    }
                ]
            }
        ],
    },
    {
        title: "Courses",
        items: [
            {
                title: "General Nursing and Midwifery",
                items: [
                    {
                        title: 'Course Description',
                        href: '/courses/general-nursing-and-midwifery/course-description',
                    },
                    {
                        title: 'Curriculum',
                        href: '/courses/general-nursing-and-midwifery/curriculum',
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
                title: 'General Nursing and Midwifery',
                items: [
                    {
                        title: 'Eligibility',
                        href: '/admission/general-nursing-and-midwifery/eligibility'
                    },
                    {
                        title: 'Admission Procedure',
                        href: '/admission/general-nursing-and-midwifery/admission-procedure'
                    },
                    {
                        title: 'Application Form',
                        href: '/admission/general-nursing-and-midwifery/application-form'
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
                title: 'Post Basic B.sc Nursing',
                items: [
                    {
                        title: 'Eligibility',
                        href: '/admission/post-basic-bsc-nursing/eligibility'
                    },
                    {
                        title: 'Admission Procedure',
                        href: '/admission/post-basic-bsc-nursing/admission-procedure'
                    },
                    {
                        title: 'Application Form',
                        href: '/admission/post-basic-bsc-nursing/application-form'
                    }
                ]
            },
            {
                title: 'M.sc Nursing',
                items: [
                    {
                        title: 'Eligibility',
                        href: '/admission/msc-nursing/eligibility'
                    },
                    {
                        title: 'Admission Procedure',
                        href: '/admission/msc-nursing/admission-procedure'
                    },
                    {
                        title: 'Application Form',
                        href: '/admission/msc-nursing/application-form'
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