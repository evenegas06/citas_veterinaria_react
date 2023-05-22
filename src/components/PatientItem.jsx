/* eslint-disable react/prop-types */
const PatientItem = ({ patient }) => {
    const {pet, owner, email, date, symptoms} = patient;
    
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
        </li>
    );
};
export default PatientItem;