export interface TestimonialProps {
    id: number;
    name: string;
    batch: string;
    content: string;
    imageUrl: string;
}

export const testimonials: TestimonialProps[] = [
    {
        id: 1,
        name: "Rajesh Kumar",
        batch: "B.SC Nursing ",
        content: "I'm currently studying at Vaidehi Institute of Nursing & Higher Education. The program offers extensive clinical duty hours which has helped me gain valuable hands-on experience. I'm getting excellent clinical exposure that's preparing me for my future career. The skills I'm learning at VINS & RC are comprehensive and practical. I'm thankful to Vaidehi for providing such a strong foundation that will help me work confidently as a nurse after graduation.",
        imageUrl: "/testimonials/4.jpeg"
    },
    {
        id: 2,
        name: "Priya Sharma",
        batch: "B.SC Nursing ",
        content: "I am currently studying at Vaidehi Institute of Nursing & Higher Education. I'm gaining excellent clinical experience in the Emergency Department as part of my training. The hands-on experience I'm receiving is invaluable. I'm confident that the skills I'm learning at Vaidehi will prepare me to work effectively as a nurse after graduation. The faculty's guidance and support during clinical postings has been exceptional.",
        imageUrl: "/testimonials/3.jpeg"
    },
    {
        id: 3,
        name: "Abhiram P.S",
        batch: "(GNM )",
        content: "I'm currently studying GNM at Vaidehi Institute of Nursing & Higher Education. The college provides exceptional clinical exposure that is enhancing my skills and building my confidence. I'm getting valuable hands-on experience and opportunities to work with renowned hospitals. The faculty's guidance and support during clinical postings has been invaluable. I'm grateful for the solid foundation in nursing that this college is providing me, and I appreciate how they are shaping me into a competent nursing professional.",
        imageUrl: "/testimonials/1.jpeg"
    },
    {
        id: 4,
        name: "Sharon Sara Pradeep",
        batch: "Post Basic B.SC Nursing ",
        content: "I'm currently pursuing my Post Basic B.SC Nursing at Vaidehi Institute of Nursing & Higher Education. The program has exceeded my expectations with its comprehensive curriculum and excellent faculty. The clinical rotations provide me with diverse patient care experiences that are strengthening my practical skills. The supportive learning environment at Vaidehi has helped me grow both professionally and personally. I'm confident that the education I'm receiving here will prepare me well for advanced nursing roles in the healthcare industry.",
        imageUrl: "/testimonials/2.jpeg"
    },

]; 