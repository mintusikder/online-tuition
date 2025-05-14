import React from "react";
import { X, FilePenLine } from "lucide-react";
import { Link } from "react-router";
const TuitionsCard = ({ tuition }) => {
  const { name, email, subject,_id} = tuition;
  console.log(tuition);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Subject: {subject}</p>
        <div className="card-actions justify-end">
          <Link to={`/showDetails/${_id}`} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default TuitionsCard;
