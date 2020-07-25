export const createSupplement = (supplement) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore
      .collection("supplements")
      .add({
        ...supplement,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId
      })
      .then(() => {
        dispatch({ type: "CREATE_SUPPLEMENT", supplement });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_SUPPLEMENT_ERROR", err });
      });
  };
};
