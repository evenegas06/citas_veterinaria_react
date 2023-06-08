import { useEffect, useState } from "react";

import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import PatientsList from "./components/PatientsList.jsx";

function App() {

  /* ----- States ----- */
  const [patient_list, setPatientList] = useState(
    localStorage.getItem('patient_list') ? JSON.parse(localStorage.getItem('patient_list')) : []
  );
  const [current_patient, setCurrentPatient] = useState({});

  /* ----- Hooks ----- */
  /* Set patient_list in localStorage */
  useEffect(() => {
    localStorage.setItem('patient_list', JSON.stringify(patient_list) ?? []);
  }, [patient_list]);

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
