import { FetchExcelLines } from "./FetchExcelLines";

export const getData = async () => {
    let res = await FetchExcelLines();
    return res;
}