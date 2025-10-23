/**
 * STEP 6: Event Handling
 * 
 * Learn:
 * - Handling user interactions
 * - onClick, onChange, onSubmit
 * - Event object
 * - Controlled components
 */

import { useState } from 'react';

function Step6_Events() {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [selectedColor, setSelectedColor] = useState('#3b82f6');

  // Event handler for button click
  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert('Button clicked!');
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    setSubmittedText(inputValue);
    setInputValue(''); // Clear input
  };

  // Event handler with parameter
  const showMessage = (message) => {
    alert(message);
  };

  return (
    <div className="step-container">
      <h1>Step 6: Event Handling 🖱️</h1>
      
      <div className="lesson-content">
        <h2>What are Events?</h2>
        <p>
          Events are actions that happen in the browser - clicks, typing, 
          submitting forms, etc. React makes it easy to respond to these events!
        </p>

        <div className="info-box">
          <h3>Common Events:</h3>
          <ul>
            <li><code>onClick</code> - When element is clicked</li>
            <li><code>onChange</code> - When input value changes</li>
            <li><code>onSubmit</code> - When form is submitted</li>
            <li><code>onMouseEnter</code> - When mouse enters element</li>
            <li><code>onFocus</code> - When element gets focus</li>
          </ul>
        </div>

        <h2>Example 1: Click Events</h2>
        <div className="state-demo">
          <button onClick={handleClick}>
            Click Me!
          </button>
          <p>Clicked {clickCount} times</p>
        </div>

        <h2>Example 2: Inline Event Handlers</h2>
        <div className="state-demo">
          <div className="button-group">
            <button onClick={() => showMessage('Hello!')}>
              Say Hello
            </button>
            <button onClick={() => showMessage('Goodbye!')}>
              Say Goodbye
            </button>
            <button onClick={() => showMessage('How are you?')}>
              Ask Question
            </button>
          </div>
        </div>

        <h2>Example 3: Form Submission</h2>
        <div className="state-demo">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
              className="input-field"
            />
            <button type="submit">Submit</button>
          </form>
          {submittedText && (
            <p className="success-message">
              You submitted: <strong>{submittedText}</strong>
            </p>
          )}
        </div>

        <h2>Example 4: Select/Dropdown</h2>
        <div className="state-demo">
          <select 
            value={selectedColor} 
            onChange={(e) => setSelectedColor(e.target.value)}
            className="select-field"
          >
            <option value="#3b82f6">Blue</option>
            <option value="#ef4444">Red</option>
            <option value="#10b981">Green</option>
            <option value="#f59e0b">Orange</option>
            <option value="#8b5cf6">Purple</option>
          </select>
          <div 
            className="color-preview"
            style={{ backgroundColor: selectedColor }}
          >
            Selected Color
          </div>
        </div>

        <h2>Example 5: Mouse Events</h2>
        <div className="state-demo">
          <div 
            className="hover-box"
            onMouseEnter={() => console.log('Mouse entered!')}
            onMouseLeave={() => console.log('Mouse left!')}
          >
            Hover over me! (Check console)
          </div>
        </div>

        <div className="example-box">
          <h3>Important Notes:</h3>
          <ul>
            <li>Event names are camelCase: <code>onClick</code>, not <code>onclick</code></li>
            <li>Pass function reference: <code>onClick=&#123;handleClick&#125;</code></li>
            <li>For inline with params: <code>onClick=&#123;() =&gt; func(param)&#125;</code></li>
            <li>Use <code>event.preventDefault()</code> to stop default behavior</li>
            <li>The event object (e) contains info about the event</li>
          </ul>
        </div>

        <div className="example-box">
          <h3>Try This:</h3>
          <p>Create a form that collects user information (name, email, message) and displays it when submitted!</p>
        </div>
      </div>
    </div>
  );
}

export default Step6_Events;
