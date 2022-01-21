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
      return {
        ...state,
        registrationSteps: state.registrationSteps.map((inputData, index) => {
          if (index !== state.currentStep - 1) {
            return inputData;
          }
          if (action.payload.infoType in inputData) {
            const key = action.payload.infoType;
            return {
              ...inputData,
              [key]: { ...inputData[key], value: action.payload.value },
            };
          } else {
            return inputData;
          }
        }),
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
