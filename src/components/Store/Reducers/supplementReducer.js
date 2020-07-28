const initState = {
  submission: [
    {
      id: "1",
      supplementName: "Tart Cherry",
      benefit: "better sleep",
      description: "description 1 ",
      submittedBy: "Michael Norris",
      dateStamp: "7-18-20",
    },
    {
      id: "2",
      supplementName: "Vitamin D",
      benefit: "fighting off COVID-19",
      description: "description 2",
      submittedBy: "Ryan Norris",
      dateStamp: "7-18-20",
    },
  ],
};

const supplementReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_SUPPLEMENT":
      console.log("createdSupplement", action.supplement);
      return state;
    case "CREATE_SUPPLEMENT_ERROR":
      console.log("CREATE_SUPPLEMENT_ERROR", action.err);
      return state;

    case 'DELETE_SUPPLEMENT':
      console.log("DELETE_SUPPLEMENT")
      return state;
      case 'DELETE_SUPPLEMENT_ERROR':
        console.log("DELETE_SUPPLEMENT_ERROR", action.err)
        return state;

    default:
      return state;
  }
};

export default supplementReducer;

// CREATE_SUPPLEMENT

// CREATE_SUPPLEMENT_ERROR
