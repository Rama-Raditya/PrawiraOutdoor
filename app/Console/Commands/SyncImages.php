<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use App\Models\Item;

class SyncImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'images:sync {direction=both : Direction to sync (git-to-public, public-to-git, both, or db-to-public)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync images between git storage, public storage, and database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $direction = $this->argument('direction');
        
        switch ($direction) {
            case 'git-to-public':
                $this->syncGitToPublic();
                break;
            case 'public-to-git':
                $this->syncPublicToGit();
                break;
            case 'db-to-public':
                $this->syncDatabaseToPublic();
                break;
            case 'both':
                $this->syncGitToPublic();
                $this->syncPublicToGit();
                break;
            default:
                $this->error('Invalid direction. Use: git-to-public, public-to-git, db-to-public, or both');
                return 1;
        }
        
        $this->info('Image sync completed successfully!');
        return 0;
    }
    
    /**
     * Sync images from git storage to public storage
     */
    private function syncGitToPublic()
    {
        $this->info('Syncing images from git storage to public storage...');
        
        $gitImagesPath = storage_path('app/git-images/items');
        $publicStoragePath = storage_path('app/public/items');
        
        // Create directories if not exist
        if (!file_exists($gitImagesPath)) {
            mkdir($gitImagesPath, 0755, true);
        }
        if (!file_exists($publicStoragePath)) {
            mkdir($publicStoragePath, 0755, true);
        }
        
        $images = File::files($gitImagesPath);
        $syncedCount = 0;
        
        foreach ($images as $image) {
            $filename = $image->getFilename();
            $destination = $publicStoragePath . '/' . $filename;
            
            if (!file_exists($destination)) {
                copy($image->getPathname(), $destination);
                $syncedCount++;
                $this->line("  ✓ Synced: {$filename}");
            }
        }
        
        $this->info("Synced {$syncedCount} images from git to public storage.");
    }
    
    /**
     * Sync images from public storage to git storage
     */
    private function syncPublicToGit()
    {
        $this->info('Syncing images from public storage to git storage...');
        
        $gitImagesPath = storage_path('app/git-images/items');
        $publicStoragePath = storage_path('app/public/items');
        
        // Create directories if not exist
        if (!file_exists($gitImagesPath)) {
            mkdir($gitImagesPath, 0755, true);
        }
        if (!file_exists($publicStoragePath)) {
            $this->warn('Public storage directory does not exist.');
            return;
        }
        
        $images = File::files($publicStoragePath);
        $syncedCount = 0;
        
        foreach ($images as $image) {
            $filename = $image->getFilename();
            $destination = $gitImagesPath . '/' . $filename;
            
            if (!file_exists($destination)) {
                copy($image->getPathname(), $destination);
                $syncedCount++;
                $this->line("  ✓ Synced: {$filename}");
            }
        }
        
        $this->info("Synced {$syncedCount} images from public to git storage.");
    }
    
    /**
     * Sync images from database to public storage
     */
    private function syncDatabaseToPublic()
    {
        $this->info('Syncing images from database to public storage...');
        
        $publicStoragePath = storage_path('app/public/items');
        
        // Create directory if not exists
        if (!file_exists($publicStoragePath)) {
            mkdir($publicStoragePath, 0755, true);
        }
        
        $items = Item::whereNotNull('image_data')->get();
        $syncedCount = 0;
        
        foreach ($items as $item) {
            if ($item->image && $item->image_data) {
                $filename = basename($item->image);
                $destination = $publicStoragePath . '/' . $filename;
                
                if (!file_exists($destination)) {
                    $imageData = base64_decode($item->image_data);
                    file_put_contents($destination, $imageData);
                    $syncedCount++;
                    $this->line("  ✓ Restored: {$filename}");
                }
            }
        }
        
        $this->info("Restored {$syncedCount} images from database to public storage.");
    }
}