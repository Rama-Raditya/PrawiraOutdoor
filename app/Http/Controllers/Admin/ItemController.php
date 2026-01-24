<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::with('category')->latest()->paginate(10);
        return inertia('Admin/Items/Index', [
            'items' => $items,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return inertia('Admin/Items/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'specifications' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_available' => 'boolean',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120',
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('items', 'public');
            $validated['image'] = $imagePath;
        }

        $validated['slug'] = Str::slug($validated['name']);

        Item::create($validated);

        return redirect()->route('admin.items.index')
            ->with('success', 'Item berhasil ditambahkan!');
    }

    public function show(Item $item)
    {
        return inertia('Admin/Items/Show', [
            'item' => $item->load('category'),
        ]);
    }

    public function edit(Item $item)
    {
        $categories = Category::all();
        return inertia('Admin/Items/Edit', [
            'item' => $item,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Item $item)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'specifications' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
            'is_available' => 'boolean',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            if ($item->image) {
                Storage::disk('public')->delete($item->image);
            }

            $imagePath = $request->file('image')->store('items', 'public');
            $validated['image'] = $imagePath;
        }

        $validated['slug'] = Str::slug($validated['name']);

        $item->update($validated);

        return redirect()->route('admin.items.index')
            ->with('success', 'Item berhasil diperbarui!');
    }

    public function destroy(Item $item)
    {
        // Delete image
        if ($item->image) {
            Storage::disk('public')->delete($item->image);
        }

        $item->delete();

        return redirect()->route('admin.items.index')
            ->with('success', 'Item berhasil dihapus!');
    }
}