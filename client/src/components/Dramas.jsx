import React from "react";
import { Drama } from "./Drama";

export const Dramas = ({ dramas, filterDrama }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {dramas.map((drama, key) => {
            return <Drama drama={drama} key={key} filterDrama={filterDrama} />;
          })}
        </div>
      </div>
    </>
  );
};
