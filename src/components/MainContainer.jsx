// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default function MainContainer({ children }) {
  return (
    // main container
    <div className="flex justify-center items-center p-4 min-h-screen bg-gray-100">
      {/* smaller phone screen container */}
      <div className="overflow-hidden w-full max-w-md bg-white rounded-3xl shadow-xl">
        {/* main container content */}
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
