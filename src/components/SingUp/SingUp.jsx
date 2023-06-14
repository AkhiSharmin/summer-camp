import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const SignUp = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User Profile info updated");

            const addUser = {
              name: loggedUser.displayName,
              email: loggedUser.email,
              photo: loggedUser.photoURL,
              role: "admin",
            };

            fetch(" http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(addUser),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));

            reset();
            navigate("/");
          })
          .catch((error) => console.log(error));
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const logInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;

        const addUser = {
          email: loggedUser.email,
          name: loggedUser.displayName,
          image: loggedUser.photoURL,
          role: "student",
        };
        fetch(" http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("User added successfully");
            }
          });

        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Drowning School | Sing Up</title>
      </Helmet>
      <div className="relative">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <div className="hero py-16 relative bg-gray-950 bg-opacity-75 ">
          <div className="card shadow-2xl text-white btn-shadow md:w-full lg:w-[40%]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    must have one UpperCase, lowerCase, Number and special
                    character.
                  </p>
                )}
              </div>
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("ConfirmPassword", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.ConfirmPassword?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.ConfirmPassword?.type === "pattern" && (
                  <p className="text-red-500">
                    must have one UpperCase, lowerCase, Number and special
                    character.
                  </p>
                )}
              </div>

              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              <div className="form-control text-black mt-6">
                <input
                  className="btn btn-primary "
                  type="submit"
                  value="SignUp"
                />
              </div>
              <p className="text-center">
                <small className="text-[16px]">
                  Already Have an account?{" "}
                  <Link to="/login" className="text-red-500 font-bold">
                    LogIn
                  </Link>
                </small>
              </p>
              <div className="divider text-white">OR</div>
              <div className="text-center">
                <button
                  onClick={logInWithGoogle}
                  className="btn btn-circle btn-outline text-2xl bg-white"
                >
                  G
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
