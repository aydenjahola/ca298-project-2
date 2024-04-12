import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">University System</h1>
      <div className="max-w-md mx-auto">
        <ul className="space-y-4">
          <li>
            <Link
              to="/degrees"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              View All Degrees
            </Link>
          </li>
          <li>
            <Link
              to="/cohorts"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              View All Cohorts
            </Link>
          </li>
          <li>
            <Link
              to="/modules"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              View All Modules
            </Link>
          </li>
          <li>
            <Link
              to="/create-degree"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Create New Degree
            </Link>
          </li>
          <li>
            <Link
              to="/create-cohort"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Create New Cohort
            </Link>
          </li>
          <li>
            <Link
              to="/create-module"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Create New Module
            </Link>
          </li>
          <li>
            <Link
              to="/create-student"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Create New Student
            </Link>
          </li>
          <li>
            <Link
              to="/set-module-grades"
              className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Set Module Grades
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
