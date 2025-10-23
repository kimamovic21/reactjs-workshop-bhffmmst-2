/**
 * STEP 4: Lists & Mapping
 * 
 * Learn:
 * - How to render arrays
 * - Using map() function
 * - The importance of keys
 * - Dynamic list rendering
 */

// Component for a single student
function StudentCard({ name, grade, subject }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Grade: {grade}</p>
      <p>Favorite Subject: {subject}</p>
    </div>
  );
}

// Component for a simple list item
function FruitItem({ name, emoji }) {
  return (
    <li className="fruit-item">
      <span className="emoji">{emoji}</span> {name}
    </li>
  );
}

function Step4_Lists() {
  // Sample data arrays
  const fruits = [
    { id: 1, name: 'Apple', emoji: '🍎' },
    { id: 2, name: 'Banana', emoji: '🍌' },
    { id: 3, name: 'Orange', emoji: '🍊' },
    { id: 4, name: 'Grapes', emoji: '🍇' },
    { id: 5, name: 'Strawberry', emoji: '🍓' }
  ];

  const students = [
    { id: 1, name: 'Ana', grade: 'A', subject: 'Math' },
    { id: 2, name: 'Marko', grade: 'B', subject: 'History' },
    { id: 3, name: 'Petra', grade: 'A', subject: 'Science' },
    { id: 4, name: 'Ivan', grade: 'B', subject: 'Art' }
  ];

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'];

  return (
    <div className="step-container">
      <h1>Step 4: Lists & Mapping 📝</h1>
      
      <div className="lesson-content">
        <h2>Why Use Map?</h2>
        <p>
          When you have an array of data, you don't want to manually create 
          a component for each item. The <code>map()</code> function lets you 
          transform an array into an array of components!
        </p>

        <div className="info-box">
          <h3>Map Syntax:</h3>
          <pre>
{`array.map((item) => (
  <Component key={item.id} prop={item.value} />
))`}
          </pre>
          <h3>Key Points:</h3>
          <ul>
            <li>Always provide a unique <code>key</code> prop</li>
            <li>Keys help React identify which items changed</li>
            <li>Use IDs or unique values as keys (not array index if possible)</li>
            <li>Keys must be unique among siblings</li>
          </ul>
        </div>

        <h2>Example 1: Simple List</h2>
        <ul className="fruit-list">
          {fruits.map((fruit) => (
            <FruitItem 
              key={fruit.id} 
              name={fruit.name} 
              emoji={fruit.emoji} 
            />
          ))}
        </ul>

        <h2>Example 2: Student Cards</h2>
        <div className="examples">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              grade={student.grade}
              subject={student.subject}
            />
          ))}
        </div>

        <h2>Example 3: Simple Items</h2>
        <div className="color-list">
          {colors.map((color, index) => (
            <span key={index} className="color-tag">
              {color}
            </span>
          ))}
        </div>

        <div className="example-box">
          <h3>Try This:</h3>
          <p>Create your own array of objects and map them to components!</p>
          <p>Ideas: Books, Movies, Cities, Foods, etc.</p>
          {/* Students can add their code here */}
        </div>
      </div>
    </div>
  );
}

export default Step4_Lists;
