import './App.css'
import CourseCart from './components/CourseCart/CourseCart'
import Courses from './components/Courses/Courses'
import Header from './components/Header'

function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex justify-between'>
        <Courses></Courses>
        <CourseCart></CourseCart>
      </div>

    </div>
  )
}

export default App
