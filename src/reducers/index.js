import {
  ADD_MESSAGE,
  MODIFY_MESSAGE,
  CHANGE_PSEUDO,
  CHANGE_CURRENT_AUTHOR,
  CHANGE_IS_DISPLAYED_FORM
} from "src/actions";
import { getNextId } from "src/selectors";

const initialState = {
  newMessageValue: "",
  newAuthorValue: "",
  currentAuthor: "Super Chat",
  isDisplayedForm: false,
  messages: [
    {
      id: 1,
      author: "Super Chat",
      content: "Salut"
    },
    {
      id: 2,
      author: "Super Chat",
      content: "Ça va ?"
    }
  ]
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // je déclare un noubel objet message
      const aNewMessage = {
        id: getNextId(state.messages),
        author: state.currentAuthor,
        content: state.newMessageValue
      };
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      const newMessages = [...state.messages, aNewMessage];
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        messages: newMessages,
        newMessageValue: ""
      };
    }
    case MODIFY_MESSAGE:
      return {
        ...state,
        newMessageValue: action.content
      };
    case CHANGE_PSEUDO:
      return {
        ...state,
        newAuthorValue: action.pseudo
      };
    case CHANGE_CURRENT_AUTHOR:
      return {
        ...state,
        currentAuthor: state.newAuthorValue,
        newAuthorValue: ""
      };
    case CHANGE_IS_DISPLAYED_FORM:
      return {
        ...state,
        isDisplayedForm: !state.isDisplayedForm
      };
    default:
      return state;
  }
};

export default reducer;
