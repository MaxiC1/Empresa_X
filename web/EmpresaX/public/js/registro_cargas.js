const cargarTiposCargas = async()=>{
    let resultado = await axios.get("api/tiposCargas/get");
    let cargas = resultado.data;
    let cargasSelect = document.querySelector("#tipoCarga-select");
    cargas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        cargasSelect.appendChild(option);
    });
}

const cargarSexos = async()=>{
    let sexos = await getSexos();
    let sexoSelect = document.querySelector("#sexo-select");
    sexos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        sexoSelect.appendChild(option);
    });
};

cargarSexos();
cargarTiposCargas();

document.querySelector("#registrarcarga-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let rut = document.querySelector("#rut-txt").value;
    let nacimientoCarga = document.querySelector("#nacimientoCarga-txt").value;
    let tipoCarga = document.querySelector("#tipoCarga-select").value;
    let sexo = document.querySelector("#sexo-select").value;
    let fechaBeneficio = document.querySelector("#fechaBeneficio-txt").value;
    let nombreCarga = document.querySelector("#nombreCarga-txt").value;
    let carga = {};
    carga.nombre = nombre;
    carga.rut = rut;
    carga.nacimiento_carga = nacimientoCarga;
    carga.tipocarga = tipoCarga;
    carga.sexo = sexo;
    carga.fecha_beneficio = fechaBeneficio;
    carga.nombre_carga = nombreCarga;
    let res = await crearCarga(carga);
    Swal.fire("Carga Registrada", "Carga registrada exitosamente", "info");
});