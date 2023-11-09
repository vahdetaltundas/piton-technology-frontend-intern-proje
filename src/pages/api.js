import axios from "axios";

const baseURL='http://localhost:3001';

const axiosInstance=axios.create({
    baseURL,
});


export const fetchEmployees= async ()=>{
    const response= await axiosInstance.get("/data");
    return response.data;
}