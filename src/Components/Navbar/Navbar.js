import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <nav className = "navbar">
                    <Link className = "link" to = "/"> Home </Link>
                    <Link className = "link" to = "/Extract"> Consultar </Link>
                    <Link className = "link" to = "/SendExcel"> Importar </Link>
                    <Link className = "link" to = "/Consult"> Exportar </Link>
            </nav>
        </>
    )
}

export default Navbar;