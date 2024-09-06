export default function Button({ onClick, disabled, children }) {
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
            : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
      `}
    >
      {children}
    </button>
  );
}
