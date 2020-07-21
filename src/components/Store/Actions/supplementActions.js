export const createSupplement = (supplement) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_SUPPLEMENT', supplement})
    }
}























