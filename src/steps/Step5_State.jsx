/**
 * STEP 5: State Management
 * 
 * Learn:
 * - What is state
 * - Using useState hook
 * - Updating state
 * - State vs Props
 */

import { useState } from 'react';

function Step5_State() {
  // useState returns [currentValue, functionToUpdateIt]
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guest');
  const [isVisible, setIsVisible] = useState(true);
  const [likes, setLikes] = useState(0);

  // Functions to update state
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="step-container">
      <h1>Step 5: State Management 🔄</h1>
      
      <div className="lesson-content">
        <h2>What is State?</h2>
        <p>
          State is data that can change over time. When state changes, 
          React automatically re-renders the component to show the new data!
        </p>

        <div className="info-box">
          <h3>State vs Props:</h3>
          <ul>
            <li><strong>Props:</strong> Passed from parent, read-only</li>
            <li><strong>State:</strong> Managed within component, can change</li>
          </ul>
          <h3>useState Syntax:</h3>
          <pre>const [value, setValue] = useState(initialValue);</pre>
        </div>

        <h2>Example 1: Counter</h2>
        <div className="state-demo">
          <h3>Count: {count}</h3>
          <div className="button-group">
            <button onClick={decrement}>- Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+ Increase</button>
          </div>
        </div>

        <h2>Example 2: Text Input</h2>
        <div className="state-demo">
          <h3>Hello, {name}!</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input-field"
          />
          <p className="hint">Type your name in the box above!</p>
        </div>

        <h2>Example 3: Toggle Visibility</h2>
        <div className="state-demo">
          <button onClick={toggleVisibility}>
            {isVisible ? 'Hide' : 'Show'} Message
          </button>
          {isVisible && (
            <div className="message-box">
              <p>👋 This message can be toggled!</p>
            </div>
          )}
        </div>

        <h2>Example 4: Like Button</h2>
        <div className="state-demo">
          <button 
            onClick={() => setLikes(likes + 1)}
            className="like-button"
          >
            ❤️ Like ({likes})
          </button>
        </div>

        <div className="example-box">
          <h3>Important Rules:</h3>
          <ul>
            <li>Never modify state directly: <code>count = 5</code> ❌</li>
            <li>Always use the setter function: <code>setCount(5)</code> ✅</li>
            <li>State updates trigger re-renders</li>
            <li>useState must be called at the top level of the component</li>
          </ul>
        </div>

        <div className="example-box">
          <h3>Try This:</h3>
          <p>Create your own state variable and button to update it!</p>
          <p>Ideas: Color changer, text transformer, simple game score, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default Step5_State;
