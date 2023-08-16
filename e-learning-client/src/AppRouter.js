import React, { useState, useEffect } from "react";

//Teacher-related imports
import TeacherNavbar from "./components/TeacherNavbar";
import AttendanceTracking from "./pages/teacher/AttendanceTracking";
import CollaborationTools from "./pages/teacher/CollaborationTools";
import Communication from "./pages/teacher/Communication";
import CourseCreation from "./pages/teacher/CourseCreation";
import GradingAndFeedback from "./pages/teacher/GradingAndFeedback";
import CoursePage1 from "./components/coursepage/index";

//Parent-related imports
import ParentNavbar from "./components/ParentNavbar";
import ProgressMonitoring from "./pages/parent/ProgressMonitoring";
import ParentTeacherConference from "./pages/parent/ParentTeacherConference";
import CommunicationWithTeachers from "./pages/parent/CommunicationWithTeachers";
import AttendanceAndSchedule from "./pages/parent/AttendanceAndSchedule";
import NotificationsAndReminders from "./pages/parent/NotificationsAndReminders";

//Student-related imports
import StudentNavbar from "./components/StudentNavbar";
import CourseEnrollment from "./pages/student/CourseEnrollment";
import InteractiveLearning from "./pages/student/InteractiveLearning";
import OfflineLearning from "./pages/student/OfflineLearning";
import ProgressTracking from "./pages/student/ProgressTracking";
import StudySupport from "./pages/student/StudySupport";

import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/teacher/CourseCreation";

function AppRouter() {
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);
  // if (!authenticated) {
  //   return <Login />;
  // } else {
  //   const role_id = parseInt(localStorage.getItem("role_id"));
  //   console.log(role_id)
  const role_id = 2;
    return (
      <Router>
        <div className="App">
          {role_id === 2 && <TeacherNavbar />}
          {role_id === 3 && <ParentNavbar />}
          {role_id === 4 && <StudentNavbar />}

          <div className="content">
            <Routes>
              {role_id === 2 && (
                <>
                  <Route path="/" element={<CourseCreation />} />
                  <Route
                    path="/gradingAndFeedback"
                    element={<GradingAndFeedback />}
                  />
                  <Route path="/communication" element={<Communication />} />
                  <Route
                    path="/attendanceTracking"
                    element={<AttendanceTracking />}
                  />
                  <Route
                    path="/collaborationTools"
                    element={<CollaborationTools />}
                  />
                  <Route
                    path="/course"
                    element={<CoursePage1 />}
                    />
                </>
              )}

              {role_id === 3 && (
                <>
                  <Route path="/" element={<ProgressMonitoring />} />
                  <Route
                    path="/communicationWithTeachers"
                    element={<CommunicationWithTeachers />}
                  />
                  <Route
                    path="/attendanceAndSchedule"
                    element={<AttendanceAndSchedule />}
                  />
                  <Route
                    path="/notificationsAndReminders"
                    element={<NotificationsAndReminders />}
                  />
                  <Route
                    path="/parentTeacherConference"
                    element={<ParentTeacherConference />}
                  />
                </>
              )}

              {role_id === 4 && (
                <>
                  <Route path="/" element={<CourseEnrollment />} />
                  <Route
                    path="/progressTracking"
                    element={<ProgressTracking />}
                  />
                  <Route
                    path="/interactiveLearning"
                    element={<InteractiveLearning />}
                  />
                  <Route path="/studySupport" element={<StudySupport />} />
                  <Route
                    path="/offlineLearning"
                    element={<OfflineLearning />}
                  />
                </>
              )}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }


export default AppRouter;
