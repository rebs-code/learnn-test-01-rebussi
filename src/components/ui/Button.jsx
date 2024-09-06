import PropTypes from "prop-types";

export default function Button({ onClick, disabled, children, color }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 text-lg font-semibold rounded-lg shadow-md
        transition-colors duration-300 ease-in-out
        ${
          disabled
            ? "bg-slate-500 text-slate-300 cursor-not-allowed"
            : `bg-${color}-500 text-white hover:bg-${color}-700 active:bg-${color}-800`
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      `}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string,
};
