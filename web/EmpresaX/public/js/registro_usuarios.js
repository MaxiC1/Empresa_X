document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let anionacimiento = document.querySelector("#anionacimiento-txt").value.trim();
    let correo = document.querySelector("#correo-txt").value.trim();
    let nusuario = document.querySelector("#nusuario-txt").value.trim();

    let errores = [];
    if(correo === ""){
        errores.push("Debe ingresar un correo");
    }else{
        let usuarios = await getUsuarios();
        let usuarioEncontrado = usuarios.find(c=>c.correo.toLowerCase() === correo.toLowerCase());
        if(usuarioEncontrado != undefined){
            errores.push("El Correo ya existe");
        }
    }

    if(nusuario === ""){
        errores.push("Debe ingresar un usuario valido");
    }else{
        let usuarios = await getUsuarios();
        let usuarioEncontrado = usuarios.find(c=>c.nusuario.toLowerCase() === nusuario.toLowerCase());
        if(usuarioEncontrado != undefined){
            errores.push("El Usuario ya existe");
        }
    }

    if(isNaN(anionacimiento)){
        errores.push("El año debe ser númerico");
    }else if( +anionacimiento < 1900){
        errores.push("El año es incorrecto");
    }

    if(errores.length== 0){
        let usuario = {};
        usuario.nombre = nombre;
        usuario.anionacimiento = anionacimiento;
        usuario.correo = correo;
        usuario.nusuario = nusuario;
        let res = await crearUsuarios(usuario);
        await Swal.fire("Usuario Registrado", "Usuario Registrado Exitosamente", "info");
        window.location.href = "ver_usuarios";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        })
    }
});