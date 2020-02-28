import { connect } from "react-redux";

import PseudoForm from "src/components/PseudoForm";
import { changePseudo, changeCurrentAuthor } from "src/actions";

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
      // const action = { type: 'CHANGE_MESSAGE', content: newValue };
      const action = changePseudo(newValue);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PseudoForm);
