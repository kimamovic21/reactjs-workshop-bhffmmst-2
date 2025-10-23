/**
 * STEP 3: Styling with CSS
 * 
 * Learn:
 * - How to link CSS files
 * - Using className
 * - Inline styles
 * - Component-specific styles
 */

import './Step3_Styling.css';

// Component with various styling approaches
function StyledCard({ title, color }) {
  // Inline styles (JavaScript object)
  const cardStyle = {
    backgroundColor: color,
    padding: '20px',
    borderRadius: '8px',
    color: 'white',
    margin: '10px 0'
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>This card uses inline styling!</p>
    </div>
  );
}

function Step3_Styling() {
  return (
    <div className="step-container">
      <h1>Step 3: Styling Components 🎨</h1>
      
      <div className="lesson-content">
        <h2>Ways to Style in React</h2>
        
        <div className="info-box">
          <h3>Three Main Approaches:</h3>
          <ol>
            <li><strong>CSS Files:</strong> Import and use className</li>
            <li><strong>Inline Styles:</strong> Use style attribute with objects</li>
            <li><strong>CSS Modules:</strong> Scoped CSS (advanced)</li>
          </ol>
        </div>

        <h2>1. CSS Classes</h2>
        <div className="styled-box-blue">
          <p>This box is styled using a CSS class from Step3_Styling.css</p>
        </div>

        <div className="styled-box-green">
          <p>This is another CSS class with different colors!</p>
        </div>

        <h2>2. Inline Styles</h2>
        <StyledCard title="Blue Card" color="#3b82f6" />
        <StyledCard title="Purple Card" color="#8b5cf6" />
        <StyledCard title="Pink Card" color="#ec4899" />

        <h2>3. Combined Styling</h2>
        <div className="fancy-box" style={{ marginTop: '20px' }}>
          <p>This uses both a CSS class AND inline styles!</p>
        </div>

        <div className="example-box">
          <h3>Important Notes:</h3>
          <ul>
            <li>Use <code>className</code> instead of <code>class</code></li>
            <li>Inline styles use camelCase: <code>backgroundColor</code> not <code>background-color</code></li>
            <li>Inline style values are strings: <code>'20px'</code> not <code>20px</code></li>
            <li>CSS files are better for complex styling</li>
          </ul>
        </div>

        <div className="example-box">
          <h3>Try This:</h3>
          <p>Create a StyledCard with your favorite color!</p>
        </div>
      </div>
    </div>
  );
}

export default Step3_Styling;
