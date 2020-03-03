// == Imports NPM
import { connect } from "react-redux";

// == Imports locaux
import Messages from "src/components/Messages";

// == Branchements
const mapStateToProps = state => ({
  messages: state.messages
});

// modification
const mapDispatchToProps = {};

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
