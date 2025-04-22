// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Header from "./component/Header";
// import "./index.css"; // Import the CSS file for animations

// const Signup = () => {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!name || !email || !password) {
//       alert("All fields are required!");
//       return;
//     }
//     const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//   if (!gmailRegex.test(email)) {
//     alert("Please enter a valid Gmail address!");
//     return;
//   }
  
//     try {
//       // Check if the email already exists
//       const emailCheckResponse = await axios.post("http://localhost:5000/check-email", { email });
//       if (emailCheckResponse.data.exists) {
//         alert("User with this email already exists!");
//         return;
//       }
  
//       // Proceed with registration if email doesn't exist
//       const registerResponse = await axios.post("http://localhost:5000/register", { name, email, password });
//       console.log(registerResponse);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="flex justify-center items-center bg-gray-600 min-h-screen">
//         <div className="bg-white p-3 rounded-md w-1/4">
//           <h2>Register</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email">
//                 <strong className="pr-1">Name</strong>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Name"
//                 autoComplete="off"
//                 name="email"
//                 className="pl-2 form-input rounded-none flex flex-row"
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email">
//                 <strong className="pr-1">Email</strong>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Email"
//                 autoComplete="off"
//                 name="email"
//                 className="form-input rounded-none flex flex-row"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="email">
//                 <strong className="pr-1">Password</strong>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 name="password"
//                 className="form-input rounded-none flex flex-row"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-success w-100 rounded-0">
//               Register
//             </button>
//             <p>Already have an Account</p>
//             <Link
//               to="/login"
//               className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//             >
//               Login
//             </Link>
//             <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };


// export default Signup;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./component/Header";
import "./index.css"; // Import the CSS file for animations

const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      alert("Please enter a valid Gmail address!");
      return;
    }

    try {
      // Check if the email already exists
      const emailCheckResponse = await axios.post("http://localhost:5000/check-email", { email });
      if (emailCheckResponse.data.exists) {
        alert("User with this email already exists!");
        return;
      }

      // Proceed with registration if email doesn't exist
      const registerResponse = await axios.post("http://localhost:5000/register", { name, email, password });
      console.log(registerResponse);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center bg-[conic-gradient(from_0deg,#4f46e5,#818cf8,#c7d2fe)] min-h-screen font-poppins pb-10">  
        <div className="bg-[conic-gradient(from_0deg,#4f46e5,#818cf8,#c7d2fe)] backdrop-blur-2xl p-6 rounded-md w-1/3 shadow-lg">
          <h2 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#c7d2fe] bg-clip-text text-transparent drop-shadow-lg tracking-widest font-montserrat uppercase">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent  backdrop-blur-lg focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent  backdrop-blur-lg  focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Create New Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent   focus:outline-none focus:ring focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Register
            </button>
            <p className="mt-4 text-center text-sm cursor-pointer">Already have an Account?<a href="/login" className="mt-4 text-center text-sm cursor-pointer pl-2 text-white">login</a></p>
            {/* <Link
              to="/login"
              className="block text-center w-full mt-2 py-2 border border-gray-300 rounded text-blue-500 hover:bg-gray-100 transition text-decoration-none"
            >
              Login
            </Link> */}
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;