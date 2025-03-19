import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeletePatient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePatient = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/patients/deletePatients/${id}`,
      );
      navigate("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Are you sure you want to delete this patient?
        </h1>
        <div className="flex justify-center">
          <button
            onClick={deletePatient}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300">
            Yes, Delete Patient
          </button>
        </div>
      </div>
    </div>
  );
}
