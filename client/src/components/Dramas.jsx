import React from "react";
import { Drama } from "./Drama";

export const Dramas = ({ dramas, filterDrama }) => {
  return (
    <>
      <div className="container">
        <h1 className="m-5 text-center sub-title">Your Dramas</h1>
        <div className="row">
          {dramas.map((drama, key) => {
            return <Drama drama={drama} key={key} filterDrama={filterDrama} />;
          })}
        </div>
      </div>
    </>
  );
};
