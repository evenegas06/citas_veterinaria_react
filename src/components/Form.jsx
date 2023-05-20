const Form = () => {
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

            <form className="bg-white shadow-md rounded-lg py-7 px-5">
                <div>
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
                    />
                </div>
            </form>
        </div>
    );
};
export default Form;