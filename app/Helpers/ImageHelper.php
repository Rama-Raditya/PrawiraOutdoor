<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ImageHelper
{
    /**
     * Store image in multiple locations:
     * 1. Public storage (for serving)
     * 2. Git-tracked directory (for version control)
     * 3. Database (as base64 - optional but recommended)
     */
    public static function storeImage($file, $directory = 'items')
    {
        // 1. Store in public storage
        $imagePath = $file->store($directory, 'public');
        
        // 2. Store in git-tracked directory
        $gitStorageDir = storage_path("app/git-images/{$directory}");
        if (!file_exists($gitStorageDir)) {
            mkdir($gitStorageDir, 0755, true);
        }
        
        $filename = basename($imagePath);
        $destinationPath = $gitStorageDir . '/' . $filename;
        copy($file->getRealPath(), $destinationPath);
        
        // 3. Get base64 for database storage
        $imageData = base64_encode(file_get_contents($file->getRealPath()));
        
        return [
            'path' => $imagePath,
            'data' => $imageData,
        ];
    }
    
    /**
     * Delete image from all locations
     */
    public static function deleteImage($imagePath, $directory = 'items')
    {
        // Delete from public storage
        if ($imagePath && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        }
        
        // Delete from git-tracked directory
        $filename = basename($imagePath);
        $gitImagePath = storage_path("app/git-images/{$directory}/" . $filename);
        
        if (file_exists($gitImagePath)) {
            unlink($gitImagePath);
        }
    }
    
    /**
     * Get image URL with fallback to database
     */
    public static function getImageUrl($item)
    {
        // Try database image first
        if ($item->image_data) {
            return 'data:image/jpeg;base64,' . $item->image_data;
        }
        
        // Fallback to file storage
        if ($item->image) {
            $publicPath = storage_path('app/public/' . $item->image);
            
            // If file doesn't exist in public storage, try to restore from git storage
            if (!file_exists($publicPath)) {
                self::restoreImageFromGit($item->image);
            }
            
            return '/storage/' . $item->image;
        }
        
        return '';
    }
    
    /**
     * Restore image from git storage to public storage
     */
    public static function restoreImageFromGit($imagePath)
    {
        $filename = basename($imagePath);
        $directory = dirname($imagePath);
        
        $gitImagePath = storage_path("app/git-images/{$directory}/" . $filename);
        $publicImagePath = storage_path("app/public/{$imagePath}");
        
        // Create directory if not exists
        $publicDir = dirname($publicImagePath);
        if (!file_exists($publicDir)) {
            mkdir($publicDir, 0755, true);
        }
        
        // Copy from git storage to public storage
        if (file_exists($gitImagePath) && !file_exists($publicImagePath)) {
            copy($gitImagePath, $publicImagePath);
            return true;
        }
        
        return false;
    }
    
    /**
     * Restore all images from database
     */
    public static function restoreAllImagesFromDatabase()
    {
        $items = \App\Models\Item::whereNotNull('image_data')->get();
        $restoredCount = 0;
        
        foreach ($items as $item) {
            if ($item->image && $item->image_data) {
                $publicPath = storage_path('app/public/' . $item->image);
                
                if (!file_exists($publicPath)) {
                    $publicDir = dirname($publicPath);
                    if (!file_exists($publicDir)) {
                        mkdir($publicDir, 0755, true);
                    }
                    
                    $imageData = base64_decode($item->image_data);
                    file_put_contents($publicPath, $imageData);
                    $restoredCount++;
                }
            }
        }
        
        return $restoredCount;
    }
}