import React from "react";
import Banner from "../Banner/Banner";
import Lawyers from "../Lawyer/Lawyers";
import { useLoaderData } from "react-router";
import Counter from "../Counter/Counter";

const Home = () => {
  const lawyersData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Lawyers lawyersData={lawyersData}></Lawyers>
      <Counter></Counter>
    </div>
  );
};

export default Home;
