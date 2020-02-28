// == action types
export const ADD_MESSAGE = "ADD_MESSAGE";
export const MODIFY_MESSAGE = "MODIFY_MESSAGE";
export const CHANGE_PSEUDO = "CHANGE_PSEUDO";
export const CHANGE_CURRENT_AUTHOR = "CHANGE_CURRENT_AUTHOR";
export const CHANGE_IS_DISPLAYED_FORM = "CHANGE_IS_DISPLAYED_FORM";

// == action creators
export const addMessage = () => ({
  type: ADD_MESSAGE
});

export const modifyMessage = message => ({
  type: MODIFY_MESSAGE,
  content: message
});

export const changePseudo = pseudo => ({
  type: CHANGE_PSEUDO,
  pseudo
});

export const changeCurrentAuthor = () => ({
  type: CHANGE_CURRENT_AUTHOR
});

export const changeIsDisplayedForm = isDisplayedForm => ({
  type: CHANGE_IS_DISPLAYED_FORM,
  isDisplayedForm
});
