import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [age, setage] = useState();
  const [gender, setgender] = useState('');
  const [contact, setcontact] = useState('');
  const [address, setaddress] = useState('');
  const [medicalHistory, setmedicalHistory] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.put(`${backendUrl}/api/patients/editDataPatients/${id}`, {
      name,
      age,
      gender,
      contact,
      address,
      medicalHistory,
    });

    setname('');
    setage('');
    setgender('');
    setcontact('');
    setaddress('');
    setmedicalHistory('');

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Edit Patient Information
          </h2>
          <p className="text-sm text-gray-500">
            Update the patient details in the form below
          </p>
        </div>
        <form onSubmit={submitHandler} className="mt-8">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="age"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contact
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Enter Contact"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              rows="3"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="medicalHistory"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Medical History
            </label>
            <textarea
              id="medicalHistory"
              rows="3"
              placeholder="Enter Medical History"
              value={medicalHistory}
              onChange={(e) => setmedicalHistory(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
