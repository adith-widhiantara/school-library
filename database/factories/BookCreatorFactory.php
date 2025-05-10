<?php

namespace Database\Factories;

use App\Models\BookCreator;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<BookCreator>
 */
class BookCreatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'bio' => $this->faker->paragraph(),
        ];
    }
}
