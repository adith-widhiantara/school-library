<?php

namespace App\Http\Services;

use App\Models\BookCreator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;

final class BookCreatorService extends Service
{
    public function store(FormRequest $request): Model|BookCreator
    {
        return BookCreator::query()
            ->create($request->validated());
    }

    public function update(FormRequest $request, BookCreator|Model $model): bool
    {
        return $model->update($request->validated());
    }

    public function delete(BookCreator|Model $model): bool
    {
        return $model->delete();
    }
}
