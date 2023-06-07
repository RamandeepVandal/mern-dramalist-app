import React from "react";
import { Drama } from "./Drama";

export const Dramas = ({ dramas, filterDrama }) => {
  return (
    <>
      {dramas.map((drama, key) => {
        return <Drama drama={drama} key={key} filterDrama={filterDrama} />;
      })}
    </>
  );
};
