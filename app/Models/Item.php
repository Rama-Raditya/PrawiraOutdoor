<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'image_data',
        'price',
        'stock',
        'specifications',
        'category_id',
        'is_available',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'is_available' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function getStockStatusAttribute(): string
    {
        if ($this->stock < 3) {
            return 'low';
        } elseif ($this->stock < 10) {
            return 'medium';
        }
        return 'high';
    }
    
    /**
     * Get image URL - prioritize database image if available
     */
    public function getImageUrlAttribute(): string
    {
        if ($this->image_data) {
            return 'data:image/jpeg;base64,' . $this->image_data;
        }
        return $this->image ? '/storage/' . $this->image : '';
    }
}