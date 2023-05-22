/* eslint-disable react/prop-types */
const ErrorAlert = ({ message }) => {
    return (
        <p className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
            {message}
        </p>
    );
};
export default ErrorAlert;