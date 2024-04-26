import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://github.com/Nidasakinaa/ws-nida2024/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}