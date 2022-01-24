import { useContext } from "react";
import { InputContext } from "./App";
import { actionTypes } from "./reducer";

export const FirstForm = () => {
  const { state, dispatch } = useContext(InputContext);
  const inputsParams = state.registrationSteps[state.currentStep - 1];

  const handleChangeValue = (e, infoType) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.EDIT_VALUE,
      payload: { value: e.target.value, infoType: infoType },
    });
  };

  const handlePreviousStep = e => {
    e.preventDefault();
    dispatch({
      type: actionTypes.PREVIOUS_STEP,
    });
  };
  const handleNextStep = e => {
    e.preventDefault();
    dispatch({
      type: actionTypes.NEXT_STEP,
    });
  };

  const handleSubmitData = e => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SUBMIT_DATA,
    });
  };

  const inputsForRender = [];

  for (let key in inputsParams) {
    const input = (
      <div className="input_container" key={key}>
        <label className="lbl" htmlFor={key}>
          {inputsParams[key].label}
        </label>
        <input
          className="inp"
          defaultValue={inputsParams[key].value}
          type={inputsParams[key].type}
          id={key}
          onChange={e => handleChangeValue(e, key)}
        />
      </div>
    );

    inputsForRender.push(input);
  }

  if (!state.dataSubmitted) {
    return (
      <form className="reg_form">
        <div className="data_wrapper">
          <h2>Step {state.currentStep}</h2>
          {inputsForRender}
        </div>
        <div className="buttons">
          {state.currentStep > 1 && (
            <button type="button " onClick={handlePreviousStep}>
              Previous
            </button>
          )}
          {state.registrationSteps.length > state.currentStep && (
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          )}

          {state.registrationSteps.length === state.currentStep && (
            <button type="submit" onClick={handleSubmitData}>
              Submit
            </button>
          )}
        </div>
      </form>
    );
  } else {
    return (
      <form className="reg_form">
        <div className="data_wrapper">
          <h2>
            Thank you for <br />
            registering with us
          </h2>
          <div className="data_verif">
            {state.registrationSteps.map(step => {
              const infoForRender = [];
              for (let input in step) {
                if (
                  step[input].value &&
                  (step[input].type === "text" || step[input].type === "email")
                ) {
                  infoForRender.push(
                    <span key={step[input].label}>
                      <strong>{`${step[input].label}: `}</strong>
                      {`${step[input].value}`}
                    </span>
                  );
                }
              }
              return infoForRender;
            })}
          </div>
        </div>
        <div className="buttons">
          <button type="button " onClick={handleSubmitData}>
            Edit
          </button>
        </div>
      </form>
    );
  }
};
