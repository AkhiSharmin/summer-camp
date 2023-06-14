import { Helmet } from "react-helmet";

import { useEffect, useState } from "react";
import SinglePopularClasses from "./SinglePopularClasses";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Drowning School | Classes</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
        {classes.map((singlePopularClass) => (
          <SinglePopularClasses
            key={singlePopularClass._id}
            singlePopularClass={singlePopularClass}
          ></SinglePopularClasses>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
