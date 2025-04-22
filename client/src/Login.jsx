  // import React from "react";
  // import { Link, useNavigate } from "react-router-dom";
  // import axios from "axios";
  // import Header from "./component/Header";

  // const Login = () => {
    
  //   const [email, setEmail] = React.useState("");
  //   const [password, setPassword] = React.useState("");
  //   const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if(!email || !password) {
  //       alert("All fields are required!");
  //       return;
  //     }
      
  //     const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  //   if (!gmailRegex.test(email)) {
  //     alert("Please enter a valid Gmail address!");
  //     return;
  //   }

  //     axios
  //       .post("http://localhost:5000/login", { email, password })
  //       .then((result) => {
  //         console.log(result);
  //         if(result.data ==="success"){
  //             navigate("/home");
  //             alert("Login Successfull")
  //         }
  //         })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   return (
  //     <>
  //     <Header/>   
  //     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
  //       <div className="bg-white p-3 rounded w-25">
  //         <h2>Login</h2>
  //         <form onSubmit={handleSubmit}>
  //           <div className="mb-3">
  //             <label htmlFor="email">
  //               <strong>Email</strong>
  //             </label>
  //             <input
  //               type="text"
  //               placeholder="Enter Email"
  //               autoComplete="off"
  //               name="email"
  //               className="form-control rounded-0"
  //               onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>

  //           <div className="mb-3">
  //             <label htmlFor="email">
  //               <strong>Password</strong>
  //             </label>
  //             <input
  //               type="password"
  //               placeholder="Enter Password"
  //               name="password"
  //               className="form-control rounded-0"
  //               onChange={(e) => setPassword(e.target.value)}
  //             />
  //           </div>
  //           <button type="submit" className="btn btn-success w-100 rounded-2">
  //             Login
  //           </button>
  //           <p className="pt-2">Don't have an Account</p>
  //           <Link
  //             to="/"
  //             type="submit"
  //             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
  //           >
  //             Register
  //           </Link>
  //         </form>
  //       </div>
  //     </div>
  //     </>
  //   );
  // };

  // export default Login;
  import React from "react";
  import { Link, useNavigate } from "react-router-dom";
  import axios from "axios";
  import Header from "./component/Header";
  
  const Login = () => {
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!email || !password) {
        alert("All fields are required!");
        return;
      }
      
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if (!gmailRegex.test(email)) {
        alert("Please enter a valid Gmail address!");
        return;
      }
  
      axios
        .post("http://localhost:5000/login", { email, password })
        .then((result) => {
          console.log(result);
          if(result.data ==="success"){
              navigate("/home");
              alert("Login Successful");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <>
        <Header/>   
        <div className="flex justify-center items-center bg-[conic-gradient(from_0deg,#4f46e5,#818cf8,#c7d2fe)] min-h-screen font-poppins">
          <div className="bg-[conic-gradient(from_0deg,#4f46e5,#818cf8,#c7d2fe)] backdrop-blur-2xl p-6 rounded-md w-1/3 shadow-lg">
            <h2 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#4f46e5] via-[#818cf8] to-[#c7d2fe] bg-clip-text text-transparent drop-shadow-lg tracking-widest font-montserrat uppercase     ">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  autoComplete="off"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none bg-transparent backdrop-blur-lg focus:ring focus:ring-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent backdrop-blur-lg focus:outline-none focus:ring focus:ring-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Login
              </button>
              <p className="text-center pt-2">Don't have an Account?<a href="/" className="pt-4 text-center text-sm text-white underline cursor-pointer pl-2 ">Register</a></p>
              {/* <Link
                to="/"
                className="block text-center w-full mt-2 py-2 border border-gray-300 rounded text-blue-500 hover:bg-gray-100 transition text-decoration-none"
              >
                Register
              </Link> */}
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;