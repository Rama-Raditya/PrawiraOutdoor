<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class SyncImagesSeeder extends Seeder
{
    /**
     * Sync images from git-tracked storage to public storage
     * Run this after cloning the project: php artisan db:seed --class=SyncImagesSeeder
     */
    public function run(): void
    {
        $gitImagesPath = storage_path('app/git-images/items');
        $publicStoragePath = storage_path('app/public/items');
        
        // Create public storage directory if not exists
        if (!file_exists($publicStoragePath)) {
            mkdir($publicStoragePath, 0755, true);
        }
        
        // Check if git images directory exists
        if (!file_exists($gitImagesPath)) {
            $this->command->info('No git images directory found. Creating it...');
            mkdir($gitImagesPath, 0755, true);
            return;
        }
        
        // Get all images from git storage
        $images = File::files($gitImagesPath);
        
        if (empty($images)) {
            $this->command->info('No images found in git storage.');
            return;
        }
        
        // Copy each image to public storage
        $syncedCount = 0;
        foreach ($images as $image) {
            $filename = $image->getFilename();
            $destination = $publicStoragePath . '/' . $filename;
            
            if (!file_exists($destination)) {
                copy($image->getPathname(), $destination);
                $syncedCount++;
                $this->command->info("Synced: {$filename}");
            }
        }
        
        $this->command->info("Successfully synced {$syncedCount} images to public storage.");
    }
}