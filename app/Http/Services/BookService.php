<?php

namespace App\Http\Services;

use App\Models\Book;
use App\Models\BookCreator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;

final class BookService extends Service
{
    public function store(FormRequest $request): Book|Model
    {
        $creator = BookCreator::query()
            ->where('name', $request->input('creator_name'))
            ->value('id');

        return Book::query()
            ->create([
                'title' => $request->input('title'),
                'year' => $request->input('year'),
                'creator_id' => $creator,
            ]);
    }

    public function update(FormRequest $request, Book|Model $model): bool
    {
        $creator = BookCreator::query()
            ->where('name', $request->input('creator_name'))
            ->value('id');

        return $model->update([
            'title' => $request->input('title'),
            'year' => $request->input('year'),
            'creator_id' => $creator,
        ]);
    }

    public function delete(Book|Model $model): bool
    {
        return $model->delete();
    }
}
