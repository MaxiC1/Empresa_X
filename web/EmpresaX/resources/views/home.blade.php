@extends("layouts.master")

@section('contenido')

    <div class="mt-5 mx-auto">
        <div class="card">
            <div class="card-header bg-warning text-light">
                <span>Gestion de Usuarios</span>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover table-striped">
                        <thead class="bg-dark text-white">
                            <tr>
                                <th>NRO</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection