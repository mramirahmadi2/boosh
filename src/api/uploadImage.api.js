
import http from "../services/http.service"


export async function imageUpload(data,config){
    try {
        const response = await http.post("/upload",data,config);
        return response;
    } catch(e){
        return Promise.reject(e);
    }




}