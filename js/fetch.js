import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-nida2024-72645f997179.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}