<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        // Get statistics
        $totalProducts = Item::count();
        $totalCategories = Category::count();
        $lowStockItems = Item::where('stock', '<', 5)->count();
        $outOfStockItems = Item::where('stock', 0)->count();
        
        // Get low stock products
        $lowStockProducts = Item::with('category')
            ->where('stock', '<', 5)
            ->orderBy('stock', 'asc')
            ->limit(5)
            ->get();
        
        // Get recently added products
        $recentProducts = Item::with('category')
            ->latest()
            ->limit(5)
            ->get();
        
        // Get category statistics
        $categoryStats = Category::withCount('items')
            ->get()
            ->map(function ($category) {
                return [
                    'name' => $category->name,
                    'count' => $category->items_count,
                ];
            });
        
        // Get stock summary by category
        $stockByCategory = Category::get()
            ->map(function ($category) {
                $totalStock = Item::where('category_id', $category->id)->sum('stock');
                return [
                    'name' => $category->name,
                    'total_stock' => $totalStock,
                ];
            });
        
        // Calculate total inventory value
        $totalInventoryValue = Item::sum(DB::raw('price * stock'));
        
        // Get availability statistics
        $availableProducts = Item::where('is_available', true)->count();
        $unavailableProducts = Item::where('is_available', false)->count();

        return inertia('Admin/Dashboard', [
            'stats' => [
                'totalProducts' => $totalProducts,
                'totalCategories' => $totalCategories,
                'lowStockItems' => $lowStockItems,
                'outOfStockItems' => $outOfStockItems,
                'totalInventoryValue' => $totalInventoryValue,
                'availableProducts' => $availableProducts,
                'unavailableProducts' => $unavailableProducts,
            ],
            'lowStockProducts' => $lowStockProducts,
            'recentProducts' => $recentProducts,
            'categoryStats' => $categoryStats,
            'stockByCategory' => $stockByCategory,
        ]);
    }
}