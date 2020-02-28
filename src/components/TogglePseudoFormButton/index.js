import React from "react";
import PropTypes from "prop-types";

const TogglePseudoFormButton = ({ isDisplayedForm }) => {
  const handleClick = () => {
    console.log(isDisplayedForm);
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
  isDisplayedForm: PropTypes.bool.isRequired
};

export default TogglePseudoFormButton;
