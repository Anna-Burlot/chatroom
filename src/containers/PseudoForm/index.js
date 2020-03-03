import { connect } from "react-redux";

import PseudoForm from "src/components/PseudoForm";
import {
  changePseudo,
  changeCurrentAuthor,
  changeIsDisplayedForm
} from "src/actions";

const mapStateToProps = state => {
  return {
    value: state.newAuthorValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentAuthor: () => {
      dispatch(changeCurrentAuthor());
    },
    changeValue: newValue => {
      const action = changePseudo(newValue);
      dispatch(action);
    },
    changeIsDisplayedForm: () => {
      dispatch(changeIsDisplayedForm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PseudoForm);
