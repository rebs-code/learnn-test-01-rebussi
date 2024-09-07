import PropTypes from "prop-types";

export default function Button({ onClick, disabled, children, color }) {
  const colorClasses = {
    teal: "bg-teal-500 hover:bg-teal-700 active:bg-teal-800",
    amber: "bg-amber-500 hover:bg-amber-700 active:bg-amber-800",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 text-lg font-semibold rounded-lg shadow-md capitalize
        transition-colors duration-300 ease-in-out
        ${
          disabled
            ? "cursor-not-allowed bg-slate-500 text-slate-300"
            : `text-white ${colorClasses[color] || colorClasses.teal}`
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
