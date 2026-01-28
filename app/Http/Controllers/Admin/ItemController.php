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
            $image = $request->file('image');
            
            // Store in public storage
            $imagePath = $image->store('items', 'public');
            $validated['image'] = $imagePath;
            
            // Also store in database as base64
            $imageData = base64_encode(file_get_contents($image->getRealPath()));
            $validated['image_data'] = $imageData;
            
            // Additionally, copy to git-tracked directory for version control
            $this->storeImageInGit($image, $imagePath);
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
            // Delete old image from public storage
            if ($item->image) {
                Storage::disk('public')->delete($item->image);
            }
            
            // Delete old image from git directory
            if ($item->image) {
                $this->deleteImageFromGit($item->image);
            }

            $image = $request->file('image');
            
            // Store in public storage
            $imagePath = $image->store('items', 'public');
            $validated['image'] = $imagePath;
            
            // Store in database as base64
            $imageData = base64_encode(file_get_contents($image->getRealPath()));
            $validated['image_data'] = $imageData;
            
            // Store in git-tracked directory
            $this->storeImageInGit($image, $imagePath);
        }

        $validated['slug'] = Str::slug($validated['name']);

        $item->update($validated);

        return redirect()->route('admin.items.index')
            ->with('success', 'Item berhasil diperbarui!');
    }

    public function destroy(Item $item)
    {
        // Delete image from public storage
        if ($item->image) {
            Storage::disk('public')->delete($item->image);
        }
        
        // Delete image from git directory
        if ($item->image) {
            $this->deleteImageFromGit($item->image);
        }

        $item->delete();

        return redirect()->route('admin.items.index')
            ->with('success', 'Item berhasil dihapus!');
    }
    
    /**
     * Store image in git-tracked directory for version control
     */
    private function storeImageInGit($image, $imagePath)
    {
        // Create directory if not exists
        $gitStorageDir = storage_path('app/git-images/items');
        if (!file_exists($gitStorageDir)) {
            mkdir($gitStorageDir, 0755, true);
        }
        
        // Copy image to git-tracked directory
        $filename = basename($imagePath);
        $destinationPath = $gitStorageDir . '/' . $filename;
        copy($image->getRealPath(), $destinationPath);
    }
    
    /**
     * Delete image from git-tracked directory
     */
    private function deleteImageFromGit($imagePath)
    {
        $filename = basename($imagePath);
        $gitImagePath = storage_path('app/git-images/items/' . $filename);
        
        if (file_exists($gitImagePath)) {
            unlink($gitImagePath);
        }
    }
}