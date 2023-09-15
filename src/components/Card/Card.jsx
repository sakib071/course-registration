import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types'


const Card = ({ course, addToCart, notify }) => {
    const { img, course_name, price, credit_hour, course_details } = course;
    return (
        <div className="card w-80 bg-base-100 shadow-xl p-5 rounded-xl">
           
        </div>
    );
};

Card.propTypes = {
    course: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired
}

export default Card;