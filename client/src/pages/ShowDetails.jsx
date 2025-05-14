import React from "react";
import { Link, useLoaderData } from "react-router";
import { FilePenLine, X } from "lucide-react";
import Swal from "sweetalert2";

const ShowDetails = ({ setTuitions, tuitions }) => {
  const tuition = useLoaderData();

  const { fee, room, subject, phone, email, name, _id } = tuition;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tuitions/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = tuitions.filter(
                (tuition) => tuition._id !== _id
              );
              setTuitions(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="py-8 max-w-7xl mx-auto p-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <div className="space-y-2">
            <h2 className="card-title text-2xl font-bold">Name: {name}</h2>
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {phone}
            </p>
            <p>
              <span className="font-semibold">Subject:</span> {subject}
            </p>
            <p>
              <span className="font-semibold">Room:</span> {room}
            </p>
            <p>
              <span className="font-semibold">Fee:</span> ${fee}
            </p>
          </div>

          <div className="card-actions justify-end mt-4">
            <Link to={`/updateTuition/${_id}`} className="btn btn-primary">
              <FilePenLine className="mr-2" />
              Edit
            </Link>

            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              <X className="mr-2" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
