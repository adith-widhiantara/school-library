<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;

final class UserService extends Service
{
    public function store(FormRequest $request): User|Model
    {
        $validated = $request->validated();

        return User::query()
            ->create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => bcrypt($validated['password']),
                'role' => $validated['role'],
            ]);
    }

    public function update(FormRequest $request, User|Model $model): bool
    {
        return $model->update($request->validated());
    }

    public function delete(User|Model $model): bool
    {
        return $model->delete();
    }
}
