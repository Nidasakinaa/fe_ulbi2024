//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-nida2024-72645f997179.herokuapp.com/presensi/" + presensiId;