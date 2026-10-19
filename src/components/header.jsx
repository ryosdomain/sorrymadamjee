import React from "react";
import bow from "../assets/images/pngegg.png";
import { NavLink } from "react-router";

const header = () => {
  return (
    <div>
      <div className="">
        <img className="w-40 transform scale-x-[-1] mb-5  m-auto" src={bow} alt="bow image" />
        <h1 className="text-yellow-400 text-center text-2xl font-bold tracking-wide ">Sorry Madam Jeee!</h1>
        <h1 className="text-yellow-400 text-center text-2xl font-bold tracking-wide ">Chalo Game khelty hyn</h1>
        <nav className=" w-full border flex m-auto mt-10 border-white">
             <NavLink  className={`text-black block w-1/2  text-center border border-black bg-yellow-200 p-5`} to={"/"}>Tic Tac Toe</NavLink>
             <NavLink  className={`text-black block w-1/2  text-center border border-black bg-yellow-200 p-5`} to={"/rockpaperscissors"}>Rock Paper Scissors</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default header;
