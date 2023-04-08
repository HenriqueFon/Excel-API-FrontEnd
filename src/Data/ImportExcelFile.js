import axios from "axios";

export const ImportExcelFile = async (file) => {
    console.log("Arquivo:" + file);
    
    let formData = new FormData();
    formData.append("file", file, file.name);

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