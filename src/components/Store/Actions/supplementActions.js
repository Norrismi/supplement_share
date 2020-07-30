import history from "../../../Utils/History";

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
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("supplements")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_SUPPLEMENT", id });
      })
      .then(() => {
        history.push("/MyPage");
      })
      .catch((err) => {
        dispatch({ type: "DELETE_SUPPLEMENT_ERROR", err });
      });
  };
};


export const shareSupplement = (id, supplement) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore()
    console.log(id, 'shareSupplement reached')

    firestore
    .collection("sharedSupplements")
    .add({
   ...supplement,
    sharedSupplement: id
    })
    .then(()=>{
      dispatch({type: "SHARE_SUPPLEMENT", id})
    }).catch((err)=> {
      dispatch({type: "SHARE_SUPPLEMENT_ERROR", err})
    })
  
  }
}