import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ course }) => {
    const { img, course_name, price, credit_hour, course_details } = course;
    return (
        <div className="card w-80 bg-base-100 shadow-xl p-5 rounded-xl">
            <figure><img src={img} /></figure>
            <div className="card-body mt-5">
                <h2 className="card-title text-xl font-bold">{course_name}</h2>
                <p className='text-justify text-gray-600 mb-5'>{course_details}</p>

                <div className='flex justify-between mt-3'>
                    <p>Price: {price}</p>
                    <p>Credit: {credit_hour}</p>
                </div>

                <div className="flex justify-center mt-4">
                    <button className="bg-blue-600 text-white px-28 py-1.5 rounded-md">Select</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object.isRequired
}

export default Card;