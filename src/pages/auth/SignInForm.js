import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import CustomAlert from '../../components/CustomAlert';

export default function SignInForm() {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const signingData = {
        username: signInData.username,
        password: signInData.password,
      };
      const response = await axios.post("/dj-rest-auth/login/", signingData);
      // Assuming the token is returned in the response
    localStorage.setItem('authToken', response.data.token);
      history.push("/"); // Redirect to a different path if needed
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen max-xl">
      <form 
        className="w-full max-w-md bg-deep-blue rounded-md p-6 justify-center"
        onSubmit={handleSubmit}
      >
        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-200">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="block w-full mt-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Your username"
            value={username}
            onChange={handleChange}
          />
        </div>
        {errors.non_field_errors && <CustomAlert message={errors.non_field_errors} />}

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            className="block w-full mt-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Your password"
            value={password}
            onChange={handleChange}
          />
        </div>
        {errors.non_field_errors && <CustomAlert message={errors.non_field_errors} />}

        {/* Sign In Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
