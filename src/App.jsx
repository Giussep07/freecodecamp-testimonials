import './App.css'
import Testimonial from './components/testimonial'
import { testimonials } from './components/data'

function App() {

  const testimonialsList = testimonials.map((testimonial, index) => {
    return (
      <Testimonial key={index} testimonial={testimonial} />
    );
  });

  return (
    <>
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimonialsList}
      </div>
    </>
  )
}

export default App
