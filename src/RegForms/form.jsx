import { useContext } from "react";
import { InputContext } from "../App";
import { actionTypes } from "../reducer";

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

  console.log(state.registrationSteps);

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

  const inputsForRender = [];

  for (let key in inputsParams) {
    const input = (
      <div key={key}>
        <label className="lbl" htmlFor={key}>
          {key}
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

  return (
    <form className="reg_form">
      <h2>Шаг {state.currentStep}</h2>
      {inputsForRender}
      {state.currentStep > 1 && (
        <button type="button " onClick={handlePreviousStep}>
          Previous
        </button>
      )}
      {state.registrationSteps.length > state.currentStep && (
        <button type="submit" onClick={handleNextStep}>
          Next
        </button>
      )}
    </form>
  );
};
