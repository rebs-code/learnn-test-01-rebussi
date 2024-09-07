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
