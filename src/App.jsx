import { useEffect, useState } from "react";

import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {

  /* ----- State ----- */
  const [patient_list, setPatientList] = useState([]);
  const [current_patient, setCurrentPatient] = useState({});

  /* ----- Hooks ----- */
  useEffect(() => {
    const getLS = () => {
      const patientLS = JSON.parse(localStorage.getItem('patient_list')) ?? [];
      setPatientList(patientLS);
    };

    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('patient_list', JSON.stringify(patient_list));
  }, [patient_list]);

  /* ----- Functions ----- */
  /**
   * Delete the specified item.
   * @param {string} id 
   */
  const deletePatient = (id) => {
    const act = patient_list.filter((item) => {
      return item.id !== id;
    });

    setPatientList(act);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patient_list={patient_list}
          setPatientList={setPatientList}
          current_patient={current_patient}
          setCurrentPatient={setCurrentPatient}
        />

        <PatientsList
          patient_list={patient_list}
          setCurrentPatient={setCurrentPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
