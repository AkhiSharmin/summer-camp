import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { FaHome } from "react-icons/fa";
import { useTheme } from "../Provider/ThemeContext";

const Dashboard = () => {
  const { theme } = useTheme();

  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();
  console.log({ isAdmin, isInstructor });

  return (
    <div data-theme={theme}>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
              <NavLink className="flex justify-center items-center mr-3" to="/">
                <FaHome className="mr-2" />
                Home
              </NavLink>
            </li>
            <div className="divider"></div>

            {isAdmin?.admin ? (
              <>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
                  <NavLink to="/dashboard/manageclasses">
                    Manage Classes
                  </NavLink>
                </li>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white list-none">
                  <NavLink to="/dashboard/manageusers">Manage Users</NavLink>
                </li>
              </>
            ) : isInstructor?.instructor ? (
              <>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
                  <NavLink to="/dashboard/addclasses">Add a Class</NavLink>
                </li>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white list-none">
                  <NavLink to="/dashboard/myclass">My Classes</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
                  <NavLink to="/dashboard/selectedclass">
                    My Selected Classes
                  </NavLink>
                </li>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white list-none">
                  <NavLink to="/dashboard/enrolledclass">
                    My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
