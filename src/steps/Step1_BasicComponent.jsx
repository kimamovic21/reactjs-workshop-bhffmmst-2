/**
 * STEP 1: Basic Component & JSX
 * 
 * Learn:
 * - What is a component
 * - JSX syntax
 * - How to create a simple component
 * - Returning JSX from a component
 */

// This is a React component - a function that returns JSX
function Step1_BasicComponent() {
  // JSX looks like HTML, but it's actually JavaScript!
  // Notice how we return a single parent element

  return (
    <div className="step-container">
      <h1>Step 1: Welcome to React! 👋</h1>
      
      <div className="lesson-content">
        <h2>What is a Component?</h2>
        <p>
          A component is a reusable piece of UI. Think of it like a LEGO block - 
          you can use it multiple times and combine it with other components.
        </p>

        <h2>What is JSX?</h2>
        <p>
          JSX is a syntax that looks like HTML but works in JavaScript. 
          It makes writing UI code much easier!
        </p>

        <div className="info-box">
          <h3>Important JSX Rules:</h3>
          <ul>
            <li>Components must return a single parent element</li>
            <li>Use <code>className</code> instead of <code>class</code></li>
            <li>All tags must be closed (even <code>&lt;img /&gt;</code>)</li>
            <li>Use camelCase for attributes (onClick, not onclick)</li>
          </ul>
        </div>

        <div className="example-box">
          <h3>Try This:</h3>
          <p>Add your own heading or paragraph below this text!</p>
          {/* Students can add their code here */}
        </div>
      </div>
    </div>
  );
}

export default Step1_BasicComponent;
