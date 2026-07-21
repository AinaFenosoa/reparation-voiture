<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Liste des articles
     */
    public function index(Request $request)
    {
        $query = Blog::query();

        // Articles en vedette
        if ($request->has('featured') && $request->featured == 'true') {
            $query->where('is_featured', true);
        }

        // Recherche
        if ($request->has('search')) {
            $query->where('titre', 'like', '%' . $request->search . '%')
                ->orWhere('contenu', 'like', '%' . $request->search . '%');
        }

        // Tri
        $sort = $request->get('sort', 'datePublication');
        $direction = $request->get('direction', 'desc');
        $query->orderBy($sort, $direction);

        // Pagination
        $perPage = $request->get('per_page', 9);
        $posts = $query->paginate($perPage);

        return response()->json([
            'message' => "Blog est avec succes ",
            'data' => $posts->items(),
            'meta' => [
                'current_page' => $posts->currentPage(),
                'per_page' => $posts->perPage(),
                'total' => $posts->total(),
                'last_page' => $posts->lastPage(),
            ]
        ]);
    }

    /**
     * Afficher un article spécifique
     */
    public function show($slug)
    {
        $post = Blog::where('slug', $slug)->firstOrFail();

        return response()->json([
            'data' => $post
        ]);
    }

    /**
     * Articles en vedette
     */
    public function featured()
    {
        $posts = Blog::where('is_featured', true)
            ->orderBy('datePublication', 'desc')
            ->take(3)
            ->get();

        return response()->json([
            'data' => $posts
        ]);
    }

    /**
     * Derniers articles
     */
    public function latest()
    {
        $posts = Blog::orderBy('datePublication', 'desc')
            ->take(6)
            ->get();

        return response()->json([
            'data' => $posts
        ]);
    }

    /**
     * Créer un article (admin)
     */
    public function store(Request $request)
    {
        $validator = validator($request->all(), [
            'titre' => 'required|string|max:255',
            'contenu' => 'required|string',
            'extrait' => 'nullable|string',
            'imageBlog' => 'nullable|string',
            'datePublication' => 'nullable|date',
            'is_featured' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $post = Blog::create([
            'titre' => $request->titre,
            'slug' => Str::slug($request->titre),
            'contenu' => $request->contenu,
            'extrait' => $request->extrait,
            'imageBlog' => $request->imageBlog,
            'datePublication' => $request->datePublication ?? now(),
            'is_featured' => $request->is_featured ?? false,
        ]);

        return response()->json([
            'message' => 'Article créé avec succès',
            'data' => $post
        ], 201);
    }


    /**
 * Mettre à jour un article (Admin)
 */
public function update(Request $request, $id)
{
    $validator = Validator::make($request->all(), [
        'titre' => 'sometimes|string|max:255',
        'contenu' => 'sometimes|string',
        'extrait' => 'nullable|string',
        'imageBlog' => 'nullable|string',
        'is_featured' => 'boolean',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $post = Blog::findOrFail($id);
    
    if ($request->has('titre')) {
        $post->slug = Str::slug($request->titre);
    }
    
    $post->update($request->all());

    return response()->json([
        'message' => 'Article mis à jour avec succès',
        'data' => $post
    ]);
}

/**
 * Supprimer un article (Admin)
 */
public function destroy($id)
{
    $post = Blog::findOrFail($id);
    $post->delete();

    return response()->json([
        'message' => 'Article supprimé avec succès'
    ]);
}
}