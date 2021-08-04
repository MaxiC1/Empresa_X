const cargarSexos = async()=>{
    let sexos = await getSexos();
    let sexoSelect = document.querySelector("#sexo-select");
    sexos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        sexoSelect.appendChild(option);
    });
};

cargarTipoLicencia = async()=>{
    let tiposLicencias = await getTiposLicencia();
    let tipoLicenciaSelect = document.querySelector("#tipolicencia-select");
    tiposLicencias.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        tipoLicenciaSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarSexos();
    cargarTipoLicencia();
});

document.querySelector("#registrarlicencia-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let rut = document.querySelector("#rut-txt").value;
    let otorgamiento = document.querySelector("#otorgamiento-txt").value;
    let reposo = document.querySelector("#reposo-txt").value;
    let sexo = document.querySelector("#sexo-select").value;
    let dias = document.querySelector("#dias-txt").value;
    let tipolicencia = document.querySelector("#tipolicencia-select").value;
    let licencia = {};
    licencia.nombre = nombre;
    licencia.rut = rut;
    licencia.otorgamiento = otorgamiento;
    licencia.reposo = reposo;
    licencia.sexo = sexo;
    licencia.dias = dias;
    licencia.tipolicencia = tipolicencia;
    let res = await crearLicencia(licencia);
    await Swal.fire("Licencia Registrada", "Licencia creada exitosamente", "info");
    window.location.href = "ver_licencias";
});