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
        image: "/courses/2.jpeg",
        intake: 60,
        duration: "3 Years",
        href: "/courses/gnm/course-description"
    },
    {
        title: "Basic B.Sc. Nursing",
        image: "/courses/3.jpeg",
        intake: 50,
        duration: "4 Years",
        href: "/courses/basic-bsc-nursing/course-description"
    },
    {
        title: "Auxiliary Nursing Midwifery (ANM)",
        image: "/courses/1.jpeg",
        intake: 60,
        duration: "2 Years",
        href: "/courses/anm/course-description"
    },

]