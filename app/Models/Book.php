<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function creator(): BelongsTo
    {
        return $this->belongsTo(BookCreator::class, 'creator_id', 'id');
    }
}
