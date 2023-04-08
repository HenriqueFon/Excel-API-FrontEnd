import "./Home.css";

const Home = () => {
    return(
        <div className = "container">
            <h1>Bem vindo ao ECI, Excel Consultas, para poder usar o software
                baixe aqui o nosso template.
            </h1>
            <div><a className = "button" href="https://localhost:44346/Excel/Get-model-file">Baixe aqui nosso template</a></div>
        </div>
    )
}

export default Home;