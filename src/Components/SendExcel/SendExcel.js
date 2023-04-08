import { ImportExcelFile } from "../../Data/ImportExcelFile";
import "./SendExcel.css";
import { useState } from 'react';
import axios from "axios";

const SendExcel = () => {

    var excelFile = "";

    const handleFileChange = async (event) => {
        excelFile = event.target.files[0];
    
        let formData = new FormData();
        formData.append("file", excelFile, excelFile.name);

        const url = "https://localhost:44346/Excel/Insert-data";
        
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log("File uploaded succesfully")
        })
        .catch(error => {
            console.log("Error uploading file")
            console.error('Error', error)
        });
    }

    const importFile = () => {
        console.log("rodei");
        // console.log(selectedFile);
        // ImportExcelFile(selectedFile);
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