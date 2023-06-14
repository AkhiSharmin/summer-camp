import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const url = ` http://localhost:5000/classes/${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [url]);

  return (
    <div>
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Class Image</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classes) => (
                <tr key={classes._id}>
                  <th>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={classes.classImage} alt="" />
                      </div>
                    </div>
                  </th>
                  <td>{classes.className}</td>
                  <td>{classes.instructorName}</td>
                  <td>{classes.instructorEmail}</td>
                  <td>{classes.availableSeat}</td>
                  <td>${classes.price}</td>
                  <td>
                    {
                      <Link to="/dashboard/updateclass">
                        <button className="btn btn-xm btn-ghost text-white bg-purple-600 hover:bg-purple-700 btn-shadow border-0 rounded-none">
                          Update
                        </button>
                      </Link>
                    }
                    {
                      <button className="btn btn-xm btn-ghost text-white bg-purple-600 hover:bg-purple-700 btn-shadow border-0 rounded-none mx-2">
                        Delete
                      </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
