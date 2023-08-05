import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-7xl font-bold">Our Works</h1>
      {children}
    </div>
  );
};

export default layout;
