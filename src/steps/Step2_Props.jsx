/**
 * STEP 2: Props (Properties)
 * 
 * Learn:
 * - What are props
 * - How to pass data to components
 * - How to use props in components
 * - Making components reusable
 */

import SafetCard from "../components/SafetCard";

// A component that receives props
function Greeting(props) {
  return (
    <div className="greeting-card">
      <h3>Hello, {props.name}! 👋</h3>
      <p>You are {props.age} years old.</p>
      <p>Hobby: {props.hobby}</p>
    </div>
  );
}

// A component with props destructuring (cleaner way)
function CourseCard({ title, instructor, duration, difficulty }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Difficulty:</strong> {difficulty}</p>
    </div>
  );
}

function Step2_Props() {
  return (
    <div className="step-container">
      <h1>Step 2: Props - Passing Data 📦</h1>
      
      <div className="lesson-content">
        <h2>What are Props?</h2>
        <p>
          Props (short for "properties") are how we pass data from a parent 
          component to a child component. They make components reusable!
        </p>

        <div className="info-box">
          <h3>Key Points:</h3>
          <ul>
            <li>Props are passed like HTML attributes</li>
            <li>Props are read-only (cannot be changed by the child)</li>
            <li>Props can be strings, numbers, arrays, objects, or even functions</li>
            <li>Use curly braces &#123;&#125; for non-string values</li>
          </ul>
        </div>

        <h2>Example: Greeting Cards</h2>
        <div className="examples">
          <Greeting name="Ana" age={20} hobby="Photography" />
          <Greeting name="Marko" age={22} hobby="Gaming" />
          <Greeting name="Petra" age={21} hobby="Reading" />
        </div>

        <h2>Example: Course Cards</h2>
        <div className="examples">
          <CourseCard 
            title="React Basics" 
            instructor="Ahmed"
            duration="3 hours"
            difficulty="Beginner"
          />
          <CourseCard 
            title="Advanced CSS" 
            instructor="Sarah"
            duration="4 hours"
            difficulty="Intermediate"
          />
        </div>

        <div className="example-box">
          <h3>Try This:</h3>
          <p>Create your own Greeting or CourseCard with different props!</p>
          {/* Students can add their code here */}
          <SafetCard title="1984." author="George Orwell" year={1918} />
        </div>
      </div>
    </div>
  );
}

export default Step2_Props;
