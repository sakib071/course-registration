import { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect((
        () => {
            fetch('course.json')
                .then(res => res.json())
                .then(data => setCourses(data))
        }
    ), []);

    return (
        <div className="grid grid-cols-3 gap-5 mx-auto">
            {
                courses.map(course =>
                    <Card
                        key={course.id}
                        course={course}
                    ></Card>)
            }
        </div>
    );
};

export default Courses;