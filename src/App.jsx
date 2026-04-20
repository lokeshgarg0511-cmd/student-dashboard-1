import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [dark, setDark] = useState(false);

  const marks = [
    { subject: "Mathematics", score: 40, total: 40 },
    { subject: "Cloud Computer", score: 40, total: 40 },
    { subject: "Data Structure", score: 30, total: 40 },
    { subject: "Intractive Frontend", score: 30, total: 40 },
    { subject: "Design Thinking", score: 40, total: 40 },
    { subject: "Advance Communication", score: 40, total: 40 },
  ];

  return (
    <div className={dark ? "app dark" : "app"}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🎓 EduDash</h2>

        <ul>
          <li
            className={page === "dashboard" ? "active" : ""}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </li>

          <li
            className={page === "attendance" ? "active" : ""}
            onClick={() => setPage("attendance")}
          >
            Attendance
          </li>

          <li
            className={page === "marks" ? "active" : ""}
            onClick={() => setPage("marks")}
          >
            Marks
          </li>

          <li
            className={page === "profile" ? "active" : ""}
            onClick={() => setPage("profile")}
          >
            Profile
          </li>
        </ul>
      </aside>

      {/* Main */}
      <main className="main">
        <div className="topbar">
          <h1 className="heading"> Welcome To Student Dashboard</h1>

          <button onClick={() => setDark(!dark)}>
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        {page === "dashboard" && (
          <>
            <div className="cards">
              <div className="card">
                <h3>Attendance</h3>
                <p> First Semester - 92%</p>
                <p> Second Semester - 98.75%</p>
              </div>

              <div className="card">
                <h3>Subjects</h3>
                <p>6</p>
              </div>

              <div className="card">
                <h3>Assignments</h3>
                <p> 4 Pending</p>
                <p> 8 Compeleted</p>
              </div>

              <div className="card">
                <h3>CGPA</h3>
                <p> First Semester - 8.09</p>
                <p> Second Semester - 9.25</p>
              </div>
            </div>

            <div className="card">
              <h2>Latest Notices</h2>
              <p>•Exams of End Term of Second Semester Are Starting  from 15 May</p>
              <p>• AI Assignment due next Monday</p>
              <p>• Lab Viva this week</p>
            </div>

            <div className="card">
              <h2>Date Sheet</h2>
              <p>📘 13 May - Wednesday - Advance Communication</p>
              <p>💻 15 May - Friday - Cloud Computer</p>
              <p>🤖 18 May - Monday - Data Structure</p>
              <p>📖20 May - Wednesday - Mathematics</p>
              <p>📊 22 May - Friday - Design Thinking</p>
              <p>📊 25 May - Monday -Intractive Frontend</p>
            </div>
          </>
        )}

        {page === "attendance" && (
          <div>
            <h2>Attendance Details</h2>

            <div className="cards">
              <div className="card">
                <h2>Mathematics</h2>
                <p>Total Lectures: 40</p>
                <p>Attended Lectures: 38</p>
                <p>Percentage: 95%</p>
                <p style={{ marginBottom: "20px" }}></p>
                <h3>Assigements</h3>
                <p> Pending - 00</p>
                <p> Compeleted - 02</p>
              </div>

              <div className="card">
                <h2>Cloud Computer</h2>
                <p>Total Lectures: 35</p>
                <p>Attended Lectures: 32</p>
                <p>Percentage: 91%</p>
                <p style={{ marginBottom: "20px" }}></p>
                <h3>Assigements</h3>
                <p> Pending - 01</p>
                <p> Compeleted - 01</p>
              </div>

              <div className="card">
                <h2>Data Structure</h2>
                <p>Total Lectures: 30</p>
                <p>Attended Lectures: 27</p>
                <p>Percentage: 90%</p>
                <p style={{ marginBottom: "20px" }}></p>
                <h3>Assigements</h3>
                <p> Pending - 00</p>
                <p> Compeleted - 02</p>
              </div>

              <div className="card">
                <h2>Intractive Frontend</h2>
                <p>Total Lectures: 28</p>
                <p>Attended Lectures: 26</p>
                <p>Percentage: 93%</p>
                <p style={{ marginBottom: "20px" }}></p>
                <h3>Assigements</h3>
                <p> Pending - 01</p>
                <p> Compeleted - 01</p>
              </div>

              <div className="card">
                <h2>Design Thinking</h2>
                <p>Total Lectures: 32</p>
                <p>Attended Lectures: 29</p>
                <p>Percentage: 91%</p>
                <p style={{ marginBottom: "20px" }}></p>
                <h3>Assigements</h3>
                <p> Pending - 01</p>
                <p> Compeleted - 01</p>
              </div>
              <div className="card">
                <h2>Advance Communication</h2>
                <p>Total Lectures: 38</p>
                <p>Attended Lectures: 35</p>
                <p>Percentage: 95%</p>
                <p style={{ marginBottom: "20px" }}></p>
                <h3>Assigements</h3>
                <p> Pending - 01</p>
                <p> Compeleted - 01</p>
              </div>
            </div>
          </div>
        )}

        {/* Marks */}
        {page === "marks" && (
          <div className="card">
            <h2>Marks Table</h2>

            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>total</th>
                </tr>
              </thead>

              <tbody>
                {marks.map((item, index) => (
                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.score}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {page === "profile" && (
          <div className="cards">
            {/* Profile Image */}
            <div className="card">
              <h2>Profile Image</h2>

              <img
                src="https://i.pravatar.cc/200?img=12"
                alt="profile"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginTop: "10px"
                }}
              />
            </div>

            {/* Self Details */}
            <div className="card">
              <h2>Self Details</h2>
              <p>Name: Lokesh Garg</p>
              <p>Addess: Palwal,Harayana</p>
              <p>Email: lokesh@gmail.com</p>
              <p>Phone: 9876543210</p>
            </div>

            {/* College Details */}
            <div className="card">
              <h2>College Details</h2>
              <p>Mode: Student</p>
              <p>Course: BCA (AI & DS)</p>
              <p>Section: D</p>
              <p>Roll No: 2501060145</p>
              <p>Email: 2501060145@krmu.edu.in</p>
              <p>Semester: 2nd</p>
              <p>Year: 1st</p>
              <p>Session: 2025 - 2028</p>
              <p>College: KR Mangalam University</p>
              <p>Location: Gurugram</p>
            </div>

            {/* Skills */}
            <div className="card">
              <h2>Skills</h2>
              <p>React JS</p>
              <p>JavaScript</p>
              <p>Python</p>
              <p>HTML / CSS</p>
              <p>DSA Basics</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}