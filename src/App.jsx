import { useState } from "react";

import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {

  /* ----- State ----- */
  const [patient_list, setPatientList] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patient_list={patient_list}
          setPatientList={setPatientList}
        />

        <PatientsList patient_list={patient_list} />
      </div>
    </div>
  );
}

export default App;
