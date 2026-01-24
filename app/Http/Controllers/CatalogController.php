<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\Category;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    public function index()
    {
        $items = Item::with('category')->where('is_available', true)->get();
        $categories = Category::all();
        
        return inertia('Catalog/Index', [
            'items' => $items,
            'categories' => $categories,
        ]);
    }

    public function show(Item $item)
    {
        return inertia('Catalog/Show', [
            'item' => $item->load('category'),
        ]);
    }
}