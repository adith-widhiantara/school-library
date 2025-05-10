<?php

namespace Tests;

use App\Models\User;
use App\Enums\UserType;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    public function getAdmin()
    {
        return User::factory()->create([
            'role' => UserType::ADMIN,
        ]);
    }
}
