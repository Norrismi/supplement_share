export const createSupplement = (supplement) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("supplements")
      .add({
        ...supplement,
      })
      .then(() => {
        dispatch({ type: "CREATE_SUPPLEMENT", supplement });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_SUPPLEMENT_ERROR", err });
      });
  };
};
