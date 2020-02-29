import React from "react";
import PropTypes from "prop-types";

const TogglePseudoFormButton = ({ isDisplayedForm, changeIsDisplayedForm }) => {
  const handleClick = () => {
    changeIsDisplayedForm();
  };
  return (
    <div id="toggle-pseudo-form-div">
      {isDisplayedForm ? (
        <button onClick={handleClick} type="button" id="hide-form">
          Hide Form
        </button>
      ) : (
        <button onClick={handleClick} type="button" id="show-form">
          Show Form
        </button>
      )}
    </div>
  );
};

TogglePseudoFormButton.propTypes = {
  isDisplayedForm: PropTypes.bool.isRequired,
  changeIsDisplayedForm: PropTypes.func.isRequired
};

export default TogglePseudoFormButton;
