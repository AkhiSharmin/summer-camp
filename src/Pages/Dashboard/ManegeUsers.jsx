import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    refetch,
    isLoading,
    isError,
  } = useQuery(["users"], async () => {
    try {
      const res = await axiosSecure.get("/users");
      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  });

  const handleAdmin = (user) => {
    fetch(` http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          alert("Successfully updated user role to admin");
        }
      })
      .catch((error) => {
        console.error("Failed to update user role to admin", error);
      });
  };

  const handleInstructor = (user) => {
    fetch(` http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          alert("Successfully updated user role to instructor");
        }
      })
      .catch((error) => {
        console.error("Failed to update user role to instructor", error);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: Failed to fetch users</p>;
  }

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="font-semibold">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleAdmin(user)}
                      className="btn bg-purple-600 text-white hover:bg-purple-400 btn-shadow border-0 rounded-none mr-4"
                    >
                      Make Admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleInstructor(user)}
                      className="btn ml-5 bg-purple-600 text-white hover:bg-purple-400 btn-shadow border-0 rounded-none"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
