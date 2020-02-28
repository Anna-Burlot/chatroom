import React from "react";
import PropTypes from "prop-types";

const PseudoForm = ({ changeCurrentAuthor, value, changeValue }) => {
  const handleSubmit = event => {
    event.preventDefault();
    changeCurrentAuthor();
  };

  const handleChange = event => {
    changeValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} id="pseudo-form">
      <input
        value={value}
        type="text"
        placeholder="pseudo"
        onChange={handleChange}
      />
    </form>
  );
};

PseudoForm.propTypes = {
  changeCurrentAuthor: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired
};

export default PseudoForm;
