import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import TuitionsCard from "../components/TuitionsCard";

const Home = () => {
  const tuitions = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto py-18">
        <h2 className="text-2xl text-center">Our featured instructors</h2>
        <h1 className="text-3xl font-bold text-center py-3">
          Every instructor is professional and highly qualified
        </h1>
        <p className="text-center mb-8">
          Accusamus et iusidio dignissimos ducimus blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores etmquasa molestias<br /> 
          epturi sint occaecati cupiditate non providente mikume molareshe.
        </p >
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          {tuitions.map((tuition) => (
            <TuitionsCard tuition={tuition} key={tuition._id}></TuitionsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
