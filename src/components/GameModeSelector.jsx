import PropTypes from "prop-types";

export default function GameModeSelector({ currentMode, onSelectMode }) {
  const handleModeChange = (event) => {
    const mode = event.target.value;
    onSelectMode(mode);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-slate-200 text-center">
        Select Game Mode
      </h2>
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gameMode"
            value="humanVsHuman"
            checked={currentMode === "humanVsHuman"}
            onChange={handleModeChange}
            className="w-4 h-4"
          />
          <span className="text-slate-200">Human vs Human</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gameMode"
            value="humanVsPC"
            checked={currentMode === "humanVsPC"}
            onChange={handleModeChange}
            className="w-4 h-4"
          />
          <span className="text-slate-200">Human vs PC</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gameMode"
            value="PCvsPC"
            checked={currentMode === "PCvsPC"}
            onChange={handleModeChange}
            className="w-4 h-4"
          />
          <span className="text-slate-200">PC vs PC</span>
        </label>
      </div>
    </div>
  );
}

GameModeSelector.propTypes = {
  onSelectMode: PropTypes.string.isRequired,
  currentMode: PropTypes.string.isRequired,
};
