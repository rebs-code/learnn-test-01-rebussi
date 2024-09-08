// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default function GameModeSelector({ currentMode, onSelectMode }) {
  const handleModeChange = (event) => {
    const mode = event.target.value;
    onSelectMode(mode);
  };

  return (
    <div className="p-6 mx-auto w-full max-w-md rounded-lg shadow-lg bg-slate-800">
      <h2 className="mb-4 text-2xl font-bold text-center text-slate-200">
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
