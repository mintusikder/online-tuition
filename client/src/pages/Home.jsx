import React, { useState } from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import TuitionsCard from "../components/TuitionsCard";
import Footer from "../components/Footer";
import AboutOnlineTuition from "./AboutOnlineTuition";

const Home = () => {
  const initialTuitions = useLoaderData();
  const [tuitions, setTuitions] = useState(initialTuitions);
  console.log("home",tuitions)
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
          voluptatum deleniti atque corrupti quos dolores etmquasa molestias
          <br />
          epturi sint occaecati cupiditate non providente mikume molareshe.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          {tuitions.map((tuition) => (
            <TuitionsCard
              setTuitions={setTuitions}
              tuitions={tuitions}
              tuition={tuition}
              key={tuition._id}
            ></TuitionsCard>
          ))}
        </div>
      </div>
      <AboutOnlineTuition></AboutOnlineTuition>
      <Footer></Footer>
    </div>
  );
};

export default Home;
