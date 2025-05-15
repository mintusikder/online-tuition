import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(name, email, password);
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, userProfile);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // save profile in db
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("data save");
              console.log("after profile save", data);
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Number</label>
              <input
                type="text"
                name="number"
                className="input"
                placeholder="Number"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <Link to={"/login"}>
              Already have account <span className="text-blue-600">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
