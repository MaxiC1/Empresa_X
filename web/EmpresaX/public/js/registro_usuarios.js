document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
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

    if(errores.length== 0){
        let usuario = {};
        usuario.nombre = nombre;
        usuario.correo = correo;
        usuario.nusuario = nusuario;
        //TODO: Falta Validar!!!!
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