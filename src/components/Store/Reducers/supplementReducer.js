const initState = {
  submission: [
    {
      id: '1',
      supplementName: "Tart Cherry",
      benefit: "better sleep",
      description:
        "description 1 ",
      submittedBy: "Michael Norris",
      dateStamp: "7-18-20",
    },
    {
      id: '2',
      supplementName: "Vitamin D",
      benefit: "fighting off COVID-19",
      description:
        "description 2",
      submittedBy: "Ryan Norris",
      dateStamp: "7-18-20",
    },
  ],
};

const supplementReducer = (state = initState, action) => {
  return state;
};

export default supplementReducer;
