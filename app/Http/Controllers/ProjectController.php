<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function add()
    {
        // Maak een model aan
        $model = new Product();
        // definieer de velden
        $model->titel = 'mijn data';
        // sla het model op
        $model->save();
    }
}
