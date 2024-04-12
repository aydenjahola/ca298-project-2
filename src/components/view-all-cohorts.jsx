import { useState, useEffect } from "react";

function ViewAllCohorts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllCohorts = () => {
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">All Cohorts</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((cohort, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="px-6 py-4">
                  <h2 className="text-xl font-semibold mb-2">{cohort.name}</h2>
                  <div className="flex space-x-2">
                    <a
                      href={`/students/${cohort.id}`}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                      View All Students
                    </a>
                    <a
                      href={`/modules-cohort/${cohort.id}`}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
                    >
                      View All Modules
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return displayAllCohorts();
}

export default ViewAllCohorts;
