import { Link } from "react-router-dom";

function Register(){

    return (
        <>
            <h1>Página de registro</h1>
            <Link to="/dashboard">Pincha aquí para acceder al Dashboard</Link>
        </>
    );
}

export default Register;