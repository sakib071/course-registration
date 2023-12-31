import { useState } from 'react'
import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast.warn("Can't add more than 20 credit hours");
  const [cart, setCart] = useState([]);
  const maxCreditHour = 20;

  const addToCart = course => {
    console.log(course); const isCoursePresent = cart.find(cartItem => cartItem.id === course.id)
    if (isCoursePresent) {
      toast.error("Already Added to cart");
    }
    else {
      const totalCreditHour = cart.reduce((total, course) => total + course.credit_hour, 0);
      const courseCreditHour = course.credit_hour;
      if (totalCreditHour + courseCreditHour <= maxCreditHour) {
        const newCart = [...cart, course];
        setCart(newCart);
      }
      else {
        notify();
      }
    }
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex justify-between'>
        <Courses addToCart={addToCart}></Courses>
        <CourseCart cart={cart} notify={notify}></CourseCart>
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
