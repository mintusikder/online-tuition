import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import TuitionsCard from "../components/TuitionsCard";

const Home = () => {
  const tuitions = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tuitions.map((tuition) => (
            <TuitionsCard tuition={tuition} key={tuition._id}></TuitionsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
