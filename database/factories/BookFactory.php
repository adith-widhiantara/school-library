<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\BookCreator;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'year' => $this->faker->year(),
            'creator_id' => BookCreator::factory()->create()->id,
        ];
    }
}
