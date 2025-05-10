<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(5)
            ->regular()
            ->create();

        User::factory(4)
            ->admin()
            ->create();

        User::factory(1)
            ->admin()
            ->create([
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
            ]);

        Book::factory(10)
            ->create();
    }
}
