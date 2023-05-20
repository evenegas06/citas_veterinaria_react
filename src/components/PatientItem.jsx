const PatientItem = () => {
    return (
        <li className="mx-3 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case">
                    &nbsp;Hook
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:
                <span className="font-normal normal-case">
                    &nbsp;Eduardo
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:
                <span className="font-normal normal-case">
                    &nbsp;test@mail.com
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta:
                <span className="font-normal normal-case">
                    &nbsp;25 de mayo de 2023
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas:
                <span className="font-normal normal-case">
                    &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam consequatur tempora labore natus veniam excepturi architecto quibusdam, deleniti soluta laborum corrupti minima deserunt ratione.
                </span>
            </p>
        </li>
    );
};
export default PatientItem;