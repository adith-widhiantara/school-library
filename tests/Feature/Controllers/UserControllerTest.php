<?php

namespace Tests\Feature\Controllers;

use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Foundation\Testing\RefreshDatabase;

final class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_success(): void
    {
        $admin = $this->getAdmin();
        $this->actingAs($admin);

        $response = $this
            ->get(route('users.index'));

        $response
            ->assertStatus(200)
            ->assertSee('Users');
    }

    public function test_create_success(): void
    {
        $admin = $this->getAdmin();
        $this->actingAs($admin);

        $this
            ->get(route('users.create'))
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Users/Create')
            )
            ->assertSee('Users')
            ->assertSee('Create');
    }
}
