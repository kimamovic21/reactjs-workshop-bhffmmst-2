import { useState } from 'react'
import './App.css'

// Import all step components
import Step1_BasicComponent from './steps/Step1_BasicComponent'
import Step2_Props from './steps/Step2_Props'
import Step3_Styling from './steps/Step3_Styling'
import Step4_Lists from './steps/Step4_Lists'
import Step5_State from './steps/Step5_State'
import Step6_Events from './steps/Step6_Events'
import Step7_FinalProject from './steps/Step7_FinalProject'
import StepComponent from './components/StepComponent'

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: 'Basic Component & JSX', component: <Step1_BasicComponent /> },
    { number: 2, title: 'Props', component: <Step2_Props /> },
    { number: 3, title: 'Styling', component: <Step3_Styling /> },
    { number: 4, title: 'Lists & Mapping', component: <Step4_Lists /> },
    { number: 5, title: 'State', component: <Step5_State /> },
    { number: 6, title: 'Events', component: <Step6_Events /> },
    { number: 7, title: 'Final Project', component: <Step7_FinalProject /> }
  ];

  const currentStepData = steps.find(step => step.number === currentStep);

  return (
    <div className="app">
      <header className="app-header">
        <h1>⚛️ React Workshop 2025</h1>
        <p className="subtitle">Step-by-Step Learning Guide</p>
      </header>

      <nav className="step-navigation">
        <div className="step-buttons">
          {steps.map(step => (
            <StepComponent
              step={step}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          ))}
        </div>
      </nav>

      <main className="main-content">
        {currentStepData.component}
      </main>

      <div className="navigation-controls">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="nav-btn prev-btn"
        >
          ← Previous
        </button>
        <span className="step-indicator">
          Step {currentStep} of {steps.length}
        </span>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
          disabled={currentStep === steps.length}
          className="nav-btn next-btn"
        >
          Next →
        </button>
      </div>

      <footer className="app-footer">
        <p>💡 Tip: Open the browser console (F12) to see console.log outputs!</p>
        <p>Made with ❤️ for learning React</p>
      </footer>
    </div>
  )
}

export default App
