import axios from "axios";

export const FetchExcelLines = async () => {
    let url = "https://localhost:44346/Excel/Get-file";
    const res = await axios.get(url);
    
    if(res.status !== 200) {
        console.log("Erro ao chamar a API");
        return [];
    }
    
    return res;
}