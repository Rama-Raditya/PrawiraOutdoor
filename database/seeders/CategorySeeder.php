<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Tenda', 'slug' => 'tenda', 'description' => 'Berbagai jenis tenda untuk camping'],
            ['name' => 'Sleeping Bag', 'slug' => 'sleeping-bag', 'description' => 'Kantong tidur berkualitas'],
            ['name' => 'Matras', 'slug' => 'matras', 'description' => 'Matras untuk kenyamanan tidur'],
            ['name' => 'Cooking Set', 'slug' => 'cooking-set', 'description' => 'Peralatan masak untuk camping'],
            ['name' => 'Backpack', 'slug' => 'backpack', 'description' => 'Tas carrier untuk perjalanan'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}