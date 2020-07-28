export const createSupplement = (supplement) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("supplements")
      .add({
        ...supplement,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
      })
      .then(() => {
        dispatch({ type: "CREATE_SUPPLEMENT", supplement });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_SUPPLEMENT_ERROR", err });
      });
  };
};

export const deleteSupplement = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("supplements")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_SUPPLEMENT", id });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_SUPPLEMENT_ERROR", err });
      });
  };
};
