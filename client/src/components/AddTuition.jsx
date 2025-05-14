import React from "react";
import Swal from "sweetalert2";

const AddTuition = () => {
  const handelAddTutor = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const tutorData = Object.fromEntries(formData.entries());
    console.log(tutorData);
    fetch(`http://localhost:5000/tuitions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Add Success!",
            icon: "success",
            draggable: true,
          });

          form.reset();
          console.log(data);
        }
      });
  };
  return (
    <div className="p-4 md:px-8 lg:px-24">
      <div className="p-4 md:px-8 lg:px-12 text-center space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl">Add Tutor</h1>
        <p className="text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handelAddTutor} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Coffee Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter phone"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter subject"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="room" className="block text-sm font-medium">
              Room
            </label>
            <input
              type="text"
              id="room"
              name="room"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter room"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="fee" className="block text-sm font-medium">
              Fee
            </label>
            <input
              type="text"
              id="fee"
              name="fee"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
              placeholder="Enter fee"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="photo" className="block text-sm font-medium">
            Photo Url
          </label>
          <input
            type="url" // Changed to url type for better validation
            id="photo"
            name="photo"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
            placeholder="Enter photo URL"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Tutor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTuition;
