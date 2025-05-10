<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookCreator\StoreRequest;
use App\Http\Requests\BookCreator\UpdateRequest;
use App\Http\Services\BookCreatorService;
use App\Models\BookCreator;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BookCreatorController extends Controller
{
    private BookCreatorService $bookCreatorService;

    public function __construct(BookCreatorService $bookCreatorService)
    {
        $this->bookCreatorService = $bookCreatorService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $creators = BookCreator::all();

        return Inertia::render('BookCreator/Index', [
            'creators' => $creators,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        $this->bookCreatorService->store($request);

        return redirect()
            ->route('book-creators.index')
            ->with('success', 'Book creator created successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('BookCreator/Create');

    }

    /**
     * Display the specified resource.
     */
    public function show(BookCreator $bookCreator): Response
    {
        return Inertia::render('BookCreator/Show', [
            'creator' => $bookCreator,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookCreator $bookCreator): Response
    {
        return Inertia::render('BookCreator/Edit', [
            'creator' => $bookCreator,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, BookCreator $bookCreator): RedirectResponse
    {
        $this->bookCreatorService->update($request, $bookCreator);

        return redirect()
            ->route('book-creators.index')
            ->with('success', 'Book creator updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookCreator $bookCreator): RedirectResponse
    {
        $this->bookCreatorService->delete($bookCreator);

        return redirect()
            ->route('book-creators.index')
            ->with('success', 'Book creator deleted successfully.');
    }
}
