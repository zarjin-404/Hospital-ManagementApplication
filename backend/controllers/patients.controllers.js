import patientsModels from "../models/patients.models.js";

export const admittedPatients = async (req, res) => {
  const { name, age, gender, contact, address, medicalHistory } = req.body;
  if (!name || !age || !gender || !contact || !address || !medicalHistory) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const patient = await patientsModels.create({
      name,
      age,
      gender,
      contact,
      address,
      medicalHistory,
    });
    res.status(201).json({ message: "Patient added successfully", patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editDataPatients = async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, contact, address, medicalHistory } = req.body;

  if (!name || !age || !gender || !contact || !address || !medicalHistory) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedPatient = await patientsModels.findByIdAndUpdate(
      id,
      {
        name,
        age,
        gender,
        contact,
        address,
        medicalHistory,
      },
      { new: true, runValidators: true },
    );

    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({ message: "Patient updated successfully", updatedPatient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePatients = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPatient = await patientsModels.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await patientsModels.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
