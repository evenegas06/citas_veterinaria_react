import { useState } from 'react';

const Form = () => {
    /* --- Hooks - State --- */
    const [patient, setPatient] = useState({
        pet: '',
        owner: '',
        email: '',
        date: '',
        symptoms: '',
    });

    /* --- Functions --- */
    const addPatient = (e) => {
        e.preventDefault();
        setPatient({});
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        
        setPatient({
            ...patient,
            [name]: value
        });
    };

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
                        onChange={handleInputChange}
                    // value={name}
                    // onChange={(event) => { setName(event.target.value); }}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Agregar Paciente"
                />
            </form>
        </div>
    );
};
export default Form;