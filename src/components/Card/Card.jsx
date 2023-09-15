import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types'


const Card = ({ course, addToCart, notify }) => {
    const { img, course_name, price, credit_hour, course_details } = course;
    return (
        <div className="card w-80 bg-base-100 shadow-xl p-5 rounded-xl">
            <figure ><img className='w-full h-[150px] rounded-lg' src={img} /></figure>
            <div className="card-body mt-5">
                <h2 className="card-title text-xl font-bold">{course_name}</h2>
                <p className='text-justify text-gray-600 mb-5'>{course_details}</p>

                <div className='flex justify-between mt-3'>
                    <p className='flex gap-2 items-center'><FiDollarSign className='text-xl' />Price : {price}</p>
                    <p className='flex gap-2 items-center'>< BsBook className='text-xl' />Credit : {credit_hour}hr</p>
                </div>

                <div className="flex justify-center mt-4">
                    <button onClick={() => { addToCart(course), notify }} className="bg-blue-600 text-white px-28 py-1.5 rounded-md hover:bg-blue-700 transition-colors">Select</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired
}

export default Card;