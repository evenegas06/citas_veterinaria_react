/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ErrorAlert from './ErrorAlert.jsx';

const Form = ({ patient_list, setPatientList, current_patient, setCurrentPatient }) => {
    /* ----- States ----- */
    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    /* ----- Hooks ----- */
    useEffect(() => {
        if (Object.keys(current_patient).length > 0) {
            // setPatient(current_patient);
            setPet(current_patient.pet);
            setOwner(current_patient.owner);
            setEmail(current_patient.email);
            setDate(current_patient.date);
            setSymptoms(current_patient.symptoms);
        }
    }, [current_patient]);

    /**
     * Create a random id.
     * 
     * @returns {String}
     */
    const createRandomId = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);

        return random + date;
    };

    /**
     * 
     * @param {*} event 
     * @returns 
     */
    const addPatient = (event) => {
        event.preventDefault();

        // validations v1
        if ([pet, owner, email, date, symptoms].includes('')) {
            setError(true);
            return;
        }

        const patient = {
            pet,
            owner,
            email,
            date,
            symptoms,
        };

        if (current_patient.id) {
            // Editando
            patient.id = current_patient.id;

            const act = patient_list.map((item) => {
                return item.id === current_patient.id ? patient : item;
            });

            setPatientList(act);
            setCurrentPatient({});

        } else {
            // Nuevo registro
            patient.id = createRandomId();
            setPatientList([
                ...patient_list,
                patient
            ]);
        }

        setError(false);
        setPet('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');

    };

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;

    //     setPatient({
    //         ...patient,
    //         [name]: value
    //     });
    // };

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-lg mt-5 mb-7 text-center">
                Añade Pacientes y
                <span className="text-indigo-600 font-bold">
                    &nbsp;Administralos
                </span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-7 px-5 mb-10"
                onSubmit={addPatient}
            >
                {error && <ErrorAlert message="Todos los campos son obligatorios" />}

                <div className="mb-5">
                    <label
                        htmlFor="pet"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Mascota
                    </label>

                    <input
                        type="text"
                        id="pet"
                        name="pet"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={pet}
                        onChange={(event) => setPet(event.target.value)}
                    // onChange={handleInputChange}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="owner"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Propietario
                    </label>

                    <input
                        type="text"
                        id="owner"
                        name="owner"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Correo Electrónico
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Correo de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Fecha de alta
                    </label>

                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="symptoms"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Síntomas
                    </label>

                    <textarea
                        id="symptoms"
                        name="symptoms"
                        placeholder="Describe los síntomas de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={symptoms}
                        onChange={(event) => setSymptoms(event.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={current_patient.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
};
export default Form;