import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CustomAlert from '../../components/CustomAlert';








export default function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [ errors, setErrors] = useState({
    username: [],
  password1: [],
  password2: [],
    
  });

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
      //setErrors({
        //username: errorData.username || [],
        //password1: errorData.password1 || [],
        //password2: errorData.password2 || [],
      //});
      
      //setErrors({ ...errors, username: "Invalid username" });

      // console.log(err.response?.data);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen  container mx-auto px-4 ">
    <form 
    className="w-full  bg-deep-blue rounded-md justify-center flex md={6} mx-auto max-xl"
    onSubmit={handleSubmit}>

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Username Field */}
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-200">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block w-full flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="janesmith"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && errors.username.map((error, index) => (
  <CustomAlert key={index} message={error} />
))}

              
            </div>
             
            {/* Password Field */}
            <div className="sm:col-span-4">
              <label htmlFor="password1" className="block text-sm font-medium leading-6 text-gray-200">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password1"
                  id="password1"
                  autoComplete="new-password"
                  className="block w-full flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="••••••••"
                  value={password1}
                  onChange={handleChange}
                />
              </div>
              {errors.password1 && errors.password1.map((error, index) => (
  <CustomAlert key={index} message={error} />
))}

              
            </div>
            

          

            {/* Confirm Password Field */}
            <div className="sm:col-span-4">
              <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-200">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  autoComplete="new-password"
                  className="block w-full flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="••••••••"
                  value={password2}
                  onChange={handleChange}
                />
              </div>
              {errors.password2 && errors.password2.map((error, index) => (
  <CustomAlert key={index} message={error} />
))}

            </div>

            {/* Display error alert for password2 */}
            {/* Display error alert for password2 */}


          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 sm:col-span-4 ml-1">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </div>
    </form>
    </div>
  );
}
