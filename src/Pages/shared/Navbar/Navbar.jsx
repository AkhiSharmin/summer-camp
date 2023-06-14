import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import { useTheme } from "../../../Provider/ThemeContext";

const Navbar = () => {
  const { theme, switchTheme } = useTheme();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {isAdmin?.admin ? (
        <li>
          <Link to="/dashboard/manageusers">Dashboard</Link>
        </li>
      ) : isInstructor?.instructor ? (
        <li>
          <Link to="/dashboard/addclass">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/enrolledclass">Dashboard</Link>
        </li>
      )}
      <button onClick={switchTheme} className="btn btn-sm ">
        Dark Mood
      </button>
    </>
  );

  return (
    <div data-theme={theme}>
      <div className="navbar fixed z-10 max-w-screen-xl bg-slate-100 pb-4 bg-opacity-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img
              className="h-16 w-16 mr-3 rounded-full"
              src="https://img.freepik.com/premium-vector/cute-adorable-cartoon-flying-launch-rocket-pencil-illustration-sticker-icon-mascot-logo_572542-57.jpg?w=740"
              alt=""
            />{" "}
            <h2 className="text-2xl font-bold drop-shadow-2xl text-purple-600">
              Drawing School
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost normal-case text-xl"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost normal-case text-xl">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
