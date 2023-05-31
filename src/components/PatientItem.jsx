/* eslint-disable react/prop-types */
const PatientItem = ({ patient, setCurrentPatient, deletePatient }) => {
    const { pet, owner, email, date, symptoms, id } = patient;

    /**
     *  Show confirm alert and delete the element.
     */
    const handleDelete = () => {
        const result = confirm('¿Deseas eliminar este paciente?');
        
        if (result) {
            deletePatient(id);
        }
    };

    return (
        <li className="mx-3 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case">
                    &nbsp;{pet}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:
                <span className="font-normal normal-case">
                    &nbsp;{owner}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:
                <span className="font-normal normal-case">
                    &nbsp;{email}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta:
                <span className="font-normal normal-case">
                    &nbsp;{date}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas:
                <span className="font-normal normal-case">
                    &nbsp;{symptoms}
                </span>
            </p>

            <div className="flex justify-around mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => { setCurrentPatient(patient); }}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};
export default PatientItem;