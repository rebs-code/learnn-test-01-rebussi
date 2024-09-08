// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default function ResultDisplay({ result }) {
  return (
    <div className="flex justify-center items-center">
      {result && <p className="game-status-message">{result}</p>}
    </div>
  );
}

ResultDisplay.propTypes = {
  result: PropTypes.string,
};
