import React from "react";
import { useLoaderData } from "react-router";
import { FilePenLine, X } from "lucide-react";
const ShowDetails = () => {
  const tuition = useLoaderData();
  console.log(tuition);
  const { fee, room, subject, phone, email, name } = tuition;
  return (
    <div className="py-18 max-w-7xl mx-auto p-4">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="p-8 flex flex-col justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Subject: {subject}</p>
            <p>Room: {room}</p>
            <p>Fee: {fee}</p>
          </div>

          <div>
            <button className="btn btn-primary mr-3">
              {" "}
              <FilePenLine />
            </button>

            <button className="btn btn-error">
              {" "}
              <X />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
