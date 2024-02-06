import React, { useState } from "react";

const Contact = () => {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!name || !email || !message) {
      alert("Please fill in all the fields");
      return;
    }

    // Validation successful, submit the form
   try {
    const response = await submitForm({ name, email, message });
    if (response.success) {
      alert("Form submitted successfully");
    } else {
      alert("Form submission failed, Please try again");
    }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("Error occurred while submitting the form, Please try again later");
    }
   };

    // Reset the form fields here if needed
    setName("");
    setEmail("");
    setMessage("");
    setEmailError("");
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-950 flex justify-center items-center p-6"
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-purple-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className={`w-full border ${
                emailError ? "border-red-500" : "border-gray-400"
              } p-2 rounded-md focus:outline-none focus:border-purple-600`}
              placeholder="Your Email Address"
              required
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-purple-600"
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
