const StepComponent = ({ step, currentStep, setCurrentStep }) => {
  return (
    <button
        key={step.number}
        className={`step-btn ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
        onClick={() => setCurrentStep(step.number)}
    >
        <span className="step-number">{step.number}</span>
        <span className="step-title">{step.title}</span>
    </button>
  )
}

export default StepComponent