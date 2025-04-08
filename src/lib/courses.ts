export interface CourseProps {
    title: string
    image: string
    intake: number
    duration: string
    href: string
}

export const courses: CourseProps[] = [
    {
        title: "General Nursing & Midwifery (GNM)",
        image: "/images/gnm-students.png",
        intake: 60,
        duration: "3 Years",
        href: "/courses/gnm/course-description"
    },
    {
        title: "Basic B.Sc. Nursing",
        image: "/images/bsc-nursing-students.png",
        intake: 50,
        duration: "4 Years",
        href: "/courses/basic-bsc-nursing/course-description"
    },
    {
        title: "Auxiliary Nursing Midwifery (ANM)",
        image: "/images/post-certificate-students.png",
        intake: 60,
        duration: "2 Years",
        href: "/courses/anm/course-description"
    },

]