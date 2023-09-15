import PropTypes from 'prop-types';

const CourseCart = ({ cart }) => {

    const totalPrice = cart.reduce((total, course) => total + course.price, 0);

    const totalCreditHours = cart.reduce((total, course) => total + course.credit_hour, 0);
    const maxCreditHours = 20;
    const creditHoursLeft = maxCreditHours - totalCreditHours;

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl p-5 rounded-xl">
                <div className="card-body space-y-3">
                    <h2 className="card-title text-lg font-bold text-blue-600">Credit Hour Remaining : {creditHoursLeft}hr</h2>
                    <hr />
                    <p className="text-xl font-bold">Course Name</p>
                    <ul className="text-gray-500 list-decimal list-inside">
                        {cart.map(course =>
                            <li key={course.id} className="p-1 text-sm rounded-md">
                                {course.course_name}
                            </li>)}

                    </ul>
                    <hr />
                    <p className="text-sm font-semibold">Total Credit Hour : {totalCreditHours}</p>
                    <hr />
                    <p className="text-sm font-semibold">Total Price : {totalPrice} USD</p>
                </div>
            </div>
        </div>
    );
};

CourseCart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default CourseCart;