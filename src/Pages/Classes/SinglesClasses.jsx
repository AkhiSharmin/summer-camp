import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SinglesClasses = ({ singleClass }) => {
  const {
    instructorName,
    price,
    classImage,
    availableSeat,
    enrolledStudentsCount,
  } = singleClass;

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className="card w-96 shadow-xl ">
          <figure>
            <img src={classImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Name: {instructorName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Price: {price}</p>
            <p>AvailableSeats: {availableSeat}</p>
            <p>EnrollStudent: {enrolledStudentsCount}</p>
            <div className="card-actions justify-end">
              {user ? (
                <button className="badge badge-outline">Select</button>
              ) : (
                <Link to="/login">
                  {" "}
                  <button className="badge badge-outline">Select</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglesClasses;
