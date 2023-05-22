import { useState } from "react";

import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {

  /* ----- State ----- */
  const [patient_list, setPatientList] = useState([]);
  const [current_patient, setCurrentPatient] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patient_list={patient_list}
          setPatientList={setPatientList}
          current_patient={current_patient}
        />

        <PatientsList 
          patient_list={patient_list} 
          setCurrentPatient={setCurrentPatient}
        />
      </div>
    </div>
  );
}

export default App;
