<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Liste des produits avec filtres
     */
    public function index(Request $request)
    {
        $query = Service::query();

        // Recherche par nom
        if ($request->has('search')) {
            $query->where('nom', 'like', '%' . $request->search . '%');
        }

        // Produits en vedette
        if ($request->has('featured') && $request->featured == 'true') {
            $query->where('is_featured', true);
        }

        // Deals of the day
        if ($request->has('deals') && $request->deals == 'true') {
            $query->where('is_deal_of_day', true);
        }

        // Tri
        $sort = $request->get('sort', 'created_at');
        $direction = $request->get('direction', 'desc');
        $query->orderBy($sort, $direction);

        // Pagination
        $perPage = $request->get('per_page', 12);
        $services= $query->paginate($perPage);

        return response()->json([
             'message ' => "les services est bien etablie",
            'data' =>   $services->items(),
            'meta' => [
                'current_page' =>  $services->currentPage(),
                'per_page' =>   $services->perPage(),
                'total' =>  $services->total(),
                'last_page' =>   $services->lastPage(),
            ]

           
        ]);
    }

    /**
     * Afficher un produit spécifique
     */
    public function show($slug)
    {
        $service = Service::where('slug', $slug)->firstOrFail();

        return response()->json([
            'data' => $service
        ]);
    }

    /**
     * Deals of the day
     */
    public function dealsOfDay()
    {
        $services = Service::where('is_deal_of_day', true)
            ->take(4)
            ->get();

        return response()->json([
            'data' => $services
        ]);
    }

    /**
     * Produits en vedette
     */
    public function featured()
    {
        $services = Service::where('is_featured', true)
            ->take(6)
            ->get();

        return response()->json([
            'data' => $services
        ]);
    }

    /**
     * Produits similaires
     */
    public function related($slug)
    {
        $service = Service::where('slug', $slug)->firstOrFail();

        $related = Service::where('id', '!=', $product->id)
            ->where('categorie', $product->categorie)
            ->take(4)
            ->get();

        return response()->json([
            'data' => $related
        ]);
    }

    /**
     * Créer un produit (admin)
     */
    public function store(Request $request)
    {
        $validator = validator($request->all(), [
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
            'prix' => 'required|numeric|min:0',
            'photoService' => 'nullable|string',
            'is_featured' => 'boolean',
            'is_deal_of_day' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $service = Service::create([
            'nom' => $request->nom,
            'slug' => Str::slug($request->nom),
            'description' => $request->description,
            'prix' => $request->prix,
            'photoService' => $request->photoService,
            'is_featured' => $request->is_featured ?? false,
            'is_deal_of_day' => $request->is_deal_of_day ?? false,
        ]);

        return response()->json([
            'message' => 'Service créé avec succès',
            'data' => $service
        ], 201);
    }


    /**
 * Mettre à jour un produit (Admin)
 */
public function update(Request $request, $id)
{
    $validator = Validator::make($request->all(), [
        'nom' => 'sometimes|string|max:255',
        'description' => 'nullable|string',
        'prix' => 'sometimes|numeric|min:0',
        'is_featured' => 'boolean',
        'is_deal_of_day' => 'boolean',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $service = Service::findOrFail($id);
    $service->update($request->all());

    return response()->json([
        'message' => 'Service mis à jour avec succès',
        'data' => $service
    ]);
}

/**
 * Supprimer un produit (Admin)
 */
public function destroy($id)
{
    $service = Service::findOrFail($id);
    $service->delete();

    return response()->json([
        'message' => 'Service supprimé avec succès'
    ]);
}
}