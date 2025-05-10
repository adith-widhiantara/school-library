<?php

namespace App\Http\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;

interface ServiceInterface
{
    public function store(FormRequest $request): Model;

    public function update(FormRequest $request, Model $model): bool;

    public function delete(Model $model): bool;
}
