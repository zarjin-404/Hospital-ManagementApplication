import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [age, setage] = useState();
  const [gender, setgender] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [medicalHistory, setmedicalHistory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/patients/editDataPatients/${id}`, {
      name,
      age,
      gender,
      contact,
      address,
      medicalHistory,
    });

    setname("");
    setage("");
    setgender("");
    setcontact("");
    setaddress("");
    setmedicalHistory("");

    navigate("/");
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center rounded-t-lg py-4">
          <h3 className="text-xl font-semibold">Patient Registration</h3>
        </div>
        <div className="p-6">
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter Contact"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                rows="3"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">
                Medical History
              </label>
              <textarea
                id="medicalHistory"
                rows="3"
                placeholder="Enter Medical History"
                value={medicalHistory}
                onChange={(e) => setmedicalHistory(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md shadow-md hover:from-indigo-600 hover:to-purple-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
