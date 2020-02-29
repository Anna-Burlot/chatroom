import { connect } from "react-redux";

import Chat from "src/components/Chat";

const mapStateToProps = state => {
  return {
    isDisplayedForm: state.isDisplayedForm
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
