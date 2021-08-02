<!doctype html>
<html lang="es">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/style_navbar.css')}}">

    <title>Empresa X</title>
  </head>
  <body>
    
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{route('registro_usuarios')}}">
                    <img src="{{ asset('')}}" class="logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Usuarios</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="{{route('registro_usuarios')}}">Registrar Usuario</a>
                              <a class="dropdown-item" href="{{route('ver_usuarios')}}">Ver Tabla de Usuarios</a>
                            </ul>
                        </li>
                        <!--TODO: HACER MAS VISTAS -->
                        <!-- TODO: HACER FORMULARIO DE USUARIOS -->
                    </div>
                </div>
                <!-- <form class="d-flex"> -->
                    <!-- <button id="btn-cerrar_sesion" class="btn btn-outline-dark" type="">Cerrar Sesión</button> -->
                    <!-- bg-danger text-light -->
                <!-- </form> -->
            </div>
        </nav>
    </header>

    <main class="container-fluid">
        @yield("contenido")  
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{asset('js/axiosconfig.js')}}"></script>
    @yield("javascript")
  </body>
</html>