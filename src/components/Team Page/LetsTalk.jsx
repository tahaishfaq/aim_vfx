import React, { useState } from 'react'

const LetsTalk = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companySize: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your submit logic here, like sending data to an API
        console.log(formData);
        alert("Form submitted. Check the console for form data.");
      };
  return (
    <div className="max-w-7xl pt-4 mx-auto flex flex-col md:flex-row justify-center gap-x-24 px-32">
    <div className="mb-6 flex flex-col  gap-y-1.5">
      <h2 className="text-[65px] font-tek font-normal leading-tight">
      Let’s Talk
      </h2>
      <p className="w-96 text-md mb-2">
      Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help. Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help
      </p>
      <p className="w-96 text-md">
      Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide helpHave some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help
      </p>
    </div>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap gap-y-6 w-full pt-10"
    >
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleInputChange}
        value={formData.firstName}
        className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleInputChange}
        value={formData.lastName}
        className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
        value={formData.email}
        className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        onChange={handleInputChange}
        value={formData.phone}
        className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
      />
      <select
        name="companySize"
        onChange={handleInputChange}
        value={formData.companySize}
        className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
      >
        <option value="">Company Size</option>
        <option value="small">1-10</option>
        <option value="medium">11-50</option>
        <option value="large">51-200</option>
        <option value="enterprise">201+</option>
      </select>
      <button
        type="submit"
        className="bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-4 mt-5 rounded-full"
      >
        BOOK A CALL
      </button>
    </form>
  </div>

  )
}

export default LetsTalk