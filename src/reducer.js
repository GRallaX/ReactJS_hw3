export const actionTypes = {
  EDIT_VALUE: "EDIT_VALUE",
  NEXT_STEP: "NEXT_STEP",
  PREVIOUS_STEP: "PREVIOUS_STEP",
  SUBMIT_DATA: "SUBMIT_DATA",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
  CHANGE_THEME: "CHANGE_THEME",
};

export const initalState = {
  currentStep: 1,
  dataSubmitted: false,
  registrationSteps: [
    {
      name: { value: "", type: "text", label: "Name" },
      surname: { value: "", type: "text", label: "Surname" },
      email: { value: "", type: "email", label: "Email" },
    },
    {
      city: { value: "", type: "text", label: "City" },
      street: { value: "", type: "text", label: "Street" },
      building: { value: "", type: "text", label: "Building" },
    },
    {
      photo: { value: "", type: "file", label: "Upload photo" },
    },
    {
      password: { value: "", type: "password", label: "Password" },
      confirmPassword: {
        value: "",
        type: "password",
        label: "Confirm password",
      },
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.EDIT_VALUE: {
      const newRegSteps = [...state.registrationSteps];
      const newStep = { ...newRegSteps[state.currentStep - 1] };
      const newInputData = {
        ...newStep[action.payload.infoType],
        value: action.payload.value,
      };
      newStep[action.payload.infoType] = newInputData;

      newRegSteps.splice(state.currentStep - 1, 1, newStep);

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

    case actionTypes.SUBMIT_DATA: {
      return { ...state, dataSubmitted: !state.dataSubmitted };
    }

    default:
      return state;
  }
};
