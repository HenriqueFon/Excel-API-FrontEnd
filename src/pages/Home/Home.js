import "./Home.css";
import DownloadButton from "../../components/DownloadButton/DownloadButton";

const Home = () => {
    return(
        <div className = "container">
            <h1>Bem vindo ao ECI, Excel Consultas, para poder usar o software
                baixe aqui o nosso template.
            </h1>
            <DownloadButton url = 'https://localhost:44346/Excel/Get-model-file' />
        </div>
    )
}

export default Home;