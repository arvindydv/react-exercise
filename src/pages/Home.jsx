import React from "react";


export const Home = ({ name, gif, secondaryMuscles }) => {
  return (
    <div className="card">
      <img src={gif} alt="" />
      <h3 className="name">{name}</h3>
      {secondaryMuscles.map((data, idx) => {
        return <p key={idx}>{data}</p>;
      })}
    </div>
  );
};
