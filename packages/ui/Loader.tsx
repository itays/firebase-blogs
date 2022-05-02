import React from "react";

export { Loader };

export type LoaderProps = {
  show: boolean;
};

const Loader: React.FC<LoaderProps> = ({ show }) => {
  return show ? <div className="loader"></div> : null;
};
