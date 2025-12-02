import { Link } from "react-router-dom";

function Dashboard(){

    return (
        <>
            <h1>Estamos en el Dashboard</h1>
            <Link to="/">Volver</Link>
        </>
    );
}

export default Dashboard;