import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'

const Courses = ({ addToCart }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="grid grid-cols-3 gap-5 mx-auto">
            {
                courses.map(course =>
                    <Card
                        key={course.id}
                        course={course}
                        addToCart={addToCart}
                    ></Card>)
            }
        </div >
    );
};

Courses.propTypes = {
    addToCart: PropTypes.func.isRequired
}

export default Courses;