import React from "react";
import CourseDescription from "./_components/course-description";

export default async function BasicBscNursingDescriptionPage({
    params,
}: {
    params: Promise<{ courses: string }>
}) {
    const { courses } = await params;

    if (courses === "basic-bsc-nursing") {
        return (
            <CourseDescription courseTitle="B.Sc." courseDuration={4} />
        )
    }
    else if (courses === "gnm") {
        return (
            <CourseDescription courseTitle="GNM" courseDuration={3} />
        )

    }
    else if (courses === "anm") {
        return (
            <CourseDescription courseTitle="ANM" courseDuration={2} />
        )
    }
    else return null
} 