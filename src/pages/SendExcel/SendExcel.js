import { ImportExcelFile } from "../../data/ImportExcelFile";
import ImportForm from "../../components/ImportForm/ImportForm";
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
                <p>Insira o seu arquivo excel para que seja armazenado dentro
                    da nossa base de dados.</p>
                <ImportForm 
                    handleFileChange = {handleFileChange}
                    importFile = {importFile}
                />
            </div>
        </>
    )
}

export default SendExcel;