const getCargas = async ()=>{
    let resp = await axios.get("api/cargas/get");
    return resp.data;
};

const crearCarga = async (carga)=>{
    let resp = await axios.post("api/cargas/post", carga, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};