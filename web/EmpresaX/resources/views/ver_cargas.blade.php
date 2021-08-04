@extends('layouts.master')

@section('contenido')
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
    
@endsection