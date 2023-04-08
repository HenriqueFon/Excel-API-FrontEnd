import { ImportExcelFile } from "../../Data/ImportExcelFile";
import "./SendExcel.css";

const SendExcel = () => {

    var excelFile = "";

    const handleFileChange = async (event) => {
        excelFile = event.target.files[0];
        console.log(excelFile);
    }

    const importFile = async () => {
        await ImportExcelFile(excelFile);
    }

    return(
        <>
            <div className = "container">
                <h1>Importar excel</h1>
                    Insira o seu arquivo excel para que seja armazenado dentro
                    da nossa base de dados.
                <form name = "input-file" onSubmit = {importFile}>
                    <div>
                        <label htmlFor= "input-file">Insira o arquivo</label>
                        <input type="file"
                        id = "input-file"
                        onChange = {handleFileChange}
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SendExcel;