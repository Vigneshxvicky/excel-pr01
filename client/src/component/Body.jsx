import React, { useState } from "react";
import "./Body.css"; // Import the CSS file for animations

const Body = () => {
  const [dragging, setDragging] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      previewFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    if (
      file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.type === "application/vnd.ms-excel"
    ) {
      setFilePreview(file.name); // Show the file name
    } else {
      alert("Please upload a valid Excel file (.xls or .xlsx)");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"} vh-100`}>
      {/* Dark mode toggle button */}
      {/* <button
        onClick={toggleDarkMode}
        className="btn btn-sm position-absolute top-0 end-0 m-3"
        style={{
          zIndex: 1000,
          backgroundColor: darkMode ? "#333" : "#f8f9fa",
          color: darkMode ? "#fff" : "#333",
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button> */}

      <div
        className={`d-flex justify-content-center bg-[#48A6A7] align-items-center vh-100 ${
          dragging ? "dragging" : "not-dragging"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div  className={`drop-area bg-custombg p-5 rounded text-center ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
          {filePreview ? (
            <div>
              <h3>File Preview:</h3>
              <p>{filePreview}</p>
            </div>
          ) : (
            <>
              <h2>Drag and Drop Excel Files Here</h2>
              <p>or</p>
              <input
                type="file"
                accept=".xls,.xlsx"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className={`btn ${darkMode ? "btn-secondary" : "btn-primary"}`}
                style={{ cursor: "pointer" }}
              >
                Browse Files
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;