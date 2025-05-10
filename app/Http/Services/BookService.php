<?php

namespace App\Http\Services;

use App\Models\Book;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;

final class BookService extends Service
{
    public function store(FormRequest $request): Book|Model
    {
        return Book::query()
            ->create($request->validated());
    }

    public function update(FormRequest $request, Book|Model $model): bool
    {
        return $model->update($request->validated());
    }

    public function delete(Book|Model $model): bool
    {
        return $model->delete();
    }
}
