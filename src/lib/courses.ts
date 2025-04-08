export interface CourseProps {
    title: string
    image: string
    intake: number
    duration: string
    href: string
}

export const courses: CourseProps[] = [
    {
        title: "General Nursing & Midwifery",
        image: "/images/gnm-students.png",
        intake: 100,
        duration: "3 Years",
        href: "/courses/general-nursing-and-midwifery/course-description"
    },
    {
        title: "Basic B.Sc. Nursing",
        image: "/images/bsc-nursing-students.png",
        intake: 100,
        duration: "4 Years",
        href: "/courses/basic-bsc-nursing/course-description"
    },
    {
        title: "Post Certificate B.Sc. Nursing",
        image: "/images/post-certificate-students.png",
        intake: 40,
        duration: "2 Years",
        href: "/courses/post-certificate-bsc-nursing/course-description"
    },
    {
        title: "M.Sc. Nursing",
        image: "/images/msc-nursing-students.jpg",
        intake: 25,
        duration: "2 Years",
        href: "/courses/msc-nursing/course-description"
    }
]