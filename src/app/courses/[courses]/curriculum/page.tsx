import React from "react";
import Curriculum from "./_components/curriculum";


export default async function CurriculumPage({
    params,
}: {
    params: Promise<{ courses: string }>
}) {
    const { courses } = await params;
    if (courses === "basic-bsc-nursing") {
        return (
            <Curriculum courseTitle="B.Sc." courseDuration={4} />
        )
    }
    else if (courses === "gnm") {
        return (
            <Curriculum courseTitle="GNM" courseDuration={3} />
        )

    }
    else if (courses === "anm") {
        return (
            <Curriculum courseTitle="ANM" courseDuration={2} />
        )
    }
    else return null
} 