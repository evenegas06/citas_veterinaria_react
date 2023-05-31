/* eslint-disable react/prop-types */
import PatientItem from "./PatientItem.jsx";

const PatientsList = ({ patient_list, setCurrentPatient, deletePatient }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            {patient_list.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">
                        Listado Pacientes
                    </h2>

                    <p className="text-xl mt-5 mb-7 text-center">
                        Administra tus
                        <span className="text-indigo-600 font-bold">
                            &nbsp;Pacientes y Citas
                        </span>
                    </p>

                    <ul className="md:h-screen overflow-y-scroll mx-5">
                        {patient_list.map((patient) => {
                            return (
                                <PatientItem
                                    key={patient.id}
                                    patient={patient}
                                    setCurrentPatient={setCurrentPatient}
                                    deletePatient={deletePatient}
                                />
                            );
                        })}
                    </ul>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay pacientes aun
                    </h2>

                    <p className="text-xl mt-5 mb-7 text-center">
                        Completa el formulario
                        <span className="text-indigo-600 font-bold">
                            &nbsp;y aparecerán aquí
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};
export default PatientsList;