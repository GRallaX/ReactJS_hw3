export const actionTypes = {
  EDIT_VALUE: "EDIT_VALUE",
  NEXT_STEP: "NEXT_STEP",
  PREVIOUS_STEP: "PREVIOUS_STEP",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
  CHANGE_THEME: "CHANGE_THEME",
};

export const initalState = {
  currentStep: 1,
  registrationSteps: [
    {
      name: { value: "", type: "text" },
      surname: { value: "", type: "text" },
      email: { value: "", type: "email" },
    },
    {
      city: { value: "", type: "text" },
      street: { value: "", type: "text" },
      building: { value: "", type: "text" },
    },
    {
      photo: { value: "", type: "file" },
    },
    {
      password: { value: "", type: "password" },
      confirmPassword: { value: "", type: "password" },
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.EDIT_VALUE: {
      const newRegSteps = [...state.registrationSteps];
      const newInputData = {
        ...newRegSteps[state.currentStep - 1][action.payload.infoType],
        value: action.payload.value,
      };
      newRegSteps.splice(state.currentStep - 1, 1, newInputData);

      return {
        ...state,
        registrationSteps: newRegSteps,
      };
    }
    case actionTypes.NEXT_STEP: {
      return { ...state, currentStep: state.currentStep + 1 };
    }
    case actionTypes.PREVIOUS_STEP: {
      return { ...state, currentStep: state.currentStep - 1 };
    }

    default:
      return state;
  }
};
