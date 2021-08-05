@extends('layouts.master')

@section('contenido')
    <div class="row mt-2">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-warning text-white">
                    <span>Filtre Aquí</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="filtrocarga-cbx">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hover table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr>
                        <td>Nombre de la Carga</td>
                        <td>Rut de la Carga</td>
                        <td>Fecha de nacimiento de la Carga</td>
                        <td>Tipo de Carga</td>
                        <td>Sexo de la Carga</td>
                        <td>Inicio del Beneficio</td>
                        <td>Persona a la que le pertenece esta Carga</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-carga">

                </tbody>
            </table>
        </div>
    </div>
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/cargasService.js')}}"></script>
    <script src="{{asset('js/ver_cargas.js')}}"></script>
@endsection