import { connect } from "react-redux";

import TogglePseudoFormButton from "src/components/TogglePseudoFormButton";
import { changeIsDisplayedForm } from "src/actions";

const mapStateToProps = state => ({
  isDisplayedForm: state.isDisplayedForm
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TogglePseudoFormButton);
