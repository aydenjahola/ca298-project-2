import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import App from "./App";

import "./index.css";
import "./App.css";

import ViewAllDegrees from "./components/view-all-degrees";
import ViewSingleDegree from "./components/view-single-degree";
import ViewAllCohorts from "./components/view-all-cohorts";
import ViewSingleCohort from "./components/view-single-cohort";
import ViewAllStudents from "./components/view-all-students";
import ViewAllModules from "./components/view-all-modules";
import ViewSingleModule from "./components/view-single-module";
import ViewSingleStudent from "./components/view-single-student";
import ViewAllGrades from "./components/view-all-grades";
import ViewAllModulesCohort from "./components/view-all-modules-cohort";
import CreateNewDegree from "./components/create-new-degree";
import CreateNewCohort from "./components/create-new-cohort";
import CreateNewModule from "./components/create-new-module";
import CreateNewStudent from "./components/create-new-student";
import SetModuleGrades from "./components/set-module-grades";
import ViewAllCohortsDegree from "./components/view-all-cohorts-degree";
import GradeUpdateList from "./components/grade-update-list";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-degree" element={<CreateNewDegree />} />
        <Route path="/create-cohort" element={<CreateNewCohort />} />
        <Route path="/create-module" element={<CreateNewModule />} />
        <Route path="/create-student" element={<CreateNewStudent />} />
        <Route path="/update-grades/:student" element={<GradeUpdateList />} />
        <Route path="/set-module-grades" element={<SetModuleGrades />} />
        <Route
          path="/students/:cohort"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewAllStudents />
              <Link
                to="/create-student"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Student
              </Link>
            </div>
          }
        />
        <Route
          path="/degrees"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewAllDegrees />
              <Link
                to="/create-degree"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Degree
              </Link>
            </div>
          }
        />

        <Route
          path="/cohorts"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewAllCohorts />
              <Link
                to="/create-cohort"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Cohort
              </Link>
            </div>
          }
        />
        <Route
          path="/modules"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewAllModules />
              <Link
                to="/create-module"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Module
              </Link>
            </div>
          }
        />
        <Route
          path="/degree/:degree"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewSingleDegree />
              <ViewAllCohortsDegree />
              <Link
                to="/create-degree"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Degree
              </Link>
            </div>
          }
        />
        <Route
          path="/cohort/:cohort"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewSingleCohort />
              <ViewAllStudents />
              <Link
                to="/create-student"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Student
              </Link>
            </div>
          }
        />
        <Route
          path="/module/:module"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewSingleModule />
              <Link
                to="/create-module"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Module
              </Link>
            </div>
          }
        />
        <Route
          path="/student/:student"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewSingleStudent />
              <ViewAllGrades />
              <Link
                to="/create-student"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Student
              </Link>
            </div>
          }
        />
        <Route
          path="/modules-cohort/:module"
          element={
            <div className="flex flex-col items-center space-y-4">
              <ViewAllModulesCohort />
              <Link
                to="/create-module"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Create New Module
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
