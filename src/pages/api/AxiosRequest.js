
import BASE_URL from './../../globalVariable';
import axios from "axios";
export const getData = async (params) =>{
    const response = await axios.get(`${BASE_URL}api/${params}`);
    if (response && response.data) {
     return response.data.data;
    }
}


export const createData = async ({url,data}) =>{
 
  const options= {
    method:"post",
    url:`${BASE_URL}api/${url}`,
    headers:{
      'Content-Type': 'application/json',
      "Authorization": "Bearer 89704e9618f3e1a7816c2042db931eb49612a40e5ac28c037d80d4ca6ddfa442229b719e3f1bb2dda49e8ee1bbbf88cc7bbea4bb86bbe06dda4d8f715d5c0f872512b6710455a1d81b69c944d174e5af64d710b18de793f14d0ab39b582897f2622abef621d1cf6b3b4ebd4dfd47607c4b0b465ee8679b5b3658c6dcf23bd2f6",
    },
    data:data
  }
  const response = await axios.request(options);
  if (response && response.data) {
   return response.data.data;
  }


}
