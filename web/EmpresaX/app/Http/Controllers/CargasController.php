<?php

namespace App\Http\Controllers;
use App\Models\Carga;
use Illuminate\Http\Request;

class CargasController extends Controller
{
    public function getTiposCargas(){
        $tipoCarga = array();
        $tipoCarga[] = "Madre";
        $tipoCarga[] = "Padre";
        $tipoCarga[] = "Hijo";
        $tipoCarga[] = "Hija";
        $tipoCarga[] = "Conyuge";

        return $tipoCarga;
    }

    public function getCargas(){
        $cargas = Carga::all();
        return $cargas;
    }

    public function crearCarga(Request $request){
        $input = $request->all();
        $carga = new Carga();
        $carga->nombre = $input["nombre"];
        $carga->rut = $input["rut"];
        $carga->nacimiento_carga = $input["nacimiento_carga"];
        $carga->tipocarga = $input["tipocarga"];
        $carga->sexo = $input["sexo"];
        $carga->fecha_beneficio = $input["fecha_beneficio"];
        $carga->nombre_carga = $input["nombre_carga"];

        $carga->save();
        return $carga;
    }
}
