
import BASE_URL from './../../globalVariable';
import axios from "axios";
export const getData = async (params) =>{
    const response = await axios.get(`${BASE_URL}api/${params}`);
    if (response && response.data) {
     return response.data.data;
    }
}

