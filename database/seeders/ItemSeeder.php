<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Item;
use App\Models\Category;

class ItemSeeder extends Seeder
{
    public function run(): void
    {
        $tenda = Category::where('slug', 'tenda')->first();
        $sleepingBag = Category::where('slug', 'sleeping-bag')->first();
        $matras = Category::where('slug', 'matras')->first();
        $cookingSet = Category::where('slug', 'cooking-set')->first();
        $backpack = Category::where('slug', 'backpack')->first();

        $items = [
            // Tenda
            [
                'name' => 'Tenda Kap 4',
                'slug' => 'tenda-kap-4',
                'description' => 'Tenda kapasitas 4 orang, waterproof, mudah dipasang',
                'image' => 'tenda1.jpg',
                'price' => 150000,
                'stock' => 5,
                'specifications' => 'Kapasitas: 4 orang, Material: Polyester, Waterproof: 3000mm',
                'category_id' => $tenda->id,
                'is_available' => true,
            ],
            [
                'name' => 'Tenda Dome 2',
                'slug' => 'tenda-dome-2',
                'description' => 'Tenda model dome untuk 2 orang, ringan dan mudah dibawa',
                'image' => 'tenda2.jpg',
                'price' => 100000,
                'stock' => 8,
                'specifications' => 'Kapasitas: 2 orang, Material: Nylon, Waterproof: 2000mm',
                'category_id' => $tenda->id,
                'is_available' => true,
            ],
            // Sleeping Bag
            [
                'name' => 'Sleeping Bag Mummy',
                'slug' => 'sleeping-bag-mummy',
                'description' => 'Kantong tidur model mummy, hangat hingga 5°C',
                'image' => 'sb1.jpg',
                'price' => 50000,
                'stock' => 10,
                'specifications' => 'Suhu: 5°C, Material: Polyester, Dimensi: 210x80cm',
                'category_id' => $sleepingBag->id,
                'is_available' => true,
            ],
            // Matras
            [
                'name' => 'Matras Angin',
                'slug' => 'matras-angin',
                'description' => 'Matras angin portable, nyaman untuk tidur di alam',
                'image' => 'matras1.jpg',
                'price' => 75000,
                'stock' => 7,
                'specifications' => 'Material: TPU, Dimensi: 190x60x5cm, Include: Pompa',
                'category_id' => $matras->id,
                'is_available' => true,
            ],
            // Cooking Set
            [
                'name' => 'Cooking Set 4pcs',
                'slug' => 'cooking-set-4pcs',
                'description' => 'Set peralatan masak untuk camping, lengkap dan praktis',
                'image' => 'cs1.jpg',
                'price' => 85000,
                'stock' => 6,
                'specifications' => 'Include: Panci 1.5L, Wajan, Piring, Sendok/Garpu, Kompor',
                'category_id' => $cookingSet->id,
                'is_available' => true,
            ],
            // Backpack
            [
                'name' => 'Carrier 60L',
                'slug' => 'carrier-60l',
                'description' => 'Tas carrier kapasitas 60L, nyaman untuk pendakian',
                'image' => 'bp1.jpg',
                'price' => 100000,
                'stock' => 4,
                'specifications' => 'Kapasitas: 60L, Material: Nylon, Frame: Internal',
                'category_id' => $backpack->id,
                'is_available' => true,
            ],
        ];

        foreach ($items as $item) {
            Item::create($item);
        }
    }
}