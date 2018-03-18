export const selectLibrary = (libraryId) => {
  // creates and object with type property/action
  return {
    type: 'select_library',
    payload: libraryId
  };
}; // this wrapper/function is an action creator
